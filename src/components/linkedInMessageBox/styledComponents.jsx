import { Drawer } from "antd";
import styled from "styled-components";

const LinkedMessageDrawer = styled(Drawer)`

 height: 1450px;
.ant-drawer-header {
    height: 48px;
    display: flex;
    align-items: center;
    border: none;
    padding: 0 !important;
    border-bottom: 1px solid rgb(140 140 140/.2);
  }
  .ant-drawer-close {
    display: flex;
    align-items: center;
    height: 45px;
    padding-right: 0;
    margin-inline-end: 0 !important;
  }
  .ant-drawer-title {
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
  }
  .ant-drawer-mask {
    position: unset !important;
  }
  .ant-drawer-body {
    padding: 0;
    overflow: hidden !important;
  }
`
export const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledSearchBar = styled.div`
  padding: 8px;
`;
export default LinkedMessageDrawer;