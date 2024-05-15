import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  AntDesign,
  Ionicons,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";

import HomeScreen from "./pages/home";
import WalletScreen from "./pages/wallet";
import PayScreen from "./pages/pay";

import PayButton from "./components/payButton";

const Tab = createBottomTabNavigator(); // Wrapper para a navegação

/**
 * Definição dos ícones e qual biblioteca utilizada
 */
const icons = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: Entypo,
    name: "wallet",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: SimpleLineIcons,
    name: "bag",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name == "Pay")
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            ); // Retorna o componente do botão de pagar
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "Carteira" }}
      />
      <Tab.Screen name="Pay" component={PayScreen} options={{ title: "" }} />
      <Tab.Screen
        name="Notifications"
        component={PayScreen}
        options={{ title: "Notificações" }}
      />
      <Tab.Screen
        name="Settings"
        component={PayScreen}
        options={{ title: "Loja" }}
      />
    </Tab.Navigator>
  );
}
