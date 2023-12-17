import React, { useState } from 'react';
import { Row, Spin, Card, Avatar, Col, Layout, Flex, Button, Space } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { API } from '@/services/config/api.config';
import Loader from '@/components/Loader';
import styles from '@/pages/connections/connections.module.less';
import { BsLink } from 'react-icons/bs';

const MODEL_NAME = 'profilePublicModel';

const Connections = (props) => {

  const component = 'profile.connections';

  return (
    <Layout className={styles.contentWrapper}>
      <Loader loading={loading} spinOn={[]} spinning={!connections}>
        <Row gutter={[24, 24]} style={{ margingTop: '8px' }}>
          <Col xl={{ span: 16, offset: 4 }} sm={{ span: 24, offset: 0 }}>
            <Card
              className={styles.connectionsListWrapper}
              title='6000 Connections'
            >
              <Col>
                <Space direction='vertical' size={5} style={{ width: '100%' }}>
                  <Col>
                    <Flex justify='space-between' wrap='wrap' className={styles.userInviteWrapper}>
                      <Flex justify='flex-start' className={styles.userInviteData}>
                        <Avatar size={64} icon={<UserOutlined />} className={styles.inviteAvatar} />
                        <Flex justify='flex-start' vertical={true} className={styles.userMeta}>
                          <h1>Roman Bronerovskiy</h1>
                          <p>Ceo any there on the world asdasd adasd asdasd asdas</p>
                          <Flex align='center'>
                            <BsLink />
                            <span>Boris Laptev and 17 others</span>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex justify='flex-end' wrap='wrap' align='center'>
                        <Button type='text' className={styles.textButton}>Ignore</Button>
                        <Button className={styles.roundButton}>Accept</Button>
                      </Flex>
                    </Flex>
                  </Col>
                  <Col>
                    <Flex justify='space-between' wrap='wrap' className={styles.userInviteWrapper}>
                      <Flex justify='flex-start' className={styles.userInviteData}>
                        <Avatar size={64} icon={<UserOutlined />} className={styles.inviteAvatar} />
                        <Flex justify='flex-start' vertical={true} className={styles.userMeta}>
                          <h1>Roman Bronerovskiy</h1>
                          <p>Ceo any there on the world asdasd adasd asdasd asdas</p>
                          <Flex align='center'>
                            <BsLink />
                            <span>Boris Laptev and 17 others</span>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex justify='flex-end' wrap='wrap' align='center'>
                        <Button type='text' className={styles.textButton}>Ignore</Button>
                        <Button className={styles.roundButton}>Accept</Button>
                      </Flex>
                    </Flex>
                  </Col>
                </Space>
              </Col>
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

export default Connections;