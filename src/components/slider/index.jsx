import React from "react";
import LinkedInCard from "../../../components/linkedInCard";
import CardHeader from "../../../components/linkedInCard/cardHeader";
import LinkedInButton from "../../../components/linkedInButton";
import { MdOutlineModeEdit } from "react-icons/md";
import { Col, Row } from "antd";

function SliderItems() {
  const elements = [
    { element: <LinkedInButton icon={<MdOutlineModeEdit />} /> },
  ];
  return (
    <Row gutter={20}>
      <Col xs={{ span: 6 }} lg={{ span: 10 }} style={{ marginRight: '90px' }}>
        <LinkedInCard
          width="425"
          height={"90"}
          Children={
            <CardHeader
              cardHeadertype = 'carouselCardHeader'
              title={"Open to Work"}
              openWordDetail="Backend Developer, Software Engineer"
              buttonLabel="Show details"
              editOption={elements}
            />
          }
        />
      </Col>
      <Col xs={{ span: 6 }} lg={{ span: 10 }}>
        <LinkedInCard
          width="425"
          height={"90"}
          Children={
            <CardHeader
              cardHeadertype = 'carouselCardHeader'
              title={"Share that you hiring"}
              subtitle="and attract qualified candidates"
              buttonLabel="Get started"
              editOption={elements}
            />
          }
        />
      </Col>
      {/* <Col xs={{ span: 6 }} lg={{ span: 12 }}>
        <LinkedInCard
          width="425"
          height={"90"}
          Children={<CardHeader
            cardHeadertype="carouselCard"
            title={"Showcase Services"}
            subtitle={
              "you offer so you and your business can be found in search"
            }
            buttonLabel="Get started"
            editOption={elements}
          />}
        />
            </Col> */}
    </Row>
  );
}

export default SliderItems;
