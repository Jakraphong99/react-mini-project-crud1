import React, { useState, useEffect } from 'react';

const ProductList = ({ products, onDeleteProduct, onEditProduct }) => {
  const [editedProduct, setEditedProduct] = useState({
    index: null,
    name: '',
    price: ''
  });

  const [totalPrice, setTotalPrice] = useState(0); // State สำหรับเก็บราคารวม

  useEffect(() => {
    // ฟังก์ชันสำหรับคำนวณราคารวมของสินค้าทั้งหมด
    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach((product) => {
        total += product.price;
      });
      setTotalPrice(total);
    };

    calculateTotalPrice(); // เรียกใช้ฟังก์ชันคำนวณราคารวมเมื่อมีการเปลี่ยนแปลงใน products
  }, [products]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditProduct(editedProduct.index, {
      name: editedProduct.name,
      price: parseFloat(editedProduct.price)
    });
    setEditedProduct({
      index: null,
      name: '',
      price: ''
    });
  };

  const cancelEdit = () => {
    setEditedProduct({
      index: null,
      name: '',
      price: ''
    });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mt-4">
      <h1 className="mb-4">รายการสินค้า</h1>
        <p>ราคารวมทั้งหมด: {totalPrice.toFixed(2)} บาท</p>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                {editedProduct.index === index ? (
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleEditChange}
                    className="form-control"
                    required
                  />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {editedProduct.index === index ? (
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleEditChange}
                    className="form-control"
                    required
                  />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {editedProduct.index === index ? (
                  <>
                    <button type="submit" className="btn btn-primary me-2" onClick={handleEditSubmit}>บันทึก</button>
                    <button type="button" className="btn btn-secondary" onClick={cancelEdit}>ยกเลิก</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => onDeleteProduct(index)} className="btn btn-danger me-2">ลบ</button>
                    <button onClick={() => setEditedProduct({
                      index: index,
                      name: product.name,
                      price: product.price
                    })} className="btn btn-warning">แก้ไข</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
};

export default ProductList;
