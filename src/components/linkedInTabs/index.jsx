import { Tabs } from "antd";
import { map } from 'lodash';
import './index.less'

const {TabPane} = Tabs;

function LinedInTabs({
  tabs,
  onChange,
  showScroll,
  height,
  defaultActiveKey,
  spacing,
  className,
  type
}){
  let element;
  element = (
      <Tabs 
      onChange={onChange}
      type={type}
      showScroll={showScroll}
      height={height}
      defaultActiveKey={defaultActiveKey}
      spacing={spacing}
      className={className}
      >
        {map(tabs, tab => {
          return showScroll ? (
            <TabPane className="TabsWithScroll" tab={tab.title} key={tab.key}>
              {tab.component}
            </TabPane>
          ):(
            <TabPane className="TabsWithOutScroll" tab={tab.title} key={tab.key}>
              {tab.component}
            </TabPane>
          )
        })}
      </Tabs>
    )
  return (
    element
  );
};

export default LinedInTabs;
