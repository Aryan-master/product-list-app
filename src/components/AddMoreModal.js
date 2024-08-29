import React, { useState, useEffect, useContext } from 'react';
import { Modal, Table, Button } from 'antd';
import axios from 'axios';
import { CompareContext } from '../context/CompareContext';

const AddMoreModal = ({ visible, onClose }) => {
  const [products, setProducts] = useState([]);
  const { compareProducts, setCompareProducts } = useContext(CompareContext);

  useEffect(() => {
    if (visible) {
      axios.get('https://dummyjson.com/products')
        .then((res) => setProducts(res.data.products))
        .catch((err) => console.error(err));
    }
  }, [visible]);

  const handleAdd = (product) => {
    if (compareProducts.length < 4 && !compareProducts.some(p => p.id === product.id)) {
      setCompareProducts([...compareProducts, product]);
    }
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button onClick={() => handleAdd(record)}>Add</Button>
      ),
    },
  ];

  return (
    <Modal visible={visible} onCancel={onClose} footer={null}>
      <Table
        dataSource={products}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </Modal>
  );
};

export default AddMoreModal;
