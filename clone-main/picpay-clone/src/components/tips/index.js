import React from "react";

import { Container, Option, Title, Image } from "./styles";

import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";

const imgCollection = [
  {
    key: String(Math.random()),
    img: img8,
    title: "Pague suas contas sem sair de casa",
    bgColor: "#172c4a",
  },
  {
    key: String(Math.random()),
    img: img9,
    title: "Lorem ipsum dolor color siamet amen namet",
    bgColor: "#6a0159",
  },
  {
    key: String(Math.random()),
    img: img10,
    title: "Lorem ipsum dolor color siamet amen namet",
    bgColor: "#4139c8",
  },
  {
    key: String(Math.random()),
    img: img11,
    title: "Lorem ipsum dolor color siamet amen namet",
    bgColor: "#00ab4b",
  },
  {
    key: String(Math.random()),
    img: img12,
    title: "Lorem ipsum dolor color siamet amen namet",
    bgColor: "#ba2f76",
  },
];

export default function Tips() {
  return (
    <Container>
      {/* <Option bgColor="#172c4a">
        <Title>Pague suas contas sem sair de casa</Title>
        <Image source={img8} />
      </Option> */}
      {imgCollection.map((image) => (
        <Option bgColor={image.bgColor} key={image.key}>
          <Image source={image.img} />
          <Title>{image.title}</Title>
        </Option>
      ))}
    </Container>
  );
}
