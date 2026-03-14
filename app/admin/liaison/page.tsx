import { db, initDatabase } from "@/lib/db";
import { isAuthenticated, logoutAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function AdminLiaisonPage() {
  // 1. Security Check
  const auth = await isAuthenticated();
  if (!auth) redirect("/admin/login");

  // 2. Database Init (Ensure schema exists)
  await initDatabase();

  // 3. Fetch Cases & Analytics from Turso
  let cases: LiaisonCase[] = [];
  let totalRevenue = 0;
  let approvedCount = 0;
  try {
    const result = await db.execute(
      "SELECT * FROM cases ORDER BY created_at DESC",
    );
    cases = result.rows as unknown as LiaisonCase[];

    // Calculate Analytics
    totalRevenue = cases.reduce((acc, curr) => acc + (curr.amount || 0), 0);
    approvedCount = cases.filter((c) => c.status === "approved").length;
  } catch {
    console.warn("⚠️ [DB]: Skipping fetch during build or connection failure.");
  }

  return (
    <div className="min-h-screen bg-[#050810] text-white p-8">
      <header className="max-w-6xl mx-auto mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black tracking-tighter uppercase italic">
            Liaison{" "}
            <span className="text-primary italic font-light lowercase">
              Dashboard
            </span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-mono tracking-[0.4em] uppercase">
            Operation Authority Level 4
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
              System Status
            </p>
            <p className="text-xs font-bold uppercase tracking-tighter">
              Operational Hub Active
            </p>
          </div>
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <ShieldCheck className="text-primary h-6 w-6" />
          </div>

          <form
            action={async () => {
              "use server";
              await logoutAdmin();
              redirect("/admin/login");
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-xl border border-white/5 hover:bg-red-500/10 hover:border-red-500/20 text-zinc-500 hover:text-red-500 transition-all"
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* 📊 Revenue & Metrics Overview */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
              Total Revenue Generated
            </p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-primary italic">
                ฿{totalRevenue.toLocaleString()}
              </span>
              <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">
                Net Profit
              </span>
            </div>
          </div>
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
              Active Operations
            </p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-white italic">
                {cases.length}
              </span>
              <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">
                Total Cases
              </span>
            </div>
          </div>
          <div className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all">
            <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4">
              Success Delivery Rate
            </p>
            <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-emerald-500 italic">
                {cases.length > 0
                  ? Math.round((approvedCount / cases.length) * 100)
                  : 0}
                %
              </span>
              <span className="text-zinc-600 text-xs mb-1 font-mono uppercase">
                Efficiency
              </span>
            </div>
          </div>
        </section>

        {cases.length === 0 ? (
          <div className="text-center py-20 bg-[#0a0f1d] border border-white/5 rounded-[2rem]">
            <Users className="h-12 w-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
              No active cases found in database.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {cases.map((item) => (
              <div
                key={item.id}
                className="bg-[#0a0f1d] border border-white/5 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/10 transition-all group"
              >
                <div className="flex items-center gap-6 w-full md:w-auto">
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center border ${item.status === "approved" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-amber-500/10 border-amber-500/20 text-amber-500"}`}
                  >
                    {item.status === "approved" ? (
                      <CheckCircle2 />
                    ) : (
                      <Clock className="animate-pulse" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {item.id}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest ${item.status === "approved" ? "bg-emerald-500/20 text-emerald-500" : "bg-amber-500/20 text-amber-500"}`}
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

                <div className="flex items-center gap-12 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-white/5 pt-6 md:pt-0">
                  <div className="text-right hidden sm:block">
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1">
                      Service Type
                    </p>
                    <p className="text-xs font-bold uppercase tracking-tighter">
                      {item.service}
                    </p>
                  </div>

                  {/* 🧾 Payment Slip Section */}
                  <div className="flex items-center gap-4">
                    {item.slip_url ? (
                      <a
                        href={item.slip_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl border border-primary/20 hover:bg-primary hover:text-black transition-all"
                      >
                        <FileCheck className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">
                          View Slip
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 text-zinc-600 bg-white/5 px-4 py-2 rounded-xl border border-white/5">
                        <Clock className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">
                          Waiting Slip
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 📂 File Upload Section */}
                  <div className="flex items-center gap-4">
                    {item.file_url ? (
                      <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20">
                        <FileCheck className="h-4 w-4" />
                        <span className="text-[9px] font-black uppercase tracking-widest">
                          Document Attached
                        </span>
                      </div>
                    ) : (
                      <form
                        className="flex items-center gap-2"
                        action={async (formData) => {
                          "use server";
                          await uploadFileAction(item.id, formData);
                        }}
                      >
                        <input
                          type="file"
                          name="file"
                          accept="application/pdf"
                          className="hidden"
                          id={`file-${item.id}`}
                          required
                        />
                        <label
                          htmlFor={`file-${item.id}`}
                          className="h-10 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-[9px] font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <FileUp className="h-3 w-3" /> Select PDF
                        </label>
                        <Button
                          type="submit"
                          size="sm"
                          className="h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary hover:text-black font-bold text-[9px] uppercase tracking-widest transition-all"
                        >
                          Upload
                        </Button>
                      </form>
                    )}
                  </div>

                  {item.status !== "approved" ? (
                    <form
                      action={async () => {
                        "use server";
                        await approveCaseAction(item.id);
                      }}
                    >
                      <Button className="h-14 px-8 rounded-2xl bg-white text-black hover:bg-primary hover:text-black font-black text-xs tracking-widest uppercase transition-all flex items-center gap-3">
                        Approve & Send <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  ) : (
                    <div className="flex items-center gap-3 text-emerald-500 px-6 py-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Dispatched
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
          Authorized Access Only • UNLINK-TH Secure Liaison
        </p>
        <p className="text-[8px] font-mono uppercase tracking-[0.3em]">
          System v4.2.0-Alpha
        </p>
      </footer>
    </div>
  );
}
