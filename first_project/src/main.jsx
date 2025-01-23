import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import Categories from "./routes/Categories.jsx";
import Layout from "./components/layout/index.jsx";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import Account from "./routes/Account.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
