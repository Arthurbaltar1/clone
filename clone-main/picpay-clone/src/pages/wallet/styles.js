import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Wrapper = styled.View`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  font-weight: 200;
  color: #fff;
`;

export const Bold = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: 200;
  color: #fff;
`;

export const Actions = styled.View`
  margin-top: 35px;
  flex-direction: row;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px rgba(255, 255, 255, 0.6);
  width: 140px;
  border-radius: 50px;
  height: 45px;
  margin: 0 10px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 5px;
`;

export const UseBalance = styled.View`
  background: #1c1c1e;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
`;

export const UseBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const PaymentMethods = styled.View``;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
  margin-top: 25px;
  padding: 0 16px;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 15px;
`;

export const Image = styled.Image`
  width: 80px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const AddContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  font-size: 18px;
  margin-left: 10px;
`;

export const Ticket = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const TicketLabel = styled.Text`
  color: #0db060;
  font-size: 16px;
  margin-left: 10px;
  text-decoration: underline;
`;
