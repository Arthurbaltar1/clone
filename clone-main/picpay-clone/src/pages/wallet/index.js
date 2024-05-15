import React, { useState } from "react";
import { Switch } from "react-native";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  Label,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Image,
  CardBody,
  AddContainer,
  AddLabel,
  Ticket,
  TicketLabel,
} from "./styles";

import creditcard from "../../images/credit-card.png";

export default function Wallet() {
  const [isVisible, setVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setVisible((prevState) => !prevState);
  }

  function handleToggleUseBalance() {
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header
        colors={useBalance ? ["#52e78c", "#1ab563"] : ["#D3D3D3", "#868686"]}
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? "500,00" : "*****"}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather
                name={isVisible ? "eye" : "eye-off"}
                size={28}
                color="#fff"
              />
            </EyeButton>
          </BalanceContainer>

          <Info>Seu saldo está rendendo 100% do CDI</Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name="cash" size={24} color="#fff" />
              <Label>Adicionar</Label>
            </Action>
            <Action>
              <MaterialCommunityIcons
                name="bank-outline"
                size={24}
                color="#fff"
              />
              <Label>Retirar</Label>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar Saldo a pagar</UseBalanceTitle>
        <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Formas de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>Casastre seu cartão de crédito</CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para fazer pagamentos mesmo
                quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>

            <Image source={creditcard} resizeMode="contain" />
          </CardBody>
          <AddContainer>
            <Feather name="plus-circle" size={30} color="#0db060" />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>
        </Card>

        <Ticket>
          <MaterialCommunityIcons
            name="ticket-outline"
            size={20}
            color="#0db060"
          />
          <TicketLabel>Usar código promocional</TicketLabel>
        </Ticket>
      </PaymentMethods>
    </Wrapper>
  );
}
