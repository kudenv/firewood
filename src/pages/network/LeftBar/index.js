import { Card, Flex, Space } from 'antd';
import { BsFillPeopleFill, BsBookHalf, BsCalendarEvent   } from "react-icons/bs";
import styles from '@/pages/network/LeftBar/leftBar.less';
import { Link } from '@@/exports';


const LeftBar = () => {
  return (
    <Space direction="vertical" size={10} className={styles.leftBarContent}>
      <Card hoverable={false} className={styles.customCard} bodyStyle={{ overflow: 'hidden', padding: '0px' }}>
        <Flex gap='samll' vertical={true}>
          <h1 className={styles.pad5}>Manage my network</h1>
          <Link to='/premium'>
            <Flex justify="space-between" align="center" className={styles.rowHeight}>
              <Space direction="horizontal" size={10}>
                <div className={styles.divSpacer}><BsFillPeopleFill size={50}/></div>
                <span className={styles.textBlack12500}>Connections</span>
              </Space>
              <span className={styles.textColorBack}>12312312</span>
            </Flex>
          </Link>
          <Link to='/premium'>
            <Flex justify="space-between" align="center" className={styles.rowHeight}>
              <Space direction="horizontal" size={10}>
                <div className={styles.divSpacer}><BsBookHalf  size={50}/></div>
                <span className={styles.detailsButton}>Contacts</span>
              </Space>
              <span className={styles.textColorBack}>12312312</span>
            </Flex>
          </Link>
          <Link to='/premium'>
            <Flex justify="space-between" align="center" className={styles.rowHeight}>
              <Space direction="horizontal" size={10}>
                <div className={styles.divSpacer}><BsCalendarEvent size={50}/></div>
                <span className={styles.detailsButton}>Events</span>
              </Space>
              <span className={styles.textColorBack}>12312312</span>
            </Flex>
          </Link>
        </Flex>
      </Card>
    </Space>
  )
};
export default LeftBar;
