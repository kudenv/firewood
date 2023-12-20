import React, { useState } from 'react';
import { Avatar, Button, Drawer, Flex, Input, Tabs } from 'antd';
import classnames from 'classnames';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import { IoMdSearch } from 'react-icons/io';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { AiOutlineSlack, AiOutlineClose, AiOutlineDash } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { BsCardImage, BsPaperclip, BsEmojiSmile } from 'react-icons/bs';
import { BiSolidFileGif } from 'react-icons/bi';
import ActionDropDown from '@/components/Messanger/components/DropDown';
import DialogBox from '@/components/Messanger/DialogBox';

import styles from './message.box.module.less';

const MessageBox = ({isPage=false, customWrapper = false}) => {
  const [open, setOpen] = useState(false);
  const [openMessage, setOpenMessage] = useState([false, false]);
  const showDrawer = () => {
    setOpen(open ? false : true);
  };

  const toggleDrawer = (idx) => {
    setOpenMessage((p) => {
      p[idx] = !p[idx];
      return [...p];
    });
  };

  const renderItems = (items) => {
    return items.map((item, index) => {
      return (
        <>
          <Flex key={index} justify='space-between' className={styles.tabItemWrapper}>
            <Flex>
              {item.avatar}
            </Flex>
            <Flex justify='flex-start' vertical={true} className={styles.itemDescription}>
              <Flex justify='space-between' className={styles.itemTitle}>
                <h3>{item.label}</h3>
                <time>12 dec</time>
              </Flex>
              <p>{item.description}</p>
            </Flex>
          </Flex>
        </>
      );
    });
  };

  const renderDialogs = () => {
    return openMessage?.map((item, index) => {
      return (
        <DialogBox key={index} toggleHandler={toggleDrawer} isOpen={item} index={index} modal={true} />
      );
    });
  };

  const chatData1 = [
    {
      key: 'Nabeel',
      label: 'Name Surname',
      description: 'Hello Im Software engineer from Soft  University',
      avatar: <Avatar size={35} icon={<UserOutlined />} />,
    },
    {
      key: 'Nabeel',
      label: 'Name Surname',
      description: 'Hello Im Software engineer from Soft University',
      avatar: <Avatar size={35} icon={<UserOutlined />} />,
    },
  ];

  const items = [
    {
      key: 'Focused',
      label: 'Focused',
      children: renderItems(chatData1),
    },
    {
      key: 'Others',
      label: 'Others',
      children: renderItems(chatData1),
    },
  ];

  const customStyle = customWrapper ? customWrapper : styles.messageBoxWrapper;
  const foldingStyle = open ? styles.listWrapper : classnames(styles.closeBox, styles.listWrapper);

  return (
    <div className={customStyle}>
      <div className={styles.boxWrapper}>
        <div className={isPage ? styles.listWrapper : foldingStyle}>
          <Flex className={styles.boxHeader} justify='space-between' align='center'>
            <div className={styles.headerDetails}>
              <Avatar size={35} icon={<UserOutlined />} />
              <Button type='link' onclick={showDrawer} className={styles.messageButton}>Messaging</Button>
            </div>
            <Flex justify='space-between' className={styles.headerActions}>
              <ActionDropDown icon={<AiOutlineDash size={17} color={'rgb(0 0 0/.6)'} />} />
              <Button type='text' icon={<FaEdit size={17} color={'rgb(0 0 0/.6)'} />} />
              {isPage ? null : (
                <Button type='text'
                        onClick={showDrawer}
                        icon={
                          open ? (
                            <FaAngleDown
                              fontSize='17px'
                              style={{ marginTop: '2px' }}
                              color={'rgb(0 0 0/.6)'}
                            />
                          ) : (
                            <FaAngleUp
                              fontSize='17px'
                              style={{ marginTop: '2px' }}
                              color={'rgb(0 0 0/.6)'}
                            />
                          )
                        }
                />
              )}
            </Flex>
          </Flex>
          <Flex className={styles.boxSearchWrapper} justify='center'>
            <Flex justify='center' align='center' className={styles.boxSearch}>
              <Input placeholder='Search message'
                     prefix={<IoMdSearch size={20} style={{ backgroundColor: '#edf3f8' }} />}
                     placeholder-style={{ color: 'blue' }}
                     height='25px' />
              <AiOutlineSlack size={30} />
            </Flex>
          </Flex>
          <Flex className={styles.searchContent} style={{ width: '100%' }}>
            <Tabs
              centered
              items={items}
              defaultActiveKey='1'
              size='small'
              className={styles.tabWrapper}
              tabBarExtraContent={null}
            />
          </Flex>
        </div>
        {!isPage && renderDialogs()}
      </div>
    </div>

  );
};
export default MessageBox;