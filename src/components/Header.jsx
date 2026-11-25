import {
  IconChefHat,
  IconHeart,
  IconLogin2,
  IconMicrowave,
  IconToolsKitchen3,
} from "@tabler/icons-react";
import "./style.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a href="" className="logo">
          <div className="logo-icon">
            <IconChefHat size={28} stroke={2.2} color="#ea580c" />
          </div>
          <h4>
            Tasty <span>Bite</span>
          </h4>
        </a>
        <nav className="nav-links">
          <a href="">
            <IconMicrowave size={20} /> <span>Home</span>
          </a>
          <Link to="/recipes">
            <IconToolsKitchen3 size={20} /> <span>Recipes</span>
          </Link>
          <Link to="/favorites">
            <IconHeart size={20} /> <span>Favorites</span>
          </Link>
          <Link to="/login">
            <IconLogin2 size={20} /> <span>Login</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
