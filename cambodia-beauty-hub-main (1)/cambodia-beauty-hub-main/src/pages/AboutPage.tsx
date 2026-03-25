import { motion } from "framer-motion";
import { Heart, MapPin, Star, Globe } from "lucide-react";
import { brands } from "@/data/products";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">About BloomKH 🌸</h1>
        <p className="text-muted-foreground text-lg">Your one-stop shop for all brands of skincare in Cambodia</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-3xl p-8 shadow-soft mb-8"
      >
        <h2 className="font-display text-xl font-bold text-foreground mb-4">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          BloomKH started as a small passion project in Phnom Penh, Cambodia. We noticed how hard it was to find 
          authentic skincare products from top brands locally. So we decided to bring the best of Korean, Japanese, 
          and Western skincare directly to Cambodian skincare lovers — all in one place.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether you love COSRX, Laneige, CeraVe, The Ordinary, or Shiseido — we carry them all. 
          Every product is carefully sourced and verified authentic, curated for Cambodia's hot and humid climate. 
          We believe everyone deserves access to gentle, effective skincare — and we're here to make that happen! 💕
        </p>
      </motion.div>

      {/* Brands */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-card rounded-3xl p-8 shadow-soft mb-8 text-center"
      >
        <h2 className="font-display text-xl font-bold text-foreground mb-4">🏷️ Brands We Carry</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {brands.map((brand) => (
            <span key={brand} className="bg-secondary text-foreground text-sm font-medium px-4 py-2 rounded-full">
              {brand}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { icon: Globe, title: "All Brands", desc: "Korean, Japanese & Western skincare in one shop" },
          { icon: Heart, title: "With Love", desc: "Each product is handpicked with care" },
          { icon: Star, title: "100% Authentic", desc: "We source directly — no fakes, ever" },
          { icon: MapPin, title: "Made for Cambodia", desc: "Curated for tropical skin needs" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center shadow-soft"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold mb-2 text-sm">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutPage;
