import React from "react";
import Routes from "./src/routes";
import {NavigationContainer} from "@react-navigation/native";
import { StatusBar } from "react-native";

export  default function App(){
  return(
  <NavigationContainer>
    <StatusBar backgroundColor={"#f0f4ff"} barStyle={"dark-content"}/>
    <Routes/>
  </NavigationContainer>
  )
}
