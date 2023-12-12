import { View, Text } from "react-native";
import React from "react";
import { lib } from "../../utils";
import Ionicons from "@expo/vector-icons/Ionicons";

const library = () => {
  return (
    <View className="px-5 space-y-[24px] w-[98%] items-center justify-center py-[20px]">
      {lib.map((item, index) => (
        <View
          key={index}
          className="flex-row items-center w-full justify-between"
        >
          <View className="flex-row space-x-5 items-center">
            <Ionicons name={`${item.iconName}`} size={24} color="#fff" />
            <Text className="text-[16px] font-bold text-[#fff]">
              {item.value}
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#fff" />
        </View>
      ))}
    </View>
  );
};

export default library;
