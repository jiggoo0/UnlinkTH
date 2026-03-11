"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  CreditCard,
  Search,
  RefreshCw,
  LayoutDashboard,
  Ticket,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { logoutAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface PaymentRecord {
  id: string;
  created_at: string;
  ticket_id: string;
  amount: number;
  ref_number: string;
  status: string;
  ticket_number?: string;
  passenger_name?: string;
}

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleLogout = async () => {
    await logoutAction();
    router.push("/admin/login");
    router.refresh();
  };

  const fetchPayments = async () => {
    setLoading(true);
    try {
      // ปรับปรุง Query ให้ระบุคอลัมน์ชัดเจนและใช้ LEFT JOIN เพื่อความปลอดภัย
      const result = await db.execute(`
        SELECT 
          p.id, 
          p.created_at, 
          p.ticket_id, 
          p.amount, 
          p.ref_number, 
          p.status, 
          t.ticket_number, 
          t.passenger_name 
        FROM payments p
        LEFT JOIN tickets t ON p.ticket_id = t.id
        ORDER BY p.created_at DESC
      `);

      // ตรวจสอบว่ามีข้อมูลกลับมาจริงหรือไม่
      if (result && result.rows) {
        setPayments(result.rows as unknown as PaymentRecord[]);
      } else {
        setPayments([]);
      }
    } catch (err) {
      console.error("Fetch Payments Error:", err);
      toast.error("Database connection failure. System sandbox active.");
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  const filteredPayments = payments.filter(
    (p) =>
      p.ref_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ticket_number?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.passenger_name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#0a0c10] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Unified Admin Navigation */}
        <div className="flex flex-wrap items-center gap-4 border-b border-white/5 pb-8">
          <Button
            asChild
            variant="ghost"
            className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-mono text-[10px] tracking-widest uppercase gap-2"
          >
            <Link href="/admin/tickets">
              <Ticket className="w-3 h-3" />
              Manage Tickets
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary/30 bg-primary/10 text-primary font-mono text-[10px] tracking-widest uppercase gap-2"
          >
            <Link href="/admin/payments">
              <LayoutDashboard className="w-3 h-3" />
              Payment Console
            </Link>
          </Button>
          <div className="ml-auto">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-red-400 hover:text-red-300 hover:bg-red-400/5 font-mono text-[10px] tracking-widest uppercase"
            >
              Terminate Session
            </Button>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="p-5 bg-primary/10 rounded-2xl border border-primary/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <CreditCard className="text-primary w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white tracking-tighter">
                Payments Intelligence
              </h1>
              <p className="text-primary/60 text-sm font-mono tracking-widest uppercase">
                Revenue Flow & Verification Unit
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 w-4 h-4" />
              <Input
                placeholder="Search transaction ref, ticket, or name..."
                className="pl-10 bg-zinc-900/40 border-white/10 text-white h-12 rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              onClick={fetchPayments}
              className="border-white/10 h-12 w-12 p-0 rounded-xl hover:bg-primary/5 hover:text-primary transition-all"
            >
              <RefreshCw
                className={`w-5 h-5 ${loading ? "animate-spin" : ""}`}
              />
            </Button>
          </div>
        </div>

        {/* Intelligence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              label: "Operational Logs",
              value: payments.length,
              color: "text-white",
            },
            {
              label: "Net Assets (THB)",
              value: `฿${payments.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}`,
              color: "text-primary",
            },
            {
              label: "System Protocol",
              value: "SECURE_ACTIVE",
              color: "text-emerald-400",
            },
          ].map((stat, i) => (
            <Card
              key={i}
              className="bg-zinc-900/30 border-white/5 p-8 backdrop-blur-3xl shadow-2xl"
            >
              <p className="text-muted-foreground text-[10px] font-mono uppercase tracking-widest mb-2 opacity-50">
                {stat.label}
              </p>
              <p
                className={`text-5xl font-black tracking-tighter ${stat.color}`}
              >
                {stat.value}
              </p>
            </Card>
          ))}
        </div>

        {/* Data Matrix Area */}
        <Card className="bg-zinc-900/20 border-white/5 overflow-hidden backdrop-blur-2xl shadow-inner">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="p-8 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Execution Time
                  </th>
                  <th className="p-8 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Reference ID
                  </th>
                  <th className="p-8 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70">
                    Target Identity
                  </th>
                  <th className="p-8 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 text-right">
                    Value (THB)
                  </th>
                  <th className="p-8 font-mono text-[10px] uppercase tracking-[0.2em] text-primary/70 text-center">
                    Protocol Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="p-32 text-center">
                      <Loader2 className="w-12 h-12 text-primary/40 animate-spin mx-auto" />
                    </td>
                  </tr>
                ) : filteredPayments.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="p-32 text-center text-zinc-600 font-mono text-sm tracking-widest uppercase opacity-40 italic"
                    >
                      NO DATA FRAGMENTS DETECTED IN MATRIX
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((p) => (
                    <tr
                      key={p.id}
                      className="border-b border-white/5 hover:bg-primary/[0.02] transition-all duration-300 group"
                    >
                      <td className="p-8">
                        <p className="text-zinc-400 text-xs font-mono">
                          {new Date(p.created_at).toLocaleString()}
                        </p>
                      </td>
                      <td className="p-8">
                        <p className="text-zinc-500 font-mono text-xs group-hover:text-primary transition-colors cursor-default">
                          {p.ref_number}
                        </p>
                      </td>
                      <td className="p-8">
                        <p className="text-white font-bold text-lg tracking-tighter uppercase">
                          {p.ticket_number}
                        </p>
                        <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1 opacity-60">
                          {p.passenger_name}
                        </p>
                      </td>
                      <td className="p-8 text-right">
                        <p className="text-white font-black text-xl tracking-tight">
                          ฿{p.amount.toLocaleString()}
                        </p>
                      </td>
                      <td className="p-8">
                        <div className="flex justify-center">
                          <Badge className="bg-emerald-500/5 text-emerald-400 border-emerald-500/10 text-[10px] px-5 py-1.5 font-mono tracking-[0.2em] uppercase rounded-full">
                            {p.status}
                          </Badge>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
