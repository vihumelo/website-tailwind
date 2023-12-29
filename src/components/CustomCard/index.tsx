import React from "react";
import { Card as AntCard } from "antd";

interface CustomCardProps {
  title: string;
  description: string;
  link: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  link,
}) => {
  const targetWindow = link === "#" ? "_self" : "_blank";

  return (
    <>
      <a href={link} target={targetWindow} rel="noopener noreferrer">
        <AntCard
          title={
            <span
              style={{
                fontFamily: "Helvetica",
                color: "white",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              {title}
            </span>
          }
          bordered={false}
          style={{
            backgroundColor: "#022c43",
            width: "100%",
            boxShadow: "0px 5px 15px rgba(185, 236, 255, 0.1)",
          }}
          headStyle={{ borderBottom: "1px solid #01213f" }}
          bodyStyle={{
            color: "#aeabab",
            fontFamily: "Helvetica",
            fontWeight: "normal",
            fontSize: "12px",
          }}
        >
          <p>{description}</p>
        </AntCard>
      </a>
    </>
  );
};

export default CustomCard;
