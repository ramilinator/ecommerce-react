import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";
import Hero from "../components/Hero";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page homepage">
      <Hero />
      <div className="home-hero">
        <h1 className="home-title">Welcome to RamShop</h1>
        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
