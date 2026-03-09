import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProductForm from "./pages/Products/ProductForm";
import ProductList from "./pages/Products/ProductList";

import UsersForm from "./pages/Users/UserForm";
import UsersList from "./pages/Users/UserList";

import Home from "./pages/Home";

import "./App.css";

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  };

  const fetchUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSaveCompleteProduct = () => {
    setSelectedProduct(null);
    fetchProducts();
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleSaveCompleteUser = () => {
    setSelectedUser(null);
    fetchUsers();
  };

  useEffect(() => {
    fetchProducts();
    fetchUsers();
  }, []);

  return (
    <div>

      <Navbar />

      <div className="container-main">

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PRODUCTOS */}
          <Route
            path="/products"
            element={
              <>
                <h1>Gestión de Productos</h1>

                <ProductForm
                  productToEdit={selectedProduct}
                  onSaveComplete={handleSaveCompleteProduct}
                />

                <ProductList
                  product={products}
                  onEdit={handleEditProduct}
                  onDeleted={fetchProducts}
                />
              </>
            }
          />

          {/* USUARIOS */}
          <Route
            path="/users"
            element={
              <>
                <h1>Gestión de Usuarios</h1>

                <UsersForm
                  userToEdit={selectedUser}
                  onSaveComplete={handleSaveCompleteUser}
                />

                <UsersList
                  user={users}
                  onEdit={handleEditUser}
                  onDeleted={fetchUsers}
                />
              </>
            }
          />

        </Routes>

      </div>

    </div>
  );
}

export default App;