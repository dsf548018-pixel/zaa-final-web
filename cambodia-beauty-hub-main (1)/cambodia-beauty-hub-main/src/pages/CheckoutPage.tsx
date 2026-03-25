import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatUSD, formatRiel } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { items, totalPrice, totalPriceRiel, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
        </motion.div>
        <h1 className="font-display text-3xl font-bold mb-2">Order Placed! 🎉</h1>
        <p className="text-muted-foreground mb-2">Thank you for shopping with BloomKH!</p>
        <p className="text-sm text-muted-foreground mb-6">We'll contact you via Telegram to confirm your order and delivery details.</p>
        <Button asChild className="rounded-full bg-primary text-primary-foreground">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold mb-4">No items to checkout</h1>
        <Button asChild className="rounded-full bg-primary text-primary-foreground">
          <Link to="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout 💳</h1>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h2 className="font-display font-bold mb-4">Contact Information</h2>
            <div className="flex flex-col gap-3">
              <Input placeholder="Full Name" required className="rounded-xl" />
              <Input placeholder="Phone Number" required className="rounded-xl" />
              <Input placeholder="Telegram Username (optional)" className="rounded-xl" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h2 className="font-display font-bold mb-4">Delivery Address</h2>
            <div className="flex flex-col gap-3">
              <Input placeholder="Address / Location" required className="rounded-xl" />
              <Input placeholder="City (e.g. Phnom Penh)" required className="rounded-xl" />
              <Input placeholder="Notes for delivery (optional)" className="rounded-xl" />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-soft">
            <h2 className="font-display font-bold mb-4">Payment</h2>
            <p className="text-sm text-muted-foreground mb-3">We accept:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Cash on Delivery", "ABA Transfer", "Wing", "TrueMoney"].map((m) => (
                <span key={m} className="bg-secondary text-secondary-foreground text-xs px-3 py-1.5 rounded-full">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            Place Order — {formatUSD(totalPrice)}
          </Button>
        </form>

        <div className="bg-card rounded-2xl p-6 shadow-soft h-fit sticky top-20">
          <h2 className="font-display font-bold mb-4">Order Summary</h2>
          <div className="flex flex-col gap-3 mb-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {item.product.name} × {item.quantity}
                </span>
                <span className="font-semibold">{formatUSD(item.product.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4">
            <div className="flex justify-between mb-1">
              <span className="font-display font-bold">Total</span>
              <span className="font-bold text-lg">{formatUSD(totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">In Riel</span>
              <span className="text-xs text-muted-foreground">{formatRiel(totalPriceRiel)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
