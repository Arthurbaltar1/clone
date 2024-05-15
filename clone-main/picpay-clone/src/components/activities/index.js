import React from "react";

import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  Username,
  CardFooter,
  Details,
  Value,
  Divisor,
  Date,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../images/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold></Bold> Você pagou a <Bold>@arthur.baltar.rocha</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <Username>Arthur Baltar</Username>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 27,00</Value>
            <Divisor></Divisor>
            <Feather name="lock" color="#fff" size={14} />
            <Date>há 3 segundos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons
                size={14}
                name="comment-outline"
                color="#fff"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
