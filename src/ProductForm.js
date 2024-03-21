import React, { useState } from 'react';

const ProductForm = ({ onSubmit, showModal, setShowModal }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, price: parseFloat(price) });
        setName('');
        setPrice('');
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between">
                <h1 className="mt-4 mb-4">ระบบจัดการสินค้า</h1>
                <div className='mt-4'>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setShowModal(true)} // เมื่อคลิกปุ่ม "เพิ่มสินค้า" ให้ setShowModal(true)
                    >
                        เพิ่มสินค้า
                    </button>
                </div>
            </div>


            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">เพิ่มสินค้าใหม่</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">ชื่อสินค้า:</label>
                                        <input
                                            type="text"
                                            id="productName"
                                            className="form-control"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="productPrice" className="form-label">ราคา:</label>
                                        <input
                                            type="number"
                                            id="productPrice"
                                            className="form-control"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">เพิ่มสินค้า</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;
