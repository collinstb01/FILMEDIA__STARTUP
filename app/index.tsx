import { View, Text, StatusBar } from "react-native";
import React from "react";
import Slides from "../components/Slides";

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar barStyle="light-content" />
      <Slides />
    </View>
  );
};

export default index;
