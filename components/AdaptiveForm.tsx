"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ContactDict, ContactServiceCard } from "@/lib/types/dictionary";

const TIDAL_EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: TIDAL_EASE, delay: i * 0.08 },
  }),
};

// ─── Primitive Components ─────────────────────────────────────────────────────

function FieldLabel({ label }: { label: string }) {
  return (
    <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/50 block mb-2">
      {label}
    </label>
  );
}

function ErrorMessage({ error }: { error?: string }) {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          className="font-mono text-[10px] tracking-widest text-[#EF4444] mt-2"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function AnimatedInput({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  hasError,
}: {
  id: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  hasError?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <motion.input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        animate={{
          borderColor: hasError ? "#EF4444" : focused ? "#0052FF" : "rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.2 }}
        className="w-full bg-transparent border-2 px-4 py-3 font-sans text-lg text-foreground placeholder:text-foreground/30 outline-none focus:outline-none"
        style={{ borderColor: "rgba(0,0,0,0.2)" }}
      />
    </div>
  );
}

function AnimatedTextarea({
  id,
  value,
  onChange,
  placeholder,
  hasError,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  hasError?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <motion.textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        rows={4}
        animate={{
          borderColor: hasError ? "#EF4444" : focused ? "#0052FF" : "rgba(0,0,0,0.2)",
        }}
        transition={{ duration: 0.2 }}
        className="w-full bg-transparent border-2 px-4 py-3 font-sans text-lg text-foreground placeholder:text-foreground/30 outline-none focus:outline-none resize-none leading-relaxed"
        style={{ borderColor: "rgba(0,0,0,0.2)" }}
      />
    </div>
  );
}

function SingleSelectGroup({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`text-left px-4 py-3 border-2 transition-colors font-sans text-lg ${
            value === opt.value
              ? "border-marea-onyx bg-marea-onyx text-white"
              : "border-foreground/20 text-foreground/70 hover:border-foreground/50 hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function MultiChipGroup({
  options,
  values,
  onChange,
}: {
  options: string[];
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (values.includes(opt)) {
      onChange(values.filter((v) => v !== opt));
    } else {
      onChange([...values, opt]);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = values.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`font-mono text-xs tracking-widest px-4 py-2 border-2 transition-colors ${
              selected
                ? "bg-accent text-white border-accent"
                : "bg-transparent text-foreground/70 border-foreground/20 hover:border-accent hover:text-accent"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

// ─── Service Selectors ────────────────────────────────────────────────────────

function ServiceCard({
  service,
  selected,
  onClick,
  index,
}: {
  service: ContactServiceCard;
  selected: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      type="button"
      custom={index}
      variants={itemVariants}
      onClick={onClick}
      className={`relative text-left p-6 border-2 transition-all duration-300 w-full group ${
        selected
          ? "border-accent bg-accent/5"
          : "border-foreground/10 hover:border-foreground/30 bg-transparent"
      }`}
    >
      <div className="font-mono text-sm tracking-widest mb-3 text-marea-onyx flex items-center gap-3">
        {selected && (
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
        )}
        <span className={selected ? "text-accent font-bold" : "group-hover:text-accent transition-colors"}>
          {service.label}
        </span>
      </div>
      <h3 className="font-display text-2xl tracking-tight text-foreground/80 leading-tight">
        {service.description}
      </h3>
    </motion.button>
  );
}

// ─── Adaptive Schemas ─────────────────────────────────────────────────────────

function WebDevSchema({
  dict,
  formDict,
  state,
  setState,
}: {
  dict: ContactDict["webDev"];
  formDict: ContactDict["form"];
  state: any;
  setState: (s: any) => void;
}) {
  const set = (k: string, v: any) => setState({ ...state, [k]: v });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-10 py-8"
    >
      {/* Grid for Selects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel label={dict.projectType.label} />
          <SingleSelectGroup
            options={dict.projectType.options}
            value={state.projectType || ""}
            onChange={(v) => set("projectType", v)}
          />
          <AnimatePresence>
            {state.projectType === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
              >
                <AnimatedInput
                  id="webdev-other-project-type"
                  value={state.otherProjectType || ""}
                  onChange={(v) => set("otherProjectType", v)}
                  placeholder={formDict.otherPlaceholder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <FieldLabel label={dict.motionLevel.label} />
          <SingleSelectGroup
            options={dict.motionLevel.options}
            value={state.motionLevel || ""}
            onChange={(v) => set("motionLevel", v)}
          />
        </div>
      </div>

      {/* Grid for Chips */}

    </motion.div>
  );
}

function SystemsSchema({
  dict,
  formDict,
  state,
  setState,
}: {
  dict: ContactDict["systems"];
  formDict: ContactDict["form"];
  state: any;
  setState: (s: any) => void;
}) {
  const set = (k: string, v: any) => setState({ ...state, [k]: v });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-10 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel label={dict.coreObjective.label} />
          <SingleSelectGroup
            options={dict.coreObjective.options}
            value={state.coreObjective || ""}
            onChange={(v) => set("coreObjective", v)}
          />
          <AnimatePresence>
            {state.coreObjective === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
              >
                <AnimatedInput
                  id="systems-other-objective"
                  value={state.otherCoreObjective || ""}
                  onChange={(v) => set("otherCoreObjective", v)}
                  placeholder={formDict.otherPlaceholder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <FieldLabel label={dict.systemType.label} />
          <SingleSelectGroup
            options={dict.systemType.options}
            value={state.systemType || ""}
            onChange={(v) => set("systemType", v)}
          />
          <AnimatePresence>
            {state.systemType === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
              >
                <AnimatedInput
                  id="systems-other-type"
                  value={state.otherSystemType || ""}
                  onChange={(v) => set("otherSystemType", v)}
                  placeholder={formDict.otherPlaceholder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel label={dict.userScope.label} />
          <SingleSelectGroup
            options={dict.userScope.options}
            value={state.userScope || ""}
            onChange={(v) => set("userScope", v)}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ScriptingSchema({
  dict,
  formDict,
  state,
  setState,
}: {
  dict: ContactDict["scripting"];
  formDict: ContactDict["form"];
  state: any;
  setState: (s: any) => void;
}) {
  const id = useId();
  const set = (k: string, v: any) => setState({ ...state, [k]: v });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="space-y-10 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel label={dict.workflowChallenge.label} />
          <SingleSelectGroup
            options={dict.workflowChallenge.options}
            value={state.workflowChallenge || ""}
            onChange={(v) => set("workflowChallenge", v)}
          />
          <AnimatePresence>
            {state.workflowChallenge === "other" && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
              >
                <AnimatedInput
                  id="scripting-other-challenge"
                  value={state.otherWorkflowChallenge || ""}
                  onChange={(v) => set("otherWorkflowChallenge", v)}
                  placeholder={formDict.otherPlaceholder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <FieldLabel label={dict.frequency.label} />
          <SingleSelectGroup
            options={dict.frequency.options}
            value={state.frequency || ""}
            onChange={(v) => set("frequency", v)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <FieldLabel label={dict.dataSources.label} />
          <MultiChipGroup
            options={dict.dataSources.chips}
            values={state.dataSources || []}
            onChange={(v) => set("dataSources", v)}
          />
          <AnimatePresence>
            {(state.dataSources?.includes("Other") || state.dataSources?.includes("Otro")) && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
              >
                <AnimatedInput
                  id="scripting-other-sources"
                  value={state.otherDataSources || ""}
                  onChange={(v) => set("otherDataSources", v)}
                  placeholder={formDict.otherPlaceholder}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div>
          <FieldLabel label={dict.targetOutput.label} />
          <AnimatedInput
            id={`${id}-target`}
            value={state.targetOutput || ""}
            onChange={(v) => set("targetOutput", v)}
            placeholder={dict.targetOutput.placeholder}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Success Terminal ─────────────────────────────────────────────────────────

function SuccessTerminal({ dict }: { dict: ContactDict["success"] }) {
  const lines = [
    "$ marea-cli transmit --encrypted",
    "> Authenticating session...",
    "> Structuring discovery payload...",
    "> Routing to engineering queue...",
    dict.title,
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: TIDAL_EASE }}
      className="border-2 border-accent bg-marea-onyx text-white p-8 md:p-12 w-full max-w-3xl mx-auto mt-12"
    >
      <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
        <span className="font-mono text-[10px] text-white/30 ml-2 tracking-widest">
          marea-terminal — contact-session
        </span>
      </div>

      <div className="space-y-3 mb-10">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4, ease: TIDAL_EASE }}
            className={`font-mono text-sm ${
              i === lines.length - 1
                ? "text-accent font-bold text-lg tracking-widest mt-6"
                : "text-white/50"
            }`}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: lines.length * 0.15 + 0.2 }}
        className="space-y-4"
      >
        <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/50 text-accent font-mono text-xs mb-2">
          {dict.status}
        </div>
        <p className="font-sans text-xl text-white/90 leading-relaxed max-w-2xl">
          {dict.message}
        </p>
        <p className="font-mono text-xs text-accent/70 tracking-widest mt-6">
          {dict.sub}
        </p>
      </motion.div>

      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block w-2.5 h-5 bg-accent mt-8"
        aria-hidden="true"
      />
    </motion.div>
  );
}

// ─── Main Form Logic ──────────────────────────────────────────────────────────

export default function AdaptiveForm({ dict }: { dict: ContactDict }) {
  const uid = useId();

  // Core state
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Specific states
  const [webDevState, setWebDevState] = useState({});
  const [systemsState, setSystemsState] = useState({});
  const [scriptingState, setScriptingState] = useState({});

  // Common states
  const [commonState, setCommonState] = useState({
    name: "",
    email: "",
    brief: "",
    budget: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!commonState.name.trim()) errs.name = dict.form.errors.required;
    if (!commonState.email.trim()) {
      errs.email = dict.form.errors.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commonState.email)) {
      errs.email = dict.form.errors.invalidEmail;
    }
    if (!commonState.brief.trim()) errs.brief = dict.form.errors.required;
    if (!commonState.budget) errs.budget = dict.form.errors.required;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      setErrors({ service: dict.form.errors.serviceRequired });
      // Scroll to top to show error
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="py-12">
        <SuccessTerminal dict={dict.success} />
      </div>
    );
  }

  const setCommon = (k: string, v: string) => {
    setCommonState((prev) => ({ ...prev, [k]: v }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: "" }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-4xl mx-auto mt-8">
      
      {/* ── Section 1: Service Selector ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="mb-16"
      >
        <FieldLabel label={dict.serviceSelector.label} />
        <ErrorMessage error={errors.service} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {dict.serviceSelector.services.map((svc, i) => (
            <ServiceCard
              key={svc.value}
              service={svc}
              index={i}
              selected={selectedService === svc.value}
              onClick={() => {
                setSelectedService(svc.value);
                if (errors.service) setErrors((prev) => ({ ...prev, service: "" }));
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Section 2: Adaptive Schema ── */}
      <AnimatePresence mode="popLayout">
        {selectedService === "web_dev" && (
          <WebDevSchema
            key="web_dev"
            dict={dict.webDev}
            formDict={dict.form}
            state={webDevState}
            setState={setWebDevState}
          />
        )}
        {selectedService === "systems" && (
          <SystemsSchema
            key="systems"
            dict={dict.systems}
            formDict={dict.form}
            state={systemsState}
            setState={setSystemsState}
          />
        )}
        {selectedService === "scripting" && (
          <ScriptingSchema
            key="scripting"
            dict={dict.scripting}
            formDict={dict.form}
            state={scriptingState}
            setState={setScriptingState}
          />
        )}
      </AnimatePresence>

      {/* ── Section 3: Common Fields ── */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: TIDAL_EASE, delay: 0.2 }}
            className="mt-16 pt-16 border-t-[2px] border-foreground/10 space-y-12"
          >
            {/* Split Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <FieldLabel label={dict.common.name.label} />
                <AnimatedInput
                  id={`${uid}-name`}
                  value={commonState.name}
                  onChange={(v) => setCommon("name", v)}
                  placeholder={dict.common.name.placeholder}
                  hasError={!!errors.name}
                />
                <ErrorMessage error={errors.name} />
              </div>
              <div>
                <FieldLabel label={dict.common.email.label} />
                <AnimatedInput
                  id={`${uid}-email`}
                  type="email"
                  value={commonState.email}
                  onChange={(v) => setCommon("email", v)}
                  placeholder={dict.common.email.placeholder}
                  hasError={!!errors.email}
                />
                <ErrorMessage error={errors.email} />
              </div>
            </div>

            {/* Brief */}
            <div>
              <FieldLabel label={dict.common.brief.label} />
              <AnimatedTextarea
                id={`${uid}-brief`}
                value={commonState.brief}
                onChange={(v) => setCommon("brief", v)}
                placeholder={dict.common.brief.placeholder}
                hasError={!!errors.brief}
              />
              <ErrorMessage error={errors.brief} />
            </div>

            {/* Budget */}
            <div>
              <FieldLabel label={dict.common.budget.label} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
                {dict.common.budget.options.map((opt) => {
                  const selected = commonState.budget === opt.value;
                  return (
                    <motion.button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setCommon("budget", opt.value)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`font-mono text-sm tracking-wide py-4 px-2 border-2 text-center transition-colors duration-200 ${
                        selected
                          ? "bg-marea-onyx text-white border-marea-onyx"
                          : "bg-transparent text-foreground/70 border-foreground/20 hover:border-foreground hover:text-foreground"
                      }`}
                    >
                      {opt.label}
                    </motion.button>
                  );
                })}
              </div>
              <ErrorMessage error={errors.budget} />
            </div>

            {/* CTA */}
            <div className="pt-8">
              <motion.button
                type="submit"
                whileHover={{ backgroundColor: "#0052FF", borderColor: "#0052FF", color: "#FFFFFF" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full md:w-auto font-mono font-bold text-sm tracking-[0.3em] px-16 py-6 bg-marea-onyx text-white border-2 border-marea-onyx uppercase"
              >
                {dict.form.button}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
