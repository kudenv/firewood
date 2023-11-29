import React, { useState } from "react";
import { Link } from "@umijs/max";
import {
  Menu,
  Row,
  Col,
  Avatar,
  Button,
  Badge,
  Space,
  Flex,
  Drawer,
  Card
} from "antd";
import classnames from "classnames";

import { BankFilled, HomeFilled, UserOutlined } from "@ant-design/icons";
const { SubMenu, Item, ItemGroup } = Menu;

import styles from "./../navigation.module.less";

const RightMenu = (props) => {
  const { isShowMenu = true } = props;
  const [open, setOpen] = useState(false);
  const [showBussinessSub, setShowBussinessSub] = useState(false);

  const showSub = () => {
    setOpen(!open);
  };

  const handleBussinessSub = () => {
    setShowBussinessSub(!showBussinessSub);
  };

  console.log(showBussinessSub);

  return (
    <>
      {isShowMenu ? (
        <div className={styles.rightMenu}>
          <ul>
            <li>
              <Space size={10}>
                <HomeFilled />
                <Link
                  to="/"
                  onClick={showSub}
                  className={styles.showTopNavLabels}
                >
                  I am
                </Link>
              </Space>
            </li>

            <li>
              <Space size={10}>
                <BankFilled />
                <Link
                  to="/"
                  onClick={handleBussinessSub}
                  className={styles.showTopNavLabels}
                >
                  Bussiness
                </Link>
              </Space>
              <div
                className={classnames(styles.subMenu, { [styles.show]: open })}
              >
                <div
                  className={classnames(styles.profileSubMenuPopup, {
                    profilePopupActive: open,
                    profilePopupHide: !open,
                  })}
                >
                  <Space direction="vertical" size={10}>
                    <Flex vertical={true}>
                      <Space direction="vertical" size={5}>
                        <Row
                          gutter={(4, 6)}
                          justify="left"
                          className={styles.profileSubMenuHeaderRow}
                        >
                          <Space size={12}>
                            <Col span={24} className={styles.profileMenuAvatar}>
                              <Badge count={5}>
                                <Avatar
                                  size={50}
                                  size={{
                                    xs: 24,
                                    sm: 32,
                                    md: 40,
                                    lg: 64,
                                    xl: 64,
                                    xxl: 64,
                                  }}
                                  icon={<UserOutlined />}
                                />
                              </Badge>
                            </Col>
                            <Col span={24}>
                              <div className={styles.profileSubMenuMeta}>
                                <h1>Denis K</h1>
                                <h2>Frontend Developer</h2>
                              </div>
                            </Col>
                          </Space>
                        </Row>
                        <Col span={24} className={styles.profileSubMenuBtn}>
                          <Button type="primary">View Profile</Button>
                        </Col>
                      </Space>
                    </Flex>
                    <Flex vertical={true}>
                      <Space
                        direction="vertical"
                        size="middle"
                        style={{ display: "flex", textAlign: "left" }}
                      >
                        <h2>Account</h2>
                        <Link to="/profile">Premium Features</Link>
                        <Link to="/profile">Settings & Privacy</Link>
                        <Link to="/profile">Help</Link>
                        <Link to="/profile">Language</Link>
                        <h2>Manage</h2>
                        <Link to="/profile">Posts & Activity</Link>
                        <Link to="/profile">Settings & Privacy</Link>
                        <Link to="/profile">Help</Link>
                        <Link to="/profile">Language</Link>
                      </Space>
                    </Flex>
                  </Space>
                  <div className={styles.accountProfileSubMenu}></div>
                  <div className={styles.accountProfileSubMenu}></div>
                </div>
              </div>
            </li>
          </ul>
          <Drawer
            className={styles.mobileMenuBussinessDrawer}
            title={"For Bussiness"}
            placement="right"
            closable={true}
            onClose={handleBussinessSub}
            open={showBussinessSub}
          >
            <Flex vertical={true}>
              <Space direction="vertical" size={5}>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: 300 }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </Space>
            </Flex>            
          </Drawer>
        </div>
      ) : null}
    </>
  );
};

export default RightMenu;

// <div className={styles.accountProfileSubMenu}>
//                 <Link to="/profile">Premium Features</Link>
//                 <Link to="/profile">Settings & Privacy</Link>
//                 <Link to="/profile">Help</Link>
//                 <Link to="/profile">Language</Link>
//               </div>
//               <div className={styles.accountProfileSubMenu}>
//                 <Link to="/profile">Premium Features</Link>
//                 <Link to="/profile">Settings & Privacy</Link>
//                 <Link to="/profile">Help</Link>
//                 <Link to="/profile">Language</Link>
//               </div>
