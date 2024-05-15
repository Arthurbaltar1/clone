import React from "react";

import { Button, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { TouchableWithoutFeedback } from "react-native";

/**
 * Renderiza o botão de pagar com o parametro de chamada da rota
 * @param {*} Evento OnPress
 */
export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ["#fff", "#ccc"] : ["#00fc6c", "#00ac4a"]} // Verifica se o botão está em foco e altera as cores do gradiente
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000" : "#fff"}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
