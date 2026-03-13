/** @format */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });

      const data = await result.json();

      if (data.success) {
        router.push("/admin/liaison");
      } else {
        setError(data.error || "Access Denied");
      }
    } catch {
      setError("System Connection Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-[#0a0f1d] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <ShieldCheck size={120} />
        </div>

        <div className="text-center space-y-2">
          <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6">
            <Lock className="text-primary h-8 w-8" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            Command{" "}
            <span className="text-primary italic font-light lowercase">
              Center
            </span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-mono tracking-[0.4em] uppercase">
            Restricted Operational Access
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
              Admin Identifier
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all placeholder:text-zinc-800"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">
              Access Key
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-all placeholder:text-zinc-800"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-[10px] font-mono text-center uppercase tracking-widest bg-red-500/10 py-2 rounded-lg">
              {error}
            </p>
          )}

          <Button
            disabled={loading}
            className="w-full h-16 rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5" />
            ) : (
              <>
                Initialize Access <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>

        <p className="text-[8px] text-center text-zinc-600 uppercase font-mono tracking-widest pt-4">
          IP Logs are being recorded for security audit.
        </p>
      </motion.div>
    </div>
  );
}
