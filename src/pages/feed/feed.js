import React, { useRef } from 'react';
import { Link } from '@umijs/max';
import { Layout, Row, Spin, Card, Avatar, Col, Space, Flex, Button } from 'antd';
import { API } from '@/services/config/api.config';
import styles from '@/pages/feed/feed1.module.less';
import LeftSidebar from '@/pages/feed/LeftSidebar';
import MainBar from '@/pages/feed/MainBar';
import RightBar from '@/pages/feed/RightBar';
import Loader from '@/components/Loader';

const MODEL_NAME = 'publicProfileModel';

const ProfileFeed = (props) => {

  

  const getProfileImage = () => {
    return API.avatar;
  };

return (
    <Layout className={styles.contentWrapper}>
      <Loader loading={loading} spinOn={[]} spinning={!sProfile}>
        <Row gutter={[24, 24]} style={{margingTop: '8px'}}>
          {/*left Sidebar */}
          <Col className={styles.leftSidebar} {...layout.sideBar25} xs={24} sm={24} md={5} lg={4} xl={4} offset={3}>
            <Flex vertical>
                <LeftSidebar  />
            </Flex>            
          </Col>
          {/*main content*/}
          <Col lassName={styles.mainContent} xs={24} sm={24} md={11} lg={10} xl={10}>
            <Flex vertical>
              <MainBar />
            </Flex>
          </Col>          
          <Col className={styles.rightSidebar} xs={24} sm={24} md={5} lg={4} xl={4}>
            <RightBar />
          </Col>
        </Row>
      </Loader>

    </Layout>
  )
};

export default ProfileFeed;