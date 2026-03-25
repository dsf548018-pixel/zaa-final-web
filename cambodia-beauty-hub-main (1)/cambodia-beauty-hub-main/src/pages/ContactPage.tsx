import { motion } from "framer-motion";
import { Send, Facebook, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Send,
    label: "Telegram",
    value: "@Zaaloxzy",
    href: "https://t.me/Zaaloxzy",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "BloomKH Skincare",
    href: "https://www.facebook.com/share/19iRz2vXHA/?mibextid=wwXIfr",
    color: "bg-indigo-50 text-indigo-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "016 565 286",
    href: "tel:016565286",
    color: "bg-green-50 text-green-500",
  },
];

const ContactPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Get in Touch 💌</h1>
        <p className="text-muted-foreground">We'd love to hear from you! Reach out anytime.</p>
      </motion.div>

      <div className="flex flex-col gap-4 mb-8">
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-soft hover:shadow-glow transition-shadow"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.color}`}>
              <c.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">{c.label}</h3>
              <p className="text-sm text-muted-foreground">{c.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Quick Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-3 mb-12"
      >
        <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground flex-1">
          <a href="https://t.me/Zaaloxzy" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 w-5 h-5" /> Chat on Telegram
          </a>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary flex-1">
          <a href="https://www.facebook.com/share/19iRz2vXHA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <Facebook className="mr-2 w-5 h-5" /> Message on Facebook
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-secondary rounded-3xl p-8 text-center"
      >
        <h2 className="font-display text-xl font-bold mb-2">📍 Visit Us</h2>
        <p className="text-muted-foreground">
          Phnom Penh, Cambodia<br />
          Open: Mon-Sat, 9AM - 7PM
        </p>
      </motion.div>
    </div>
  </div>
);

export default ContactPage;
