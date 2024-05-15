import React from "react";

import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
  Container,
} from "./styles";

import SearchBar from "../../components/searchBar";
import Suggestions from "../../components/suggestions";
import Activities from "../../components/activities";
import Tips from "../../components/tips";
import Banner from "../../components/banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={25}
            color="#10c86e"
          />

          <AntDesign name="setting" size={25} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 500,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={25} color="#10c86e" />

          <MaterialCommunityIcons
            name="ticket-percent"
            size={25}
            color="#10c86e"
          />
        </Header>

        {/* <SearchBar /> */}
        <Suggestions />
        <Activities />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
