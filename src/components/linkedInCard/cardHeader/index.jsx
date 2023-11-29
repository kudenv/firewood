import { Col, Row } from "antd";
import React, { useState } from "react";
import LinkedInButton from "../../linkedInButton";
import "./index.less";
import Typography from "antd/es/typography/Typography";
import { HeartOutlined, LikeOutlined } from "@ant-design/icons";

function CardHeader({
  className,
  title,
  cardHeadertype,
  openWordDetail,
  icon,
  subtitle,
  buttonLabel,
  editOption,
  numberofComment,
  numberOfRepost,
  numberOfLikes,
  isButton,
  subbuttonlabel,
}) {
  const [likecount, setLikeCount] = useState(0);
  let element;
  if (cardHeadertype === 'carouselCardHeader') {
    element = (
      <div className="cardHeader">
        <Row justify={"space-between"}>
          <Col xs={{ span: 6 }} lg={{ span: 22 }}>
            <Typography >
              <strong>{title}</strong> {subtitle}
            </Typography>
            <Typography>
              {openWordDetail}
            </Typography>
            {buttonLabel && (
              <LinkedInButton
                className="viewAnalyticsButton"
                height={"40"}
                label={buttonLabel}
                icon={icon}
              />
            )}
          </Col>
          {editOption && (
            <Col
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
              }}
              xs={{ span: 6 }}
              lg={{ span: 2 }}
              className="gutter-row"
            >
              <div className="StyledCarouselCardEditButton">
                {editOption.map((options) => (
                  <React.Fragment key={options.id}>
                    {options.element}
                  </React.Fragment>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  } else if (cardHeadertype === "postCardFooter") {
    element = (
      <div className="cardHeader">
        <Row justify={"space-between"}>
          <Col xs={{ span: 6 }} lg={{ span: 12 }}>
          <div className="StyledFooterHeader">
              {numberOfLikes &&
                numberOfLikes.map((type) => {
                  let likeIcon =
                    type.type === "heart" ? (
                      <HeartOutlined />
                    ) : type.type === "like" ? (
                      <LikeOutlined />
                    ) : null;
                  return <LinkedInButton className="viewAnalyticsButton" icon={likeIcon} />;
                })}
            </div>
          </Col>
          <Col
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
            }}
            xs={{ span: 6 }}
            lg={{ span: 12 }}
            className="gutter-row"
          >
            <div className="StyledCardFotterButton">
              <LinkedInButton className='StyledCardFotterButton' label={`${numberofComment} comments `} />
              <LinkedInButton label={`${numberOfRepost} reposts`} />
            </div>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div className="cardHeader">
        <Row justify={"space-between"}>
          <Col xs={{ span: 6 }} lg={{ span: editOption ? 12 : 24 }}>
            <div className="StyledCardHeader">
              <h2>{title}</h2>
              <p style={{margin: '0 0 0 18px',color:'#858585'}}>{subtitle}</p>
              {isButton && (
                <LinkedInButton
                  className="viewAnalyticsButton"
                  height={"40"}
                  icon={icon}
                  label={subbuttonlabel}
                />
              )}
            </div>
          </Col>
          {editOption && (
            <Col
              style={{
                textAlign: "right",
                display: "flex",
                justifyContent: "flex-end",
              }}
              xs={{ span: 6 }}
              lg={{ span: 12 }}
              className="gutter-row"
            >
              <div className="StyledCardEditButton">
                {editOption.map((options) => (
                  <React.Fragment key={options.id}>
                    {options.element}
                  </React.Fragment>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </div>
    );
  }
  return element;
}
export default CardHeader;
