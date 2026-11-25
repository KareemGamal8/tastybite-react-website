import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RecipesPage } from "./pages/RecipesPage";

export function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

// Version Control System
// Github: Cloud
// Git: Add projects folders to github