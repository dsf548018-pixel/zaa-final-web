import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const morningSteps = [
  { step: 1, name: "Cleanser", desc: "Start with a gentle foam cleanser to remove overnight oils.", emoji: "🧴" },
  { step: 2, name: "Toner", desc: "Apply hydrating toner to prep and balance your skin's pH.", emoji: "💧" },
  { step: 3, name: "Serum", desc: "Use Vitamin C serum for brightening and antioxidant protection.", emoji: "✨" },
  { step: 4, name: "Moisturizer", desc: "Lock in hydration with a lightweight moisturizer.", emoji: "🌸" },
  { step: 5, name: "Sunscreen", desc: "Always finish with SPF50+ — essential in Cambodia's sun!", emoji: "☀️" },
];

const nightSteps = [
  { step: 1, name: "Double Cleanse", desc: "Remove makeup with oil cleanser, then use foam cleanser.", emoji: "🧴" },
  { step: 2, name: "Toner", desc: "Hydrate and prepare skin for treatment products.", emoji: "💧" },
  { step: 3, name: "Serum", desc: "Apply Cica repair serum to heal and soothe skin overnight.", emoji: "✨" },
  { step: 4, name: "Moisturizer", desc: "Use a richer cream to nourish skin during sleep.", emoji: "🌙" },
];

const RoutineCard = ({ step, index }: { step: typeof morningSteps[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex items-start gap-4 bg-card rounded-2xl p-5 shadow-soft"
  >
    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg shrink-0">
      {step.emoji}
    </div>
    <div>
      <h3 className="font-display font-semibold text-foreground">
        Step {step.step}: {step.name}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
    </div>
  </motion.div>
);

const RoutinePage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center mb-12">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Skincare Routine Guide</h1>
      <p className="text-muted-foreground max-w-md mx-auto">
        Follow our simple K-beauty routine for healthy, glowing skin — designed for Cambodia's tropical weather 🌺
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Morning */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Sun className="w-5 h-5 text-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Morning Routine</h2>
        </div>
        <div className="flex flex-col gap-4">
          {morningSteps.map((s, i) => (
            <RoutineCard key={s.step} step={s} index={i} />
          ))}
        </div>
      </div>

      {/* Night */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Moon className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Night Routine</h2>
        </div>
        <div className="flex flex-col gap-4">
          {nightSteps.map((s, i) => (
            <RoutineCard key={s.step} step={s} index={i} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default RoutinePage;
