import React from "react";
import { Link } from "@umijs/max";
import { Menu, Avatar, Button, Row, Col, Space } from "antd";
import {
  HomeFilled,
  GoldenFilled,
  MessageFilled,
  NotificationFilled,
  BankFilled,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./../navigation.module.less";

const items = [
  {
    label: "Home",
    key: "Home",
    icon: <HomeFilled />,
  },
  {
    label: "Network",
    key: "network",
    icon: <GoldenFilled />,
  },
  {
    label: "Messaging",
    key: "messaging",
    icon: <MessageFilled />,
  },
  {
    label: "Notifications",
    key: "notifications",
    icon: <NotificationFilled />,
  },
];

const { SubMenu, Item } = Menu;

export default function LeftMenu() {
  
  return (
    <div className={styles.leftMenu}>
      <ul>
        <li>
          <Space size={10}>
            <HomeFilled />
            <Link to="/" className={styles.showTopNavLabels}>Home</Link>
          </Space>
        </li>
        <li>
          <Space size={10}>
            <GoldenFilled />
            <Link to="/network" className={styles.showTopNavLabels}>Network</Link>
          </Space>
        </li>
        <li>
          <Space size={10}>
            <MessageFilled />
            <Link to="/connections" className={styles.showTopNavLabels}>Connections</Link>
          </Space>
        </li>
        <li>
          <Space size={10}>
            <NotificationFilled />
            <Link to="/invitations" className={styles.showTopNavLabels}>Invitations</Link>
          </Space>
        </li>
        <li>
          <Space size={10}>
            <NotificationFilled />
            <Link to="/messaging" className={styles.showTopNavLabels}>Messaging</Link>
          </Space>
        </li>
      </ul>
    </div>
  );
}
