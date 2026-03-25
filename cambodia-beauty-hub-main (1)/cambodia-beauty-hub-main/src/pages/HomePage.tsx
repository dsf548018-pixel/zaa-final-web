import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Droplets, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { products, brands } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";

const features = [
  { icon: Globe, title: "All Brands", desc: "Korean, Japanese & Western skincare" },
  { icon: Shield, title: "100% Authentic", desc: "Guaranteed genuine products" },
  { icon: Droplets, title: "For Tropical Skin", desc: "Perfect for Cambodia's climate" },
];

const HomePage = () => {
  const featured = products.filter((p) => p.badge).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              ✨ All Brands of Skincare — One Shop
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Your Skincare <br />
              <span className="text-primary">Destination</span> 🌸
            </h1>
            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Shop COSRX, Laneige, CeraVe, The Ordinary & more — all authentic, all in one place. Curated for Cambodia's climate.
            </p>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
                <Link to="/products">
                  Shop Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5">
                <Link to="/routine">Routine Guide</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <img
              src={heroBanner}
              alt="Skincare collection featuring multiple brands"
              width={1920}
              height={1080}
              className="rounded-3xl shadow-glow w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-soft"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">{f.title}</h3>
                <p className="text-xs text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Brands Marquee */}
      <section className="container mx-auto px-4 py-6">
        <p className="text-center text-xs text-muted-foreground mb-3 uppercase tracking-wider">Brands We Carry</p>
        <div className="flex flex-wrap justify-center gap-3">
          {brands.map((brand) => (
            <span key={brand} className="bg-card border border-border text-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-soft">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">🎉 Grand Opening Sale!</h2>
          <p className="text-primary-foreground/80 mb-4">Get 15% off on all products. Use code: <strong>BLOOM15</strong></p>
          <Button asChild variant="secondary" size="lg" className="rounded-full">
            <Link to="/products">Shop the Sale</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Top picks from the best skincare brands</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
            <Link to="/products">View All Products <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">💬 Order via Telegram or Facebook</h2>
          <p className="text-muted-foreground mb-6">Chat with us directly for fast ordering and delivery in Phnom Penh!</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground">
              <a href="https://t.me/Zaaloxzy" target="_blank" rel="noopener noreferrer">
                Chat on Telegram
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary">
              <a href="https://www.facebook.com/share/19iRz2vXHA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                Message on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
