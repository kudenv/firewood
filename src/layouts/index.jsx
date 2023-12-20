import React from 'react';
import classnames from 'classnames';
import { Outlet, Link } from '@umijs/max';
import {Button, Layout} from 'antd';
import styles from '@/layouts/index.module.less';
import MainNavigation from '@/layouts/nav';
import MessageBox from '@/components/Messanger/MessageBox';

const { Header, Footer, Sider, Content } = Layout; 

const AppLayout = () => {
  return (      
    <Layout className={styles.appLayout}>
      <Header className={styles.appHeader}><MainNavigation /></Header>
      <Content className={styles.appContent}><Outlet /></Content>
      <MessageBox />
      <Footer className={styles.appFooter}>Footer</Footer>
    </Layout>
  );
}

export default AppLayout;
