import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  StarOutlined,
  CaretLeftOutlined,
  BarChartOutlined,
  CaretRightOutlined,
  ShopOutlined,
  DashboardOutlined,
  PlusOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import { FaRegUser } from "react-icons/fa6";

import { FaHeadset, FaRegBell, FaLaptop } from "react-icons/fa";
import { AiFillCode } from "react-icons/ai";
import { Layout, Button, Menu, FloatButton } from "antd";

const { Item } = Menu;
const { Sider, Content, Header, Footer } = Layout;

const LayoutEl = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  //SIDEVAR MENUS
  const menuItems = [
    {
      key: 1,
      title: "Dashboard",
      icon: <DashboardOutlined />,
      path: "/",
    },
    {
      key: 1,
      title: "Second Page",
      icon: <DashboardOutlined />,
      path: "/tree",
    },
    {
      key: 2,
      title: "Campaigns",
      icon: <ShopOutlined />,
      path: "/",
    },
    {
      key: 3,
      title: "Commands",
      icon: <AiFillCode />,
      path: "/",
    },
    {
      key: 4,
      title: "Zones",
      icon: <BarChartOutlined />,
      path: "/",
    },
    {
      key: 5,
      title: "Channels",
      icon: <StarOutlined />,
      path: "/",
    },
    {
      key: 6,
      title: "Devices",
      icon: <FaLaptop />,
      path: "/",
    },
    {
      key: 7,
      title: "Media Library",
      icon: <MenuUnfoldOutlined />,
      path: "/",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // Update the collapsed state based on the window width
      setCollapsed(window.innerWidth <= 768 ? true : false);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Layout>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
        collapsed={collapsed}
        collapsible
        className="min-h-screen !bg-[#0B3366] "
        trigger={null}
        // hidden={window.innerWidth <= 768}
      >
        {collapsed ? null : (
          <img src="/images/logo.png" className="w-9/12" alt="err" />
        )}
        <Button
          size="small"
          icon={
            collapsed ? (
              <CaretRightOutlined className="text-center" />
            ) : (
              <CaretLeftOutlined className="text-center" />
            )
          }
          onClick={() => setCollapsed(!collapsed)}
          className="bg-white border-none text-black absolute top-64 !rounded-none !rounded-l-lg !w-3 !h-16 right-0 flex justify-center items-center"
        />

        <Menu
          className="bg-[#0B3366] mt-4 !w-11/12"
          mode="inline"
          style={{
            fontFamily: "'Inter Variable', sans-serif",
          }}
        >
          <Item
            key="ke"
            icon={<PlusOutlined />}
            className="text-[12px] text-white hover:!text-white !w-11/12"
          >
            <Link to="/">Add Project</Link>
          </Item>
          {menuItems.map((item, index) => (
            <Item
              key={index}
              icon={item.icon}
              className="text-[12px] text-white hover:!text-white !w-11/12"
            >
              <Link to={item.path}>{item.title}</Link>
            </Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="!bg-white flex items-center justify-end">
          <div className="flex md:justify-center justify-end pl-3 md:pl-0 items-center gap-x-2 md:gap-x-5">
            <button className="text-[#5F6EA7] text-[18px]">
              <FaHeadset />
            </button>
            <button className="text-[#5F6EA7] text-[18px]">
              <FaRegBell />
            </button>
            <button className="text-[#5F6EA7] text-[18px]">
              <FaRegUser />
            </button>
          </div>
        </Header>
        <Content className="px-4">{children}</Content>
        <Footer
          className="bg-white !py-4"
          style={{
            textAlign: "center",
          }}
        >
          Copyrights©2023. FutureIk
        </Footer>
        <FloatButton
          type="text"
          className="!bg-[#003B69]"
          icon={<FaHeadset className="!text-white " />}
          onClick={() => console.log("click")}
        />
      </Layout>
    </Layout>
  );
};

export default LayoutEl;
