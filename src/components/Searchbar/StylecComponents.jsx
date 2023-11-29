import { Input } from "antd";
import { styled } from "styled-components";


export const StyledInput = styled(Input)`
  .ant-input {
    height: ${props => props.height ? props.height : '50px'};
    width:  ${props => props.width ? props.width : '100%'};
  }
`