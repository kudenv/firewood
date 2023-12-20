import React, { useRef } from 'react';
import styles from '@/pages/network/network.module.less';
import { Link } from '@umijs/max';
import { Row, Spin, Card, Col, Flex, Layout } from 'antd';
import { API } from '@/services/config/api.config';
import Loader from '@/components/Loader';
import MainBar from '@/pages/network/MainBar';
import LeftBar from '@/pages/network/LeftBar';


const MODEL_NAME = 'profilePublicModel';

const Network = (props) => {

  const component = 'public.profile';

  const getProfileImage = () => {
    return API.avatar;
  };

  const sProfile = true;
  const loading = false;

  return (
    <Layout className={styles.contentWrapper}>
      <Loader loading={loading} spinOn={[]} spinning={!sProfile}>
        <Row gutter={[24, 24]} style={{ margingTop: '10px' }}>
          <Col className={styles.leftBarWrapper} xl={{span: 6, offset: 3}} sm={{span: 24, offset:0}}>
            <Flex vertical>
              <LeftBar  />
            </Flex>        
          </Col>
          <Col className={styles.mainBarWrapper} xs={24} sm={24} md={10} lg={11} xl={11}>
            <Flex vertical>
              <MainBar />
            </Flex>
          </Col>

        </Row>
      </Loader>

    </Layout>
  )  
};

export default Network;