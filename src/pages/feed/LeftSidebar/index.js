import React from 'react';
import { Avatar, Card, Col, Row, Flex, Space } from 'antd';
import { BankFilled, HomeFilled, UserOutlined } from '@ant-design/icons';
import { Link } from '@@/exports';
import classnames from 'classnames';
import { FcSimCardChip } from "react-icons/fc";
import { BsBookmarkFill } from "react-icons/bs";
import styles from './sidebar.less';
import { API } from '@/services/config/api.config';

const LayoutSidebar = (props) => {

  const {
    profileData,
  } = props;

  const {
    name,
    primaryLogo = false,
    views,
    likes,
    ratings,
  } = profileData || [];

  const getProfileImage = () => {
    return primaryLogo?.encodedBase64 ? primaryLogo?.encodedBase64 : API.avatar;
  };

  return (
    <Space direction="vertical" size={10}>
      <Card hoverable={false} className={styles.customCard} bodyStyle={{ overflow: 'hidden', padding: '0px' }}>
        <Flex gap={10} vertical={true}>
          <Col style={{paddingTop: '8px'}}>
            <Flex justify='center'>
              <Avatar size={64} src={<img src={getProfileImage()} />} />
            </Flex>
          </Col>
          <Col>
            <Flex justify='center'>
              <Link to='/profile'>
                <div className={styles.userDetails}>
                  <h1>User name</h1>
                  <p>User explanation</p>
                </div>
              </Link>
            </Flex>
          </Col>
          <Col className={classnames(styles.topBorder, styles.pad10)}>
            <Link to='/profile'>
              <Flex justify='space-between' className={styles.detailsText}>
                <span>Profile viewers</span>
                <strong>20</strong>
              </Flex>
            </Link>
            <Link to='/profile'>
              <Flex justify='space-between' className={styles.detailsText}>
                <span>Connections</span>
                <strong>20</strong>
              </Flex>
            </Link>
          </Col>
          <Col className={styles.topBorder}>
            <Link to='/premium'>
              <Space direction="horizontal" size={10}>
                <div className={styles.divSpacer}><FcSimCardChip size={25}/></div>
                <span className={styles.detailsButton}>See your Premium features</span>
              </Space>
            </Link>
          </Col>
          <Col className={styles.topBorder}>
            <Link to='/premium'>
              <Space direction="horizontal" size={10}>
                <div className={styles.divSpacer}><BsBookmarkFill size={17}/></div>
                <span className={styles.detailsButton}>My Items</span>
              </Space>
            </Link>
          </Col>
        </Flex>
      </Card>
      <Card hoverable={false} className={classnames(styles.cardPadding, styles.customCard)} bodyStyle={{ overflow: 'hidden', padding: '0px' }}>
        <Flex gap='samll' vertical={true} className={styles.pad10}>
          <h4>Recent</h4>
          <Link to='/premium'>
            <Space direction="horizontal" size={10}>
              <div className={styles.divSpacer}><HomeFilled /></div>
              <span className={styles.detailsButton}>Hub for juniors</span>
            </Space>
          </Link>
          <Link to='/premium'>
            <Space direction="horizontal" size={10}>
              <div className={styles.divSpacer}><HomeFilled /></div>
              <span className={styles.detailsButton}>Hub for juniors</span>
            </Space>
          </Link>
        </Flex>
        <Flex gap='samll' vertical={true} className={styles.pad10}>
          <h4>Groups</h4>
          <Link to='/premium'>
            <Space direction="horizontal" size={10}>
              <div className={styles.divSpacer}><HomeFilled /></div>
              <span className={styles.detailsButton}>Hub for juniors</span>
            </Space>
          </Link>
          <Link to='/premium'>
            <Space direction="horizontal" size={10}>
              <div className={styles.divSpacer}><HomeFilled /></div>
              <span className={styles.detailsButton}>Hub for juniors</span>
            </Space>
          </Link>
        </Flex>
        <Col className={styles.topBorder}>
          <Link to='/premium'>
            <Flex justify ="center" align="center" style={{paddingBottom: '5px'}}>
              <span className={styles.discoverMore}>Discover More</span>
            </Flex>
          </Link>
        </Col>
      </Card>
    </Space>
  );
};

export default LayoutSidebar;