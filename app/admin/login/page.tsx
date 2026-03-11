"use client";

import React, { useState } from "react";
import { loginAction } from "@/app/actions/authAction";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  Loader2,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminLoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result.success) {
      toast.success("Login Successful. Redirecting to Terminal...");
      router.push("/admin/payments");
      router.refresh();
    } else {
      toast.error(result.error || "Authentication Failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <Card className="bg-zinc-900/50 border-white/10 p-10 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="flex flex-col items-center gap-6 mb-10">
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <ShieldCheck className="text-primary w-10 h-10" />
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-black text-white tracking-tighter uppercase">
                Admin Authentication
              </h1>
              <p className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase">
                Security Level: Classified
              </p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase pl-1">
                  Identity UID
                </label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="username"
                    placeholder="admin"
                    className="pl-10 bg-black/40 border-white/5 text-white h-12 focus:border-primary/40 transition-all rounded-xl"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase pl-1">
                  Secret Key
                </label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-primary transition-colors" />
                  <Input
                    name="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-10 bg-black/40 border-white/5 text-white h-12 focus:border-primary/40 transition-all rounded-xl"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-xl"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <div className="flex items-center gap-2">
                  <span>Enter Terminal</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
            <div className="flex items-center gap-2 text-muted-foreground/40 font-mono text-[8px] tracking-widest uppercase">
              <Terminal className="w-3 h-3" />
              <span>9mzm Core Secure Framework v4.0</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
