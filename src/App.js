import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false); // สร้าง state showModal และ setShowModal

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setShowModal(false); // เพิ่มสินค้าเสร็จแล้วให้ปิด Modal
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleEditProduct = (index, updatedProduct) => {
    const updatedProducts = [...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      
      <div className="row">
        <div className="col">
          <ProductForm
            onSubmit={handleAddProduct}
            showModal={showModal} // ส่ง prop showModal ไปยัง ProductForm
            setShowModal={setShowModal} // ส่ง prop setShowModal ไปยัง ProductForm
          />
          <ProductList
            products={products}
            onDeleteProduct={handleDeleteProduct}
            onEditProduct={handleEditProduct}
          />
        </div>



      </div>
    </div>
  );
};

export default App;
