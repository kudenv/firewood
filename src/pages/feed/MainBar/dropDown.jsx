import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Flex } from 'antd';
import { BsBookmark, BsLink45Deg, BsFillEyeSlashFill, BsFillXCircleFill, BsFlagFill} from "react-icons/bs";
//const { useToken } = theme;

const items = [
  {
    key: '1',
    label: (
      <Flex justify="flex-start" align="center">
        <BsBookmark size={17} />
        <span style={{marginLeft: '10px'}}>Save</span>
      </Flex>
    ),
  },
  {
    key: '2',
    label: (
      <Flex justify="flex-start" align="center">
        <BsLink45Deg size={17} />
        <span style={{marginLeft: '10px'}}>Copy link to post</span>
      </Flex>
    ),
  },
  {
    key: '3',
    label: (
      <Flex justify="flex-start" align="center">
        <BsFillEyeSlashFill size={17} />
        <span style={{marginLeft: '10px'}}>I don`t want to see this </span>
      </Flex>
    ),
  },
  {
    key: '4',
    label: (
      <Flex justify="flex-start" align="center">
        <BsFillXCircleFill size={17} />
        <span style={{marginLeft: '10px'}}>Unfollow it</span>
      </Flex>
    ),
  },
  {
    key: '5',
    label: (
      <Flex justify="flex-start" align="center">
        <BsFlagFill size={17} />
        <span style={{marginLeft: '10px'}}>Report post</span>
      </Flex>
    ),
  }
];

const PostDropDown = () => {
  //const { token } = useToken();
  // const contentStyle = {
  //   backgroundColor: token.colorBgElevated,
  //   borderRadius: token.borderRadiusLG,
  //   boxShadow: token.boxShadowSecondary,
  // };

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <span style={{fontSize: "14px"}}>...</span>
        </Space>
      </a>
    </Dropdown>
  );
};
export default PostDropDown;