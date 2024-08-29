import React, { useContext } from 'react';
import { Table, Button } from 'antd';
import { CompareContext } from '../context/CompareContext';
import AddMoreModal from './AddMoreModal';

const CompareProducts = () => {
  const { compareProducts, setCompareProducts } = useContext(CompareContext);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const handleRemove = (product) => {
    setCompareProducts(compareProducts.filter(p => p.id !== product.id));
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
        <Button onClick={() => handleRemove(record)}>Remove</Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={compareProducts}
        columns={columns}
        rowKey="id"
        pagination={false}
      />
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Add More
      </Button>
      <AddMoreModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default CompareProducts;
