import React from 'react';
import { Avatar, Button, Card, Col, Flex } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { BsArrowRight } from "react-icons/bs";

import styles from '@/pages/feed/RightBar/rightBar.less';

const RightBar = () => {
  return (
    <>
      <Card hoverable={false} className={styles.rightBarContent} bodyStyle={{ overflow: 'hidden', padding: '5px'}}>
        <Flex vertical={true}>
          <Col><h1>Add to you feed</h1></Col>
          <Col>
            <Flex justify="space-between" className={styles.followSmallCardContent}>
              <Flex>
                <Avatar size={45} icon={<UserOutlined />} />
              </Flex>
              <Flex justify="flex-start" vertical={true} className={styles.followSmallCardMetaStyle}>
                <h1>Roman Bronerovskiy</h1>
                <p>Ceo any there on the world asdasd adasd asdasd asdas</p>
                <Button icon={<PlusOutlined />} className={styles.followButton}>Follow</Button>
              </Flex>
            </Flex>
            <Flex justify="space-between" className={styles.followSmallCardContent}>
              <Flex>
                <Avatar size={45} icon={<UserOutlined />} />
              </Flex>
              <Flex justify="flex-start" vertical={true} className={styles.followSmallCardMetaStyle}>
                <h1>Roman Bronerovskiy</h1>
                <p>Ceo any there on the world asdasd adasd asdasd asdas</p>
                <Button icon={<PlusOutlined />} className={styles.followButton}>Follow</Button>
              </Flex>
            </Flex>
            <Flex justify="space-between" className={styles.followSmallCardContent}>
              <Flex>
                <Avatar size={45} icon={<UserOutlined />} />
              </Flex>
              <Flex justify="flex-start" vertical={true} className={styles.followSmallCardMetaStyle}>
                <h1>Roman Bronerovskiy</h1>
                <p>Ceo any there on the world asdasd adasd asdasd asdas</p>
                <Button icon={<PlusOutlined />} className={styles.followButton}>Follow</Button>
              </Flex>
            </Flex>
          </Col>
          <Col className={styles.mt10}>
            <Flex justify='flex-start' align="center">
              <span>View all recommendations</span>
              <BsArrowRight />
            </Flex>
          </Col>
        </Flex>
      </Card>
    </>
  )
}

export default RightBar;