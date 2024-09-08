import React, { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import SearchPages from "./Component/searchPage/index.tsx";
import HistoryPages from "./Component/historyPage/index.tsx";

const { Header, Sider, Content } = Layout;

const MyComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [currentPage,setCurrentPage] = useState<string[]>(['1'])

  return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={currentPage}
            onClick={(e)=>{
                console.log(e)
                setCurrentPage([e.key])
                // return item;
            }}
            items={[
              {
                key: "1",
                label: "查询",
              },
              {
                key: "2",
                label: "历史记录",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {/* <Button
              type="text"
              //   icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            /> */}
            <div style={{background:'red',width:'100%',height:'100%'}}></div>
          </Header>
          {/* <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: "100%",
            }}
          >
            Content
          </Content> */}
          {currentPage[0]==='1'?<SearchPages/>:<HistoryPages/>}
        </Layout>
      </Layout>
  );
};

export default MyComponent;
