import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Star } from "lucide-react";
import { products, formatUSD, formatRiel } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

import cleanserImg from "@/assets/product-cleanser.jpg";
import tonerImg from "@/assets/product-toner.jpg";
import serumImg from "@/assets/product-serum.jpg";
import sunscreenImg from "@/assets/product-sunscreen.jpg";
import moisturizerImg from "@/assets/product-moisturizer.jpg";

const imageMap: Record<string, string> = {
  cleanser: cleanserImg,
  toner: tonerImg,
  serum: serumImg,
  sunscreen: sunscreenImg,
  moisturizer: moisturizerImg,
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">Product Not Found</h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/products"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Shop</Link>
        </Button>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
        <ArrowLeft className="mr-1 w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src={imageMap[product.category] || cleanserImg}
            alt={product.name}
            width={800}
            height={800}
            className="w-full rounded-3xl shadow-glow"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          {product.badge && (
            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
              {product.badge}
            </span>
          )}
          <p className="text-primary font-semibold text-sm mb-1">{product.brand}</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{product.name}</h1>

          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
            <span className="text-xs text-muted-foreground ml-2">(4.8/5)</span>
          </div>

          <div className="mb-6">
            <span className="text-3xl font-bold text-foreground">{formatUSD(product.price)}</span>
            <span className="text-lg text-muted-foreground ml-3">{formatRiel(product.priceRiel)}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          <div className="bg-secondary rounded-2xl p-4 mb-6">
            <h3 className="font-display font-semibold text-sm mb-2">Key Ingredients</h3>
            <p className="text-xs text-muted-foreground">{product.ingredients}</p>
          </div>

          <Button
            size="lg"
            onClick={() => addToCart(product)}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow w-full md:w-auto"
          >
            <ShoppingBag className="mr-2 w-5 h-5" /> Add to Cart
          </Button>
        </motion.div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;
