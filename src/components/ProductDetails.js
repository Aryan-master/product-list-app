import React, { useEffect, useState, useContext } from 'react';
import { Table, Button, notification } from 'antd';
import axios from 'axios';
import { CompareContext } from '../context/CompareContext';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { compareProducts, setCompareProducts } = useContext(CompareContext);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleCompare = (product) => {
    if (compareProducts.length >= 4) {
      notification.warning({
        message: 'Limit Exceeded',
        description: 'You can only compare up to 4 products.',
      });
      return;
    }
    if (compareProducts.some((p) => p.id === product.id)) {
      notification.error({
        message: 'Duplicate Product',
        description: 'This product is already in the comparison list.',
      });
      return;
    }
    setCompareProducts([...compareProducts, product]);
    notification.success({
      message: 'Product Added',
      description: `${product.title} has been added to compare.`,
    });
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button
          type="primary"
          disabled={compareProducts.some((p) => p.id === record.id)}
          onClick={() => handleCompare(record)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <Table
      dataSource={products}
      columns={columns}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  );
};

export default ProductDetails;
