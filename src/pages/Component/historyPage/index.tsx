import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";

const HistoryPages = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      //   render: (text) => <a>{text}</a>,
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
    {
      key: "4",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  const [data, setData] = useState([]);
  //post请求
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/endpoint`,
          {
            method: "POST",
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            body: JSON.stringify({
              id: "value1",
            }),
          }
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default HistoryPages;
