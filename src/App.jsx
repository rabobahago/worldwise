import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div>
      <h3>Hello world!</h3>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
