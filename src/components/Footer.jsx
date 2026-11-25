import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconChefHat, IconHeart, IconMail, IconMicrowave, IconToolsKitchen3 } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <IconChefHat size={44} />
              <h3>
                Tasty <span>Bite</span>
              </h3>
            </div>
            <p className="footer-desc">
              Simple recipe discovery with smart filters, favorites, and cooking
              details for quick weeknight inspiration.
            </p>
          </div>
          <div className="footer-links">
            <h4>Explore</h4>
            <a href="">
              <IconMicrowave size={20} />
              Home
            </a>
            <a href="">
              <IconToolsKitchen3 size={20} /> <span>Recipes</span>
            </a>
            <a href="">
              <IconHeart size={20} /> <span>Favorites</span>
            </a>
          </div>
          <div className="footer-links">
            <h4>Social</h4>
            <a href="">
              <IconBrandInstagram size={20} />
              Instagram
            </a>
            <a href="">
              <IconBrandFacebook size={20} /> <span>Recipes</span>
            </a>
            <a href="">
              <IconBrandYoutube size={20} /> <span>Favorites</span>
            </a>
          </div>
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="">
              <IconMail />
              hello@tastybite.local
            </a>
          </div>
        </div>
        <hr className="footer-line" />
        <p className="copyrights">
          © 2026 <span>Tasty bite</span>, all rights reserved
        </p>
      </div>
    </footer>
  );
}
