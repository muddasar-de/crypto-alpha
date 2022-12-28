import "./App.css";
import { Navbar, Footer, NewsDetails, CryptoDetails } from "./components";
import { Routes, Route } from "react-router-dom";
import { Home, Cryptocurrencies, News, Exchanges } from "./pages";
import { Layout, Typography, Space } from "antd";
function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/news",
  //         element: <NewsDetails />,
  //       },
  //     ],
  //   },
  // ]);
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />

              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </div>
  );
}
export default App;
