import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Product, formatUSD, formatRiel } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

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

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-shadow duration-300"
    >
      <Link to={`/products/${product.id}`} className="block relative overflow-hidden">
        <img
          src={imageMap[product.category] || cleanserImg}
          alt={product.name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <p className="text-xs text-primary font-semibold mb-0.5">{product.brand}</p>
          <h3 className="font-display font-semibold text-foreground text-sm mb-1 leading-tight">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-foreground font-bold">{formatUSD(product.price)}</span>
            <span className="text-muted-foreground text-xs ml-2">{formatRiel(product.priceRiel)}</span>
          </div>
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
