import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ products, filterProducts }) {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["all", ...new Set(products.map((product) => product.category))]; 

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term === "") {
      filterProducts("all");
    } else {  
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(term)
      );
      filterProducts(filtered);   
      console.log(filtered)
    } 

  };

  return (
    <>
      {/* Navbar Principal */}
      <nav className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <a href="#" className="logo">
            <span className="logo-icon">Lojinha</span> Fake
          </a>

          {/* Barra de Pesquisa */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Pesquisar..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button type="button">
              <FaSearch size={16} />
            </button>
          </div>

          {/* Ícones de Usuário e Carrinho */}
          <div className="user-cart-icons">
            <FaUser size={20} />
            <FaShoppingCart size={20} />
          </div>
        </div>
      </nav>

      {/* Menu de Categorias */}
      <div className="category-menu">
        {categories.map((category, index) => (
          <button
            key={index}
            className="category-button"
            onClick={() => filterProducts(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
