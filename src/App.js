import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar/Navbar";
import ProductList from "./ProductList/ProductList";
import Footer from "./Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { 
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // Atualiza os estados com os dados recebidos
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        setError("Erro ao carregar produtos: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);


  const filterProducts = (filter) => {
    if (Array.isArray(filter)) {   // Se for um array, define o estado filteredProducts com o array recebido
      setFilteredProducts(filter); 
    }
   else if (filter === "all") {
      setFilteredProducts(products); // Define filteredProducts como todos os produtos
    } else {
      const filtered = products.filter((product) => product.category === filter);  // Se o filtro for uma categoria específica, filtra os produtos pela categoria
      setFilteredProducts(filtered);
    }
    console.log(filterProducts);
  };
  


  // Exibição de estados de carregamento e erro
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  // Renderização do componente principal
  return (
    <div className="container">
      <Navbar products={products} filterProducts={filterProducts} />
      <ProductList products={filteredProducts} />
      
      <div className="text-center my-4">
        <a href="#top" className="btn btn-primary">
          Voltar ao Topo
        </a>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
