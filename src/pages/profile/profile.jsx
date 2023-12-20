import React, { useState } from 'react';
import { Link, useParams } from '@umijs/max';
import { Form, Row, Spin, Col, Divider, Layout, Card, Flex, Avatar, Button, Space } from 'antd';
import { FcLock } from "react-icons/fc";
import { BsPencil } from "react-icons/bs";

import styles from '@/pages/profile/profile.module.less';
import Loader from '@/components/Loader';
import { API } from '@/services/config/api.config';

const MODEL_NAME = 'profilePublicModel';

const Profile = props => {
  const component = 'public.profile';

  const getProfileImage = () => {
    return API.avatar;
  };


  return (
    <Layout className={styles.contentWrapper}>
      <Loader loading={loading} spinOn={[]}>
        <Row gutter={[8, 8]} style={{margingTop: '8px'}}>
          <Col span={24}>
            <Card style={{marginBottom: "10px"}}>
              <Flex justify="space-between">
                <Avatar size={120} src={getProfileImage()} style={{marginTop: '30px', padding: 0}} />
                <Flex vertical={true} justify="space-between">
                  <Flex justify="flex-end" align="flex-start">
                    <Button type="primary"  icon={<BsPencil />} className={styles.buttonRoundPencil} />
                  </Flex>
                  <Flex justify="flex-end" align="flex-end">
                    <Button type="primary" icon={<BsPencil />} className={styles.buttonRoundPencil}/>
                  </Flex>
                </Flex>
              </Flex>
              <Flex justify="space-between"  style={{paddingTop: '10px'}}>
                <Flex vertical={true} justify="flex-start" align="flex-start">
                  <h1>First Name</h1>
                  <h2>User job title</h2>
                  <Link to="/connections-manager">500+ connections</Link>
                </Flex>
                <Flex justify="flex-end" align="flex-end">
                  <Button type="primary" onClick={showReviewModal} className={styles.upgradeButton}>Review</Button>
                </Flex>
              </Flex>
            </Card>
            <Card style={{marginBottom: "10px"}}>
              <Flex vertical={true}>
                <h2 className={styles.mrBottom10} style={{fontSize: '15px', fontWeight: 'bolder'}}>Suggest to you</h2>
                <Flex justify="flex-start" className={styles.boxBorderRadius10} gap={10}>
                  <FcLock size={50} />
                  <Flex vertical={true} justify="flex-start">
                    <Space size={5} style={{width: '100%', paddingTop: '10px'}} direction="vertical">
                      <h3>Boos you profile engagement</h3>
                      <p>Drive viewers to visit your website, book an appointment and more with a custom button on your profile and across platform</p>
                      <div>
                        <Avatar size={30} src={getProfileImage()} style={{marginTop: '0px', padding: 0}} />
                        <Avatar size={30} src={getProfileImage()} style={{marginTop: '0px', padding: 0, marginLeft: '-10px'}} />
                        <Avatar size={30} src={getProfileImage()} style={{marginTop: '0px', padding: 0,marginLeft: '-10px'}} />
                        <span style={{paddingLeft: "5px"}}>Ivan and millions of others members use Premium</span>
                      </div>
                      <Button className={styles.upgradeButton} type="primary">Upgrade my plan</Button>
                    </Space>
                  </Flex>
                </Flex>

              </Flex>
            </Card>
          </Col>
        </Row>
      </Loader>
    </Layout>
  )
};

export default Profile;