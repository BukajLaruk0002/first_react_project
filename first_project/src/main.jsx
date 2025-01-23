import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import Categories from "./routes/Categories.jsx";
import Layout from "./components/layout/index.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/" element={<App />} />
          <Route path="/" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
