import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/"></Link>
        </Menu.Item>

        
        <Menu.SubMenu title="Year">
          <Menu.Item key="/year2023">
            <DashboardOutlined />
            <span>2023</span>
            <Link to="/year2023"></Link>
          </Menu.Item>
          <Menu.Item key="/year2024">
            <DashboardOutlined />
            <span>2024</span>
            <Link to="/year2024"></Link>
          </Menu.Item>
        </Menu.SubMenu>

       
        
      </Menu>
    </Sider>
  );
};

export default App;
