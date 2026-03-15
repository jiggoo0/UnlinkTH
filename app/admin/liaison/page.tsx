"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  approveCaseAction,
  uploadFileAction,
  type LiaisonCase,
} from "@/lib/actions";
import {
  ShieldCheck,
  Send,
  Users,
  Clock,
  CheckCircle2,
  LogOut,
  FileUp,
  FileCheck,
  RefreshCw,
  TrendingUp,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/**
 * 👑 ADMIN LIAISON DASHBOARD (v2.0 - Stable Client)
 * ---------------------------------------------------------
 * ปรับปรุงใหม่เพื่อแก้ปัญหา Connection Failure บน Edge Runtime
 * โดยการใช้ Client-side fetching และ Dynamic UI
 */

export default function AdminLiaisonPage() {
  const router = useRouter();
  const [cases, setCases] = useState<LiaisonCase[]>([]);
  const [adminUsername, setAdminUsername] = useState("Admin");
  const [analytics, setAnalytics] = useState({
    totalRevenue: 0,
    approvedCount: 0,
    efficiency: 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/admin/liaison/data");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      
      const data = await res.json();
      if (data.success) {
        setCases(data.cases);
        setAdminUsername(data.adminUsername);
        setAnalytics(data.analytics);
      } else {
        toast.error(data.error || "Failed to fetch data");
      }
    } catch (err) {
      toast.error("Database connection failure. Please retry.");
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  const handleApprove = async (caseId: string) => {
    const confirmApprove = window.confirm("Confirm dispatch for case " + caseId + "?");
    if (!confirmApprove) return;

    try {
      const result = await approveCaseAction(caseId);
      if (result.success) {
        toast.success("Case dispatched successfully");
        fetchDashboardData();
      } else {
        toast.error(result.error || "Approval failed");
      }
    } catch (err) {
      toast.error("Operational failure");
    }
  };

  const handleFileUpload = async (caseId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      toast.info("Uploading high-resolution document...");
      const result = await uploadFileAction(caseId, formData);
      if (result.success) {
        toast.success("Document attached to case");
        fetchDashboardData();
      } else {
        toast.error(result.error || "Upload failed");
      }
    } catch (err) {
      toast.error("Network upload error");
    }
  };

  const filteredCases = cases.filter(c => 
    c.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050810] text-white flex flex-col items-center justify-center space-y-6">
        <RefreshCw className="h-12 w-12 text-primary animate-spin" />
        <p className="text-xs font-mono uppercase tracking-[0.4em] text-primary/60">Establishing Secure Sync...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050810] text-white p-8 font-sans">
      <header className="max-w-6xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">
            Liaison <span className="text-primary italic font-light lowercase">Dashboard</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-mono tracking-[0.4em] uppercase">
            Operational Authority: <span className="text-primary">{adminUsername}</span>
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input 
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0a0f1d] border border-white/5 rounded-xl pl-12 pr-4 py-3 text-xs focus:outline-none focus:border-primary/40 transition-all"
            />
          </div>
          
          <Button
            onClick={fetchDashboardData}
            variant="ghost"
            disabled={isRefreshing}
            className="h-12 w-12 rounded-xl border border-white/5 hover:bg-white/5 text-zinc-500"
          >
            <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </Button>

          <Button
            onClick={handleLogout}
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-xl border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 text-zinc-500 hover:text-red-500 transition-all"
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* 📊 Metrics Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all flex flex-col justify-between group">
            <div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 group-hover:text-primary transition-colors">
                Total Revenue
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-primary italic">
                  ฿{analytics.totalRevenue.toLocaleString()}
                </span>
                <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">Net Yield</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all flex flex-col justify-between">
            <div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                Active Cases
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-white italic">
                  {cases.length}
                </span>
                <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">Units</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all flex flex-col justify-between">
            <div>
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
                Efficiency
              </p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-emerald-500 italic">
                  {analytics.efficiency}%
                </span>
                <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">Success</span>
              </div>
            </div>
          </div>
        </section>

        {/* 📈 Data Table */}
        {filteredCases.length === 0 ? (
          <div className="text-center py-20 bg-[#0a0f1d] border border-white/5 rounded-[2rem]">
            <Users className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              {searchTerm ? "No cases match your search." : "No active operational data."}
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 hover:border-white/10 transition-all group relative overflow-hidden"
              >
                {item.status === 'approved' && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[50px] -mr-16 -mt-16 pointer-events-none" />
                )}
                
                <div className="flex items-center gap-6 w-full lg:w-auto">
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center border transition-all duration-500 ${
                      item.status === "approved" || item.status === "CONFIRMED"
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" 
                        : "bg-amber-500/10 border-amber-500/20 text-amber-500"
                    }`}
                  >
                    {item.status === "approved" || item.status === "CONFIRMED" ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <Clock className="h-6 w-6 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {item.id}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest ${
                          item.status === "approved" || item.status === "CONFIRMED"
                            ? "bg-emerald-500/20 text-emerald-500" 
                            : "bg-amber-500/20 text-amber-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {item.customer_name}
                    </h3>
                    <p className="text-sm text-zinc-500">{item.email}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-8 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 border-white/5 pt-6 lg:pt-0">
                  <div className="text-right hidden sm:block min-w-[120px]">
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                      Service Protocol
                    </p>
                    <p className="text-xs font-bold uppercase tracking-tighter text-primary/80">
                      {item.service}
                    </p>
                  </div>

                  {/* Payment Slip */}
                  <div className="flex items-center gap-4">
                    {item.slip_url ? (
                      <a
                        href={item.slip_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 hover:bg-primary hover:text-black transition-all group/btn"
                      >
                        <FileCheck className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Slip</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-zinc-600 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                        <Clock className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Pending</span>
                      </div>
                    )}
                  </div>

                  {/* PDF Dispatch */}
                  <div className="flex items-center gap-4">
                    {item.file_url ? (
                      <a 
                        href={item.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        <FileCheck className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Dispatched</span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          id={`file-${item.id}`}
                          onChange={(e) => handleFileUpload(item.id, e)}
                        />
                        <label
                          htmlFor={`file-${item.id}`}
                          className="h-10 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <FileUp className="h-3 w-3" /> UPLOAD PDF
                        </label>
                      </div>
                    )}
                  </div>

                  {item.status !== "approved" && item.status !== "CONFIRMED" ? (
                    <Button 
                      onClick={() => handleApprove(item.id)}
                      className="h-14 px-8 rounded-2xl bg-white text-black hover:bg-primary hover:text-black font-black text-xs tracking-widest uppercase transition-all flex items-center gap-3 shadow-xl"
                    >
                      Dispatch <Send className="h-4 w-4" />
                    </Button>
                  ) : (
                    <div className="flex items-center gap-3 text-emerald-500 px-6 py-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Complete
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center opacity-30">
        <p className="text-[8px] font-mono uppercase tracking-[0.3em]">
          Secure Console • {adminUsername}
        </p>
        <p className="text-[8px] font-mono uppercase tracking-[0.3em]">
          UNLINK-GLOBAL v4.2.0
        </p>
      </footer>
    </div>
  );
}
