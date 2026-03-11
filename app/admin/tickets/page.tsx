"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createTicketAction, TicketData } from "@/app/actions/ticket";
import { logoutAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { UnlinkTicket } from "@/components/shared/UnlinkTicket";
import { 
  Ticket, 
  LayoutDashboard, 
  PlusCircle, 
  RefreshCw, 
  ArrowRight,
  User,
  Monitor
} from "lucide-react";
import Link from "next/link";

export default function AdminTicketPage() {
  const [loading, setLoading] = useState(false);
  const [lastTicket, setLastTicket] = useState<TicketData | null>(null);
  const router = useRouter();
  
  const [formData, setFormData] = useState<TicketData>({
    ticket_number: "",
    passenger_name: "",
    id_card_last_4: "",
    origin: "กรุงเทพฯ",
    destination: "เชียงใหม่",
    departure_time: new Date().toISOString().slice(0, 16),
    seat_number: "1A",
  });

  const handleLogout = async () => {
    await logoutAction();
    router.push("/admin/login");
    router.refresh();
  };

  const generateRandomTicket = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setFormData({ ...formData, ticket_number: `UL${randomNum}` });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await createTicketAction(formData);

      if (!result.success || !result.data) {
        throw new Error(result.error || "ไม่ได้รับข้อมูลตั๋วกลับมา");
      }

      const ticketResult = result.data as unknown as TicketData;
      setLastTicket(ticketResult);

      toast.success(`ออกตั๋วสำเร็จ: ${formData.ticket_number}`);
      setFormData({
        ticket_number: "",
        passenger_name: "",
        id_card_last_4: "",
        origin: "กรุงเทพฯ",
        destination: "เชียงใหม่",
        departure_time: new Date().toISOString().slice(0, 16),
        seat_number: "1A",
      });
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      toast.error(`ข้อผิดพลาด: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0c10] pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Unified Admin Navigation */}
        <div className="flex flex-wrap items-center gap-4 border-b border-white/5 pb-8">
          <Button asChild variant="outline" className="border-primary/30 bg-primary/10 text-primary font-mono text-[10px] tracking-widest uppercase gap-2">
            <Link href="/admin/tickets">
              <Ticket className="w-3 h-3" />
              Manage Tickets
            </Link>
          </Button>
          <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/5 font-mono text-[10px] tracking-widest uppercase gap-2">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                <PlusCircle className="text-primary w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Manual Issuance</h1>
                <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase opacity-60">ออกตั๋วระบบภายใน</p>
              </div>
            </div>

            <Card className="bg-zinc-900/30 border-white/5 p-8 backdrop-blur-3xl shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Ticket No.</label>
                      <div className="flex gap-2">
                        <Input 
                          value={formData.ticket_number}
                          onChange={e => setFormData({...formData, ticket_number: e.target.value.toUpperCase()})}
                          className="bg-black/40 border-white/10 text-white font-bold h-11"
                          required
                        />
                        <Button type="button" variant="outline" size="icon" onClick={generateRandomTicket} className="h-11 w-11 border-white/10 text-primary">
                          <RefreshCw className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">ID Last 4</label>
                      <Input 
                        maxLength={4}
                        value={formData.id_card_last_4}
                        onChange={e => setFormData({...formData, id_card_last_4: e.target.value})}
                        className="bg-black/40 border-white/10 text-white h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Passenger Identity</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-primary transition-colors" />
                      <Input 
                        placeholder="NAME_SURNAME"
                        value={formData.passenger_name}
                        onChange={e => setFormData({...formData, passenger_name: e.target.value.toUpperCase()})}
                        className="pl-10 bg-black/40 border-white/5 text-white h-12 focus:border-primary/40 transition-all rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Origin</label>
                      <Input 
                        value={formData.origin}
                        onChange={e => setFormData({...formData, origin: e.target.value})}
                        className="bg-black/40 border-white/10 text-white h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Destination</label>
                      <Input 
                        value={formData.destination}
                        onChange={e => setFormData({...formData, destination: e.target.value})}
                        className="bg-black/40 border-white/10 text-white h-11"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Seat No.</label>
                      <Input 
                        value={formData.seat_number}
                        onChange={e => setFormData({...formData, seat_number: e.target.value.toUpperCase()})}
                        className="bg-black/40 border-white/10 text-white font-mono h-11"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-primary/60">Departure</label>
                      <Input 
                        type="datetime-local"
                        value={formData.departure_time}
                        onChange={e => setFormData({...formData, departure_time: e.target.value})}
                        className="bg-black/40 border-white/10 text-white text-[10px] h-11"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest"
                >
                  {loading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    "Authorize & Issue Ticket"
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Preview Side */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <Monitor className="text-emerald-400 w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-tight">System Monitor</h2>
                  <p className="text-emerald-400/60 text-xs font-mono tracking-widest uppercase opacity-60">Real-time Preview</p>
                </div>
              </div>
              <Badge className="bg-emerald-500/5 text-emerald-400 border-emerald-500/10 font-mono text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full">
                Protocol Active
              </Badge>
            </div>

            <div className="relative min-h-[500px] flex items-center justify-center p-4">
              {lastTicket ? (
                <div className="w-full animate-in fade-in zoom-in-95 duration-700">
                  <UnlinkTicket data={lastTicket} serviceName="INTERNAL_AUTHORIZATION_ISSUE" />
                  <div className="mt-8 flex justify-center gap-4">
                    <Button asChild variant="link" className="text-primary hover:text-white font-mono text-[10px] tracking-widest uppercase">
                      <Link href="/verify-ticket">
                        Verify Authenticity <ArrowRight className="ml-2 w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="w-full aspect-video border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center p-12 space-y-6">
                  <div className="w-20 h-20 bg-zinc-900/50 rounded-full flex items-center justify-center border border-white/5">
                    <Ticket className="w-8 h-8 text-zinc-700" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-zinc-500 font-bold uppercase tracking-widest italic">Awaiting Input Parameters</p>
                    <p className="text-zinc-700 text-xs font-mono leading-relaxed">กรอกข้อมูลด้านซ้ายเพื่อจำลองการออกตั๋วเข้าระบบ</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
