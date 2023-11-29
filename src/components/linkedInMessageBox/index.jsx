import React, { useState } from "react";
import LinkedMessageDrawer, { StyledSearchBar,StyledMessage } from "./styledComponents";
import "./index.less";
import LinkedInInputBox from "../Searchbar";
import { IoMdSearch } from "react-icons/io";
import ProfileImage from "../../constrains/ProfileImage";
import MessageHeader from "../../constrains/MessagePanel/PanelHeader";
import ChatTabPanel from "../../constrains/MessagePanel/PanelTabs";

const MessageBox = ({imageUrl,onlineStatus}) => {

  const [open, setOpen] = useState(true);
  const showDrawer = () => {
    setOpen(open ? false : true);
  };

  return (
    <div>
      <LinkedMessageDrawer
        title={<MessageHeader showDrawer={showDrawer} open={open}/>}
        open={open}
        placement={"bottom"}
        closable={true}
        closeIcon = {<ProfileImage imageUrl={imageUrl} onlineStatus={onlineStatus}/>}
        maskClosable={false}
        autoFocus={false}
        zIndex={1}
        zIndexPopup={1}
      >
        <StyledMessage style={{ overflowY: 'auto', maxHeight: '100%' }}>
          <StyledSearchBar className="styleSearchBar">
            <LinkedInInputBox
              placeholder="Search message"
              prefix={<IoMdSearch />}
              placeholder-style={{ color: 'blue' }}
              height='25px'
              className={'searchBar'}
            />
          </StyledSearchBar>
          <ChatTabPanel imageUrl={imageUrl}/>
        </StyledMessage>
      </LinkedMessageDrawer>
    </div>
  );
};

export default MessageBox;
