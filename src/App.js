import ProductCard from "./Components/ProductCard";
import ProductDetails from "./ProductDetails.json"

let productList = [];
productList = ProductDetails.map((data)=> <ProductCard name={data.name} details={data.details} img={data.image} price={data.price} />);

function App() {
  return (
    <div className="App">
      <h1 className="App-Title">Product List</h1>
      <div className="Product-List">
        {productList}
      </div>
    </div>
  );
}

export default App;
