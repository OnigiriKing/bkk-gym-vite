
import HeaderPage from "pages/Header/HeaderPage";
import HomePage from "pages/Body/HomePage";
import FooterPage from "pages/Footer/FooterPage";
import { Route, Routes } from "react-router-dom";
import SchedulePage from "pages/Schedule/SchedulePage";
import ClassesPage from "pages/ClassesPage/ClassesPage";
import ContactPage from "pages/Contact/ContactPage";
import BlogPage from "pages/Blog/BlogPage";
import UserPage from "pages/User/UserPage";
import InfoPage from "pages/Info/InfoPage";

export default function App() {
  return (
    <div>
      <HeaderPage />
      <UserPage />
      <InfoPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <FooterPage />
    </div>
  );
}
