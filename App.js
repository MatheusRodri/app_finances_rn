import React from "react";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AuthProvider from "./src/contexts/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={"#f0f4ff"} barStyle={"dark-content"} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
