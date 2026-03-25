import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatUSD, formatRiel } from "@/data/products";
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

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalPriceRiel } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Time to add some glow to your routine! ✨</p>
        <Button asChild className="rounded-full bg-primary text-primary-foreground">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart 🛒</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
            <motion.div
              key={item.product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-4 bg-card rounded-2xl p-4 shadow-soft"
            >
              <img
                src={imageMap[item.product.category] || cleanserImg}
                alt={item.product.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-display font-semibold text-sm">{item.product.name}</h3>
                <p className="text-xs text-muted-foreground">{item.product.nameKh}</p>
                <p className="text-sm font-bold mt-1">{formatUSD(item.product.price)}</p>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.product.id)}>
                  <Trash2 className="w-4 h-4 text-muted-foreground hover:text-destructive transition-colors" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-soft h-fit sticky top-20">
          <h2 className="font-display text-lg font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-semibold">{formatUSD(totalPrice)}</span>
          </div>
          <div className="flex justify-between mb-4 text-xs">
            <span className="text-muted-foreground">In Riel</span>
            <span className="text-muted-foreground">{formatRiel(totalPriceRiel)}</span>
          </div>
          <div className="border-t border-border pt-4 mb-6">
            <div className="flex justify-between">
              <span className="font-display font-bold">Total</span>
              <span className="font-bold text-lg">{formatUSD(totalPrice)}</span>
            </div>
          </div>
          <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            <Link to="/checkout">Proceed to Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
