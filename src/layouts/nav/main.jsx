import React, { useState } from "react";
import { Link } from "@umijs/max";
import { Layout, Drawer, Button, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import LeftMenu from "./template/leftMenu";
import RightMenu from "./template/rightMenu";
import styles from "./navigation.module.less";

const Navigation = () => {
  
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.headContent}>
      <Row>
        <Col span={6}>
          <div className={styles.headTitle}>
            <h1>Title</h1>
          </div>
        </Col>
        <Col span={18}>
          <div className={styles.headMenu}>
            <LeftMenu />          
            <RightMenu />        
          </div>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            className={styles.mobileMenuDrawerBtn}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Drawer
            className={styles.mobileMenuDrawer}
            title={"Menu"}
            placement="right"
            closable={true}
            onClose={showDrawer}
            open={open}
          >
            <LeftMenu mode={"inline"} />            
          </Drawer>
        </Col>
      </Row>
    </div>
  );
};

export default Navigation;
