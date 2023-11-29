import { Button, FloatButton } from "antd";
import "./index.less";

const LinkedInButton = ({
  className,
  icon,
  title,
  onclick,
  height,
  width,
  isHover,
  isDisabled,
  type,
  size,
  isLoading,
  label,
  justify,
  floatButton,
}) => {
  const buttonStyles = {
    height: `${height ? `${height}px` : `50px`}`,
    width: `${width ? `${width}px` : `fit-content`}`,
    justifyContent: { justify },
  };

  return floatButton ? (
    <FloatButton
      className={className}
      onClick={onclick}
      icon={icon}
      disabled={isDisabled}
      loading={isLoading}
    />
  ) : (
    <Button
      className={className}
      icon={icon}
      title={title}
      style={buttonStyles}
      onClick={onclick}
      isHover={isHover}
      disabled={isDisabled}
      type={type}
      size={size}
      loading={isLoading}
    >
        <span className="label-text">{label}</span>
    </Button>
  );
};

export default LinkedInButton;
