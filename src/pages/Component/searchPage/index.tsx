import { Button, Flex, Input, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";

const SearchPages = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const [data, setData] = useState([]);

  //get请求xw
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          param1: 'value1',
          param2: 'value2',
        }).toString();

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/endpoint?${queryParams}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const dataTemp = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  const handleClick=()=>{

  }
  return (
    <div
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: "white",
        borderRadius: "8px",
        height: "100%",
      }}
    >
      <Flex vertical gap='middle'>
        <Flex>
          <Input placeholder="请输入IP" />
          <Button type="primary" onClick={handleClick}>查询</Button>
        </Flex>
        <Table columns={columns} dataSource={data} />
      </Flex>
    </div>
  );
};

export default SearchPages;
