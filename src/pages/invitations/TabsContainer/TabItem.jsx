import { Avatar, Button, Col, Flex, Space } from 'antd';
import styles from '@/pages/invitations/TabsContainer/tabs.module.less';
import { UserOutlined } from '@ant-design/icons';
import { BsLink } from 'react-icons/bs';
import React from 'react';

const TabItem = ({ tab, ...props }) => {
  return (
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
  )
}

export default TabItem;