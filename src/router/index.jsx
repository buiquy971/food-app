import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Book from "../pages/Book/Book";
import Menu from "../pages/Menu/Menu";
export const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/about", component: About },
  { path: "/book", component: Book },
  { path: "/menu", component: Menu },
];
