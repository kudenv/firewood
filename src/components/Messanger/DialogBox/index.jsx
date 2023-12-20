import classnames from 'classnames';
import { Avatar, Button, Col, Flex, Input, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ActionDropDown from '@/components/Messanger/components/DropDown';
import { AiOutlineClose, AiOutlineDash } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { BsCardImage, BsEmojiSmile, BsPaperclip } from 'react-icons/bs';
import { BiSolidFileGif } from 'react-icons/bi';
import React from 'react';
import styles from '@/components/Messanger/DialogBox/dialog.module.less';

const DialogBox = ({ messages, user, toggleHandler, isOpen = true, isPage = false, index, actions }) => {
  const pageClass = isPage ?
    classnames(styles.pageDialogBox, styles.messageOverlayDialogWrapper) :
    styles.messageOverlayDialogWrapper;
  const floatClass = isOpen ? '' : styles.swapMessageBox;

  const {
    closeHandler,
  } = actions || {};
  const closeFlyDialog = () => {

  };

  return (
    <div className={isPage ? '' : floatClass}>
      <div id={index} className={pageClass}>
        <Flex vertical={true} style={{ position: 'relative' }} justify='space-between'>
          <Flex className={styles.messageOverlayBubbleHeader} justify='space-between'>
            <Flex className={styles.headerTitle} align='center'>
              <div className={styles.titleDetails}>
                <Avatar size={35} icon={<UserOutlined />} />
                {isPage ?
                  <Button type='link' className={styles.messageButton}>Name Surname</Button> :
                  <Button type='link' onClick={() => toggleHandler(index)} className={styles.messageButton}>Name
                    Surname</Button>}
              </div>
            </Flex>
            {isOpen ? (
              <Flex className={styles.headerActions} align='center'>
                <ActionDropDown icon={<AiOutlineDash size={17} />} />
                <Button type='text' icon={<FaEdit size={17} />} />
                <Button type='text' icon={<AiOutlineClose size={17} onClick={closeFlyDialog} />} />
              </Flex>
            ) : (
              <Flex className={styles.headerActions} align='center'>
                <Button type='text' icon={<AiOutlineClose size={17} onClick={closeFlyDialog} />} />
              </Flex>
            )
            }
          </Flex>
          <Flex className={styles.messageContentWrapper} vertical={true}>
            <Flex className={styles.messageContentList} vertical={true}>
              <Flex justify='space-between' className={styles.messageContent}>
                <Flex>
                  <Avatar size={35} icon={<UserOutlined />} />
                </Flex>
                <Flex justify='flex-start' vertical={true} className={styles.messageDetails}>
                  <Flex justify='space-between'>
                    <h3>Name Surname</h3>
                    <time>12 dec</time>
                  </Flex>
                  <p>Hello Im Software engineer from Soft University</p>
                </Flex>
              </Flex>
              <Flex justify='space-between' className={styles.messageContent}>
                <Flex>
                  <Avatar size={35} icon={<UserOutlined />} />
                </Flex>
                <Flex justify='flex-start' vertical={true} className={styles.messageDetails}>
                  <Flex justify='space-between'>
                    <h3>Name Surname</h3>
                    <time>12 dec</time>
                  </Flex>
                  <p>Hello Im Software engineer from Soft University Hello Im Software engineer from Soft University
                    Hello Im Software engineer from Soft University Hello Im Software engineer from Soft University
                    Hello Im Software engineer from Soft University</p>
                </Flex>
              </Flex>
              <Flex justify='space-between' className={styles.messageContent}>
                <Flex>
                  <Avatar size={35} icon={<UserOutlined />} />
                </Flex>
                <Flex justify='flex-start' vertical={true} className={styles.messageDetails}>
                  <Flex justify='space-between'>
                    <h3>Name Surname</h3>
                    <time>12 dec</time>
                  </Flex>
                  <p>Hello Im Software engineer from Soft University</p>
                </Flex>
              </Flex>
            </Flex>
            <Flex className={styles.messageInputWrapper}>
              <Input.TextArea maxLength={100} autoSize={false} />
            </Flex>
          </Flex>
          <Flex className={styles.messageFooterWrapper}>
            <Flex className={styles.headerActions} align='center' justify='space-between'>
              <Button type='text' icon={<BsCardImage size={17} />} />
              <Button type='text' icon={<BsPaperclip size={17} />} />
              <Button type='text' icon={<BsEmojiSmile size={17} />} />
              <Button type='text' icon={<BiSolidFileGif size={17} />} />
            </Flex>
            <Flex className={styles.headerTitle} align='center' justify='space-between'>
              <div className={styles.titleDetails}>
                <he>Press Enter to Send</he>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </div>

  );
};

export default DialogBox;