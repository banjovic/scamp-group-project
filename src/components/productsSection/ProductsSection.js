import { useLayoutEffect, useState } from "react";
import ProductCard from "../productsFolder/ProductCard";
import productItems from "../productsFolder/products.json";

const ProductsSection = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleSize = () => setWindowWidth(window.innerWidth);

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const count = windowWidth >= 1024 ? 5 : 4;
  const filteredProducts = productItems.filter((product) => product.id < count);

  return (
    <section
      aria-labelledby="product-section-title"
      className="mt-10 pt-12 space-y-8"
    >
      <h2 id="product-section-title" className="title">
        <a href="/products">What we Offer</a>
      </h2>
      <div className="flex flex-col gap-12 md:mx-auto md:w-fit md:flex-row">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
