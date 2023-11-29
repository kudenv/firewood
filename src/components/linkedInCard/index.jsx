import { Avatar, Card } from "antd";
import React from "react";
import { map } from "lodash";
import "./index.less";
import { Link } from "react-router-dom";

const { Meta } = Card;

function LinkedInCard({
  metas,
  className,
  size,
  width,
  height,
  loading,
  cover,
  title,
  type,
  hoverable,
  Children,
  mode,
  img,
}) {
  const carfStyles = {
    height: `${height ? `${height}px` : `auto`}`,
    width: `${width ? `${width}px` : `100%`}`,
  };

  let element;

  if (mode === "chatCard") {
    element = (
      <div>
        {map(metas, (meta) => (
          <Card
            key={meta.key}
            className={className}
            loading={loading}
            hoverable={hoverable}
            style={carfStyles}
          >
            {img ? (
              <div className="postedImageCard">
                {/* <div>
                  <Link to={meta.posturl}> */}
                    <img width='px' height='64px' src={meta.imageUrl} alt="postImage" />
                    <Meta
                      description={meta.description}
              />
                  {/* </Link> */}
                </div>
            ) : (
              <Meta
                avatar={<Avatar width="55" height="55" src={meta.imageUrl} />}
                title={meta.label}
                description={meta.description}
              />
            )}
          </Card>
        ))}
      </div>
    );
  } else {
    element = (
      <Card
        size={size}
        className={"card"}
        loading={loading}
        cover={cover}
        title={title}
        type={type}
        hoverable={hoverable}
        style={carfStyles}
      >
        {Children}
      </Card>
    );
  }

  return element;
}

export default LinkedInCard;
