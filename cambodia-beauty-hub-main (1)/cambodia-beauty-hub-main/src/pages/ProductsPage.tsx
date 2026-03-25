import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands } from "@/data/products";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "all" || p.category === activeCategory;
    const brandMatch = activeBrand === "all" || p.brand === activeBrand;
    return catMatch && brandMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">Shop All Brands</h1>
        <p className="text-muted-foreground">Korean · Japanese · Western — all authentic 🌸</p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-primary/10"
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Brand filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setActiveBrand("all")}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
            activeBrand === "all"
              ? "bg-foreground text-background"
              : "bg-card border border-border text-foreground hover:bg-secondary"
          }`}
        >
          All Brands
        </button>
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => setActiveBrand(brand)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeBrand === brand
                ? "bg-foreground text-background"
                : "bg-card border border-border text-foreground hover:bg-secondary"
            }`}
          >
            {brand}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">No products found for this filter combination.</p>
      )}
    </div>
  );
};

export default ProductsPage;
