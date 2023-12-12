import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const BottomsheetCom = () => {
  const transact = [
    {
      icon: "arrow-up",
      name: "Send",
      id: 1,
      action: null,
    },
    {
      icon: "arrow-down",
      name: "Receive",
      id: 2,
      action: null,
    },
    {
      icon: "hand-holding-usd",
      name: "Borrow",
    },
  ];
  return (
    <View>
      <View className="items-center justify-center">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/8090147/pexels-photo-8090147.jpeg?auto=compress&cs=tinysrgb&w=600",
          }}
          className="w-[90px] h-[90px] rounded-full"
        />
        <Pressable className="bg-[#001F3F] flex-row space-x-4 items-center rounded-[40px] mt-2 px-[30px] py-[12px]">
          <Text className="text-[12px] text-[#fff] font-bold">
            0xCD387d3D...DEC6B54D7819D
          </Text>
          <FontAwesome name="copy" size={24} color="#fff" />
        </Pressable>
        {/** Transaction section */}
        <View className="min-w-full flex-row items-center justify-evenly mt-[18px]">
          {transact.map((item) => (
            <Pressable onPress={item.action} key={item.id}>
              <View key={item.id} className="items-center">
                <TouchableOpacity
                  key={item.id}
                  className="w-[46px] h-[46px] rounded-full bg-[#3f94e9] flex-row items-center justify-center px-[9px]"
                >
                  <FontAwesome
                    name={item.icon}
                    size={20}
                    color="#fff"
                    className="mt-[8px] ml-[8px]"
                  />
                </TouchableOpacity>
                <Text className="text-[12px] text-[#fff] font-normal">{item.name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
        {/** Transaction section end */}
      </View>
      <View className="min-w-full flex-row items-center justify-evenly mt-[18px]">
        {transact.map((item) => (
          <Pressable onPress={item.action} key={item.id}>
            <View key={item.id} className="items-center">
              <TouchableOpacity
                key={item.id}
                className="w-[46px] h-[46px] rounded-full bg-[#3f94e9] flex-row items-center justify-center px-[9px]"
              >
                <FontAwesome
                  name={item.icon}
                  size={20}
                  color="#fff"
                  className="mt-[8px] ml-[8px]"
                />
              </TouchableOpacity>
              <Text className="text-[12px] text-[#fff] font-normal">{item.name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default BottomsheetCom;
