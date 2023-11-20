import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./src/navigation/Menu";

export default function App() {
  return (
    <NavigationContainer>
     <BottomNav/>
    </NavigationContainer>
  );
}