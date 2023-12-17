import {Tabs, ConfigProvider} from 'antd';
import styles from './tabs.module.less';
import TabItem from '@/pages/invitations/TabsContainer/TabItem';


const TabsContainer = ({ children, activeTab, setActiveTab }) => {

  const items = [
    {
      key: 'all',
      label: 'All',
      children: <TabItem />,
    },
    {
      key: 'Pages',
      label: 'Pages',
      children: <TabItem />,
    }
  ];

  return (
    <div className={styles.tabsContainerWrapper}>
        <Tabs
          rootClassName={styles.tabsContainer}
          animated={false}
          defaultActiveKey="1" items={items}
        >
        </Tabs>
    </div>
  )
}

export default TabsContainer;