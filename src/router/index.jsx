import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Book from "../pages/Book/Book";
import Menu from "../pages/Menu/Menu";
import PagesBistro from "../pages/PagesBistro/PagesBistro";
import Contact from "../pages/Contact/Contact";
export const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
  { path: "/book", component: Book },
  { path: "/menu", component: Menu },
  { path: "/pagesbistro", component: PagesBistro },
  { path: "/contact", component: Contact },
];
