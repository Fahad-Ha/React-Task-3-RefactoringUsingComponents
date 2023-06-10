import "./App.css";
import Home from "./components/Home";
import ProductList from "./components/ProductList";

function App() {
  // const productsList = products.map((book) => {
  //   return <Products key={book.id} {...book} />;
  // });

  return (
    <div className="flex-container">
      <Home />
      <div className="products-container">
        <div className="product-card">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export default App;
