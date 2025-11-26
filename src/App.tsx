import HeaderPage from "@/pages/Header/HeaderPage";
import HomePage from "@/pages/Body/HomePage";
import FooterPage from "@/pages/Footer/FooterPage";
import { Route, Routes } from "react-router-dom";
import UserPage from "@/pages/User/UserPage";
import InfoPage from "@/pages/Info/InfoPage";
import { lazy, Suspense } from "react";

const SchedulePage = lazy(() => import("@/pages/Schedule/SchedulePage"));
const BlogPage = lazy(() => import("@/pages/Blog/BlogPage"));
const ClassesPage = lazy(() => import("@/pages/ClassesPage/ClassesPage"));
const ContactPage = lazy(() => import("@/pages/Contact/ContactPage"));


export default function App() {
  return (
    <div>
      <HeaderPage />
      <UserPage />
      <InfoPage />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <FooterPage />
    </div>
  );
}
