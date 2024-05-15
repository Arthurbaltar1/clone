import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

// Estilizar componente específico
export const Button = styled(LinearGradient)`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text`
    color: ${({ focused }) => (focused ? "#000" : "#fff")}
    font-size: 10px;
`;
