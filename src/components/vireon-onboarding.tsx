"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  User,
  Mail,
  ArrowRight,
  ArrowLeft,
  Check,
  Copy,
  Building2,
  ShieldCheck,
  Globe2,
  Clock,
  Send,
} from "lucide-react";

interface VireonOnboardingProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "welcome" | "info" | "plan" | "review";

const STEPS: { id: Step; label: string }[] = [
  { id: "welcome", label: "Welcome" },
  { id: "info", label: "Info" },
  { id: "plan", label: "Plan" },
  { id: "review", label: "Payment" },
];

const stepVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 24 : -24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -24 : 24, opacity: 0 }),
};

export default function VireonOnboardingFlow({ isOpen, onClose }: VireonOnboardingProps) {
  const [step, setStep] = useState<Step>("welcome");
  const [direction, setDirection] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<"premier" | "orbit">("premier");
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const bankDetails = {
    accountNumber: "7014954174",
    bankName: "Moniepoint",
    accountName: "Alabi Yusuf Olumide",
  };

  const plans = {
    premier: {
      name: "Vireon Premier",
      price: 14500,
      formattedPrice: "₦14,500",
      description: "Full platform access and every earning stream, from day one.",
    },
    orbit: {
      name: "Vireon Orbit",
      price: 5000,
      formattedPrice: "₦5,000",
      description: "Core features and daily reward tasks, at a lighter entry point.",
    },
  };

  const currentPlanDetails = plans[selectedPlan];
  const currentIndex = STEPS.findIndex((s) => s.id === step);

  const goTo = (next: Step) => {
    const nextIndex = STEPS.findIndex((s) => s.id === next);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setStep(next);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCompletePayment = () => {
    setIsSubmitting(true);
    const telegramUsername = "YourTelegramUsername";
    const message = encodeURIComponent(
      `New Vireon Payment Confirmation\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Selected Plan: ${currentPlanDetails.name}\n` +
        `Amount: ${currentPlanDetails.formattedPrice}\n` +
        `Bank: Moniepoint (${bankDetails.accountNumber})\n` +
        `Status: Transfer made, awaiting manual verification`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      window.location.href = `https://t.me/${telegramUsername}?text=${message}`;
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl bg-slate-900 border border-white/10 rounded-[2rem] p-7 sm:p-9 shadow-2xl overflow-hidden my-8"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X size={16} strokeWidth={2} />
        </button>

        {/* Step rail */}
        <div className="pt-1 pb-8">
          <div className="flex items-center">
            {STEPS.map((s, i) => {
              const isComplete = i < currentIndex;
              const isActive = i === currentIndex;
              return (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`relative flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-bold transition-colors duration-300 ${
                        isActive
                          ? "border-indigo-400 bg-indigo-500/15 text-indigo-300"
                          : isComplete
                          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                          : "border-white/10 bg-white/[0.02] text-slate-600"
                      }`}
                    >
                      {isComplete ? <Check size={13} strokeWidth={2.5} /> : i + 1}
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                        isActive ? "text-slate-200" : "text-slate-600"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="relative mx-2 mb-4 h-px flex-1 bg-white/[0.06] overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-indigo-500"
                        initial={false}
                        animate={{ width: i < currentIndex ? "100%" : "0%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={step}
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {step === "welcome" && (
                <div className="space-y-7 text-center">
                  <div className="space-y-3">
                    <h1 className="font-display font-bold text-3xl sm:text-[2.25rem] text-white tracking-tight">
                      Welcome to Vireon
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto">
                      Reviews, surveys, and task-based earning in one account.
                      Set up your profile to see what's currently available.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-1 text-left">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                      <Globe2 size={16} className="text-indigo-400" strokeWidth={2} />
                      <p className="font-semibold text-sm text-white pt-1">Open access</p>
                      <p className="text-xs text-slate-500 leading-snug">Tasks available across regions</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-1.5">
                      <ShieldCheck size={16} className="text-indigo-400" strokeWidth={2} />
                      <p className="font-semibold text-sm text-white pt-1">Verified activity</p>
                      <p className="text-xs text-slate-500 leading-snug">Each step is checked before activation</p>
                    </div>
                  </div>

                  <button
                    onClick={() => goTo("info")}
                    className="group w-full py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow-lg shadow-indigo-950/40 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    Get started
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              )}

              {step === "info" && (
                <div className="space-y-6">
                  <div className="text-center space-y-1.5">
                    <h2 className="font-display font-semibold text-2xl text-white">Tell us about yourself</h2>
                    <p className="text-slate-500 text-[13px]">This sets up your account profile.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Full name
                      </label>
                      <div className="relative">
                        <User size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                        Email address
                      </label>
                      <div className="relative">
                        <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/40 text-sm transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => goTo("welcome")}
                      className="flex items-center gap-1.5 px-5 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>
                    <button
                      disabled={!fullName.trim() || !email.includes("@")}
                      onClick={() => goTo("plan")}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-white hover:bg-indigo-500 transition-all"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === "plan" && (
                <div className="space-y-6">
                  <div className="text-center space-y-1.5">
                    <h2 className="font-display font-semibold text-2xl text-white">Choose your plan</h2>
                    <p className="text-slate-500 text-[13px]">You can change this later from your dashboard.</p>
                  </div>

                  <div className="space-y-3">
                    {(["premier", "orbit"] as const).map((key) => {
                      const plan = plans[key];
                      const active = selectedPlan === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setSelectedPlan(key)}
                          className={`w-full text-left rounded-2xl border p-5 transition-all flex items-start justify-between gap-4 ${
                            active
                              ? "bg-indigo-500/[0.08] border-indigo-500/60"
                              : "bg-white/[0.02] border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="space-y-1.5">
                            <span className="font-semibold text-white text-[15px]">{plan.name}</span>
                            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">{plan.description}</p>
                            <p className="text-lg font-bold text-indigo-300 pt-1">{plan.formattedPrice}</p>
                          </div>
                          <div
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                              active ? "border-indigo-400 bg-indigo-500 text-white" : "border-slate-700"
                            }`}
                          >
                            {active && <Check size={12} strokeWidth={3} />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={() => goTo("info")}
                      className="flex items-center gap-1.5 px-5 py-3.5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-400 font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <ArrowLeft size={14} />
                      Back
                    </button>
                    <button
                      onClick={() => goTo("review")}
                      className="flex-1 py-3.5 px-6 rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-500 transition-all"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === "review" && (
                <div className="space-y-5">
                  <div className="text-center space-y-1.5">
                    <h2 className="font-display font-semibold text-2xl text-white">Bank transfer</h2>
                    <p className="text-slate-500 text-[13px]">
                      Transfer the exact amount below to activate your account.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
                    <Clock size={15} className="mt-0.5 shrink-0 text-amber-400" strokeWidth={2} />
                    <p className="text-[12px] leading-relaxed text-amber-200/80">
                      Vireon is in beta. Payments are currently verified manually while automated
                      verification is being built — activation may take a little longer than usual.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-4 flex items-center justify-between text-xs">
                    <div>
                      <p className="text-slate-500">Account holder</p>
                      <p className="font-semibold text-white mt-0.5">{fullName || "—"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500">Plan chosen</p>
                      <p className="font-semibold text-indigo-300 mt-0.5">{currentPlanDetails.name}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-indigo-400" />
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                            Bank
                          </span>
                          <p className="font-semibold text-white text-sm">{bankDetails.bankName}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                          Amount due
                        </span>
                        <p className="font-display font-bold text-xl text-emerald-400">
                          {currentPlanDetails.formattedPrice}
                        </p>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Account number
                      </span>
                      <div className="flex items-center justify-between mt-1">
                        <span className="font-mono font-bold text-2xl text-white tracking-wider">
                          {bankDetails.accountNumber}
                        </span>
                        <button
                          onClick={handleCopy}
                          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/25 text-indigo-300 text-xs font-semibold transition-all active:scale-95"
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            {copied ? (
                              <motion.span
                                key="copied"
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="flex items-center gap-1.5"
                              >
                                <Check size={13} /> Copied
                              </motion.span>
                            ) : (
                              <motion.span
                                key="copy"
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="flex items-center gap-1.5"
                              >
                                <Copy size={13} /> Copy
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Account name
                      </span>
                      <p className="font-semibold text-slate-200 text-sm tracking-wide mt-0.5">
                        {bankDetails.accountName}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <button
                      disabled={isSubmitting}
                      onClick={handleCompletePayment}
                      className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-white shadow-lg shadow-emerald-950/30 transition-all active:scale-[0.99] disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Opening Telegram…"
                      ) : (
                        <>
                          <Send size={15} />
                          I've made the transfer
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => goTo("plan")}
                      className="w-full py-2.5 text-center text-xs text-slate-500 hover:text-slate-300 font-medium transition-colors"
                    >
                      Change selected plan
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}