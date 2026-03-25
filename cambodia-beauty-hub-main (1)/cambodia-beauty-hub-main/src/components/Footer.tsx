import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">🌸 BloomKH</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your trusted skincare shop in Phnom Penh, Cambodia. We sell all brands of skincare — Korean, Japanese, and Western — authentic and affordable.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop All</Link>
            <Link to="/routine" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skincare Routine</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="https://t.me/Zaaloxzy" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">📱 Telegram: @Zaaloxzy</a>
            <a href="https://www.facebook.com/share/19iRz2vXHA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">📘 Facebook: BloomKH</a>
            <a href="tel:016565286" className="hover:text-primary transition-colors">📞 016 565 286</a>
            <span>📍 Phnom Penh, Cambodia</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2026 BloomKH. All rights reserved. 🌸
      </div>
    </div>
  </footer>
);

export default Footer;
