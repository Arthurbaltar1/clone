import React from "react";
import { Input } from "react-native-elements";

import { Ionicons } from "@expo/vector-icons";

import { Container, CustomInput } from "./styles";

export default function SearchBar() {
  return (
    <Container>
      <Ionicons name="md-search" size={20} color="#fff" />
      <CustomInput placeholder="O que você quer pagar?" />
    </Container>
  );
}
