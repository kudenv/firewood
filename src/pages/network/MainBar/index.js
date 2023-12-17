import { Card, Space, Col, Flex, Avatar, Button, Row } from 'antd';
import { Link } from '@umijs/max';
import { UserOutlined } from '@ant-design/icons';
import { BsFillPersonPlusFill, BsLink } from 'react-icons/bs';
import styles from '@/pages/network/MainBar/mainBar.less';
import React from 'react';

const MainBar = (props) => {
  return (
    <Space direction='vertical' size={10}>
      <Card hoverable={false} className={styles.cardInviteWrapper}
            bodyStyle={{ overflow: 'hidden', padding: '5px 0px' }}>
        <Col className={styles.bottomBorder}>
          <Flex justify='space-between' align='center'>
            <h1>Invitations</h1>
            <Link to='/public/profile/network/invitations'>See all 6</Link>
          </Flex>
        </Col>
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
      </Card>
      <Card hoverable={false} className={styles.cardConnectionsWrapper}
            bodyStyle={{ overflow: 'hidden', padding: '5px' }}>
        <Col className={styles.bottomBorder}>
          <Flex justify='space-between' align='center'>
            <h1>Invitations</h1>
            <Link to='/invitaion-manager'>See all 6</Link>
          </Flex>
        </Col>
        <Row gutter={20}>
          <Flex wrap='wrap' justify='space-between' style={{ width: '100%' }}>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
            <Col>
              <Card className={styles.connectCard}>
                <Flex vertical={true} justify='center' align='center'>
                  <Avatar size={64} icon={<UserOutlined />} />
                  <Flex vertical={true} justify='center' align='center' className={styles.connectMeta}>
                    <h2>Name Surname</h2>
                    <p>Grow your network</p>
                  </Flex>
                  <span>asdasdasd</span>
                  <Button className={styles.connectButton} icon={<BsFillPersonPlusFill />}>Connect</Button>
                </Flex>
              </Card>
            </Col>
          </Flex>

        </Row>
      </Card>
    </Space>
  );
};

export default MainBar;