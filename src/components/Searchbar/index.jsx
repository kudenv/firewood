import { StyledInput } from "./StylecComponents";

const LinkedInInputBox = ({
  name,
  allowClear,
  className,
  prefix,
  suffix,
  value,
  onchange,
  width,
  height,
  isHover,
  placeholder,
}) => {
  return (
    <StyledInput
      name={name}
      allowClear={allowClear || false}
      className={className}
      prefix={prefix}
      value={value}
      onChange={onchange}
      width={width}
      height={height}
      isHover={isHover}
      placeholder={placeholder}
      suffix={suffix}
    />
  );
};

export default LinkedInInputBox;
