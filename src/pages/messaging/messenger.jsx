import styles from './messenger.module.less';
import { Avatar, Button, Col, Flex, Input, Layout, Row, Tabs } from 'antd';
import Loader from '@/components/Loader';
import classnames from 'classnames';
import { UserOutlined } from '@ant-design/icons';
import DialogBox from '@/components/Messanger/DialogBox';
import MessageBox from '@/components/Messanger/MessageBox';

const Messenger = (props) => {
  const {
    isTitle = true,
  } = props;

    return (
      <Layout>
        <Loader>
          <Row gutter={[24,24]}>
            <Col xl={{span: 6, offset: 4}} sm={{span: 24, offset:0}}>
              <MessageBox isPage={true} customWrapper={styles.messageBoxPageWrapper} />
            </Col>
            <Col sxs={24} sm={24} md={10} lg={11} xl={11}>
                <DialogBox isPage={true} />
            </Col>
          </Row>
        </Loader>
      </Layout>
    );
}

export default Messenger;