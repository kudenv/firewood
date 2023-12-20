import { Avatar, Button, Card, Col, Flex } from 'antd';
import styles from '@/components/PublicProfile/ConnectionCard/connection.card.module.less';
import { Link } from '@@/exports';
import { UserOutlined } from '@ant-design/icons';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import React from 'react';
import { stub } from '@/utils/function';

const ConnectionCard = (props) => {
  const {
    routePath,
    primaryLogo,
    firstName,
    secondName,
    description,
    buttonHandler = stub(),
  } = props;
  return (
    <Col>
      <Card className={styles.connectCard}>
        <Flex vertical={true} justify='center' align='center'>
          <Link to={routePath}>
            <Flex vertical={true} justify='center' align='center'>
              {primaryLogo ? <Avatar size={64} src={<img src={primaryLogo} />} /> :
                <Avatar size={64} icon={<UserOutlined />} />
              }
              <Flex vertical={true} align='center' className={styles.connectMeta}>
                <h2>{firstName} {secondName}</h2>
                <span>{description}</span>
              </Flex>
            </Flex>
          </Link>
          <span>12 mutual connections</span>
          <Button
            className={styles.connectButton}
            icon={<BsFillPersonPlusFill />}
            onClick={buttonHandler}
          >Connect</Button>
        </Flex>
      </Card>
    </Col>
  );
};

export default ConnectionCard;