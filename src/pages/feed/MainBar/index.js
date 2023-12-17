import React from 'react';
import { Avatar, Button, Card, Col, Flex, Space } from 'antd';
import styles from '@/pages/feed/MainBar/mainBar.less';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import PostDropDown from '@/pages/feed/MainBar/dropDown';
import {
  BsCardImage,
  BsCalendar2Week,
  BsFileRichtext,
  BsChatDots,
  BsHandThumbsUp,
  BsArrowRepeat, BsFillSendFill,
} from 'react-icons/bs';
import { API } from '@/services/config/api.config';

const MainBar = (props) => {
  const getPostImage = () => {
    return API.post;
  }
  return (
    <Space direction='vertical' size={10}>
      <Card hoverable={false} className={styles.createPostWidgetWrapper} bodyStyle={{ overflow: 'hidden', padding: '5px' }}>
        <Flex vertical={true}>
          <Space direction='vertical' size={10}>
            <Col>
              <Flex justify='space-between' align='center'>
                <Avatar size={50} icon={<UserOutlined />} />
                <Button className={styles.submitButton}>Start Post</Button>
              </Flex>
            </Col>
            <Col>
              <Flex justify='space-around'>
                <Flex justify="center" align="center">
                  <BsCardImage size={17} />
                  <span style={{marginLeft: '10px'}}>Photo</span>
                </Flex>
                <Flex justify="center" align="center">
                  <BsCalendar2Week size={17} />
                  <span style={{marginLeft: '10px'}}>Event</span>
                </Flex>
                <Flex justify="center" align="center">
                  <BsFileRichtext size={17} />
                  <span style={{marginLeft: '10px'}}>Write Article</span>
                </Flex>
              </Flex>
            </Col>
          </Space>
        </Flex>
      </Card>
      <Card hoverable={false} className={styles.cardPadding} bodyStyle={{ overflow: 'hidden', padding: '5px' }}>
        <Flex vertical={true} className={styles.postWrapper}>
          <Col className={styles.mb10}>
            <Flex justify='space-between'>
              <Flex justify='flex-start'>
              <Avatar size={45} icon={<UserOutlined />} />
              <div className={styles.postInfo}>
                <h3>Post Title</h3>
                <span>Post Date</span>
              </div>
              </Flex>
              <Flex justify='flex-end' align="flex-start">
                <PostDropDown />
              </Flex>
            </Flex>
          </Col>
          <Col>
            <p>Digital Brands Suite has received the esteemed 2023 AWS Partner Award for Design Partner of the Year in the EMEA region</p>
          </Col>
          <Col>
            <Flex style={{width: '100%'}}><img src={getPostImage()} width="100%" /></Flex>
          </Col>
          <Col className={styles.bottomBorder}>
            <Flex justify='space-between'>
              <Flex align="center">
                <Flex>
                  <BsHandThumbsUp size={10} />
                  <BsChatDots size={10} />
                  <BsArrowRepeat  size={10} />
                  <BsFillSendFill size={10} />
                </Flex>
                <span>24</span>
              </Flex>
              <Flex> <span>4 reposts</span></Flex>
            </Flex>
          </Col>
          <Col>
            <Flex justify='space-around' className={styles.postActionsWrapper}>
              <Button icon={<BsHandThumbsUp />}>Like</Button>
              <Button icon={<BsChatDots />}>Comment</Button>
              <Button icon={<BsArrowRepeat  />}>Repost</Button>
              <Button icon={<BsFillSendFill  />}>Send</Button>
            </Flex>
          </Col>
        </Flex>
      </Card>
    </Space>
  );
};

export default MainBar;