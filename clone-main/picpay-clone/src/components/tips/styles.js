import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`; // Criar scroll para a página

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 135px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 15px;
`;

export const Title = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 14px;
`;

export const Image = styled.Image`
    align-self: center;
`;
