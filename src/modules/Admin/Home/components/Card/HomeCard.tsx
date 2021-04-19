import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "../../../../../shared/Flex/Flex";
import "./index.scss";

interface IProps {
  image: any;
  title: string;
  description: string;
  redirect: string;
}
export const HomeCard: React.FC<IProps> = (props) => {
  return (
    <Link className="home-card-container" to={props.redirect}>
      <Flex direction="column">
        <Flex className="image" justifyContent="center" alignItems="center">
          <img src={props.image} alt={props.title} />
        </Flex>
        <h2>{props.title}</h2>
        <p className="major">{props.description}</p>
      </Flex>
    </Link>
  );
};
