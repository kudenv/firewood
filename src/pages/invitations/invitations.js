import React, { useState } from 'react';
import { Row, Spin, Card, Avatar, Col, Layout, Flex } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import styles from '@/pages/invitations/invitations.module.less';
import { API } from '@/services/config/api.config';
import Loader from '@/components/Loader';

import TabsContainer from '@/pages/invitations/TabsContainer';

const MODEL_NAME = 'profilePublicModel';

const Invitations = (props) => {

  const component = 'profile.invitations';

  const mainTabList = [
    {
      key: 'Received',
      tab: 'Received',
    },
    {
      key: 'Sent',
      tab: 'Sent',
    },
  ];

  const contentList = {
    Received: <TabsContainer />,
    Sent: <TabsContainer />,
  };

  const [mainTab, setMainTab] = useState('Received');

  const onMainChange = (key) => {
    setMainTab(key);
  };

  const getExtraConfiguration = () => {
    return (
      <SettingOutlined key='setting' />
    );
  };

  return (
    <Layout className={styles.contentWrapper}>
      <Loader loading={loading} spinOn={[]} spinning={!invitations}>
        <Row gutter={[24, 24]} style={{ margingTop: '8px' }}>
          <Col xl={{span: 16, offset: 5}} sm={{span: 24, offset:0}}>
            <Card
              className={styles.invitationsListWrapper}
              title='Manager Invitations'
              extra={getExtraConfiguration()}
              tabList={mainTabList}
              onTabChange={onMainChange}
            >
              {contentList[mainTab]}
            </Card>
          </Col>
          {/*<Col span={5}>*/}
          {/*  <Card>*/}
          {/*    <Flex justify='space-between' align='center'>*/}
          {/*      <Avatar size={60} icon={<UserOutlined />} />*/}
          {/*    </Flex>*/}
          {/*  </Card>*/}
          {/*</Col>*/}
        </Row>
      </Loader>
    </Layout>
  );
};

export default Invitations;