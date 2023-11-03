import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router";
import { Fragment } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import HomePage from "./pages/HomePage/HomePage";
import Book from "./pages/Book/Book";
import About from "./pages/About/About";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Routes>
            //render các component theo những router
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              // if (route.layout) {
              //   Layout = route.layout;
              // } else if (route.layout === null) {
              //   Layout = Fragment;
              // }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {/* <Route
              key={0}
              path="/"
              element={
                <DefaultLayout>
                  <HomePage />
                </DefaultLayout>
              }
            />
            <Route
              key={0}
              path="/about"
              element={
                <DefaultLayout>
                  <About />
                </DefaultLayout>
              }
            />
            <Route
              key={0}
              path="/book"
              element={
                <DefaultLayout>
                  <Book />
                </DefaultLayout>
              }
            /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
