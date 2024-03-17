import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // เริ่มต้น state สำหรับเก็บข้อมูลสินค้า
  const [products, setProducts] = useState([]);

  // เรียก API เมื่อคอมโพเนนต์ถูกโหลด
  useEffect(() => {
    fetch('http://mgt2.pnu.ac.th/jakpong/products.php')
      .then(response => response.json())
      .then(data => {
        // ตั้งค่า state ด้วยข้อมูลที่ได้รับ
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // ให้ useEffect ทำงานเฉพาะครั้งแรกที่คอมโพเนนต์ถูกโหลด

  return (
    <div className="App">
      <div className="Product-list">
        {/* แสดงรายการสินค้า */}
        {products.map(product => (
          <div key={product.product_id} className="Product-item">
            <img src={`http://mgt2.pnu.ac.th/jakpong/${product.image}`} alt={product.name} />
            <div className="Product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
