import React from "react";
import "../App.css";
import { AntDesignOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Typography, Menu, Avatar } from "antd";
const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="logo_container">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />
        <Typography.Title level={2}>
          <Link to="/">Crypto-Alpha</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<AntDesignOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<AntDesignOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>{" "}
        <Menu.Item icon={<AntDesignOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<AntDesignOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
