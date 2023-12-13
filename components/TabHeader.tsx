import { View, Text, Image, Pressable } from "react-native";
import { BottomSheetMethods } from "@devvie/bottom-sheet";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AiFillNotification } from "react-icons/ai";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { Portal } from "@gorhom/portal";
import BottomsheetCom from "./BottomsheetCom";
import BottomSheet from "@devvie/bottom-sheet/lib/typescript/components/bottomSheet";

const TabHeader = () => {
  const sheetRef = useRef<BottomSheetMethods>(null);
  return (
    <View>
      <View className="flex-row bg-[#010101] w-full h-[100px] items-center  justify-between px-[24px] pt-9">
        <View className="flex-row items-center space-x-3">
          <Pressable onPress={() => router.push("/profile")}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
              }}
              className="w-[40px] h-[40px] object-cover rounded-full"
            />
          </Pressable>

          <Text className="text-[24px] font-bold text-[#4169E1]">
            Hi <Text className="text-white">John Doe</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-[16px]">
          <FontAwesome name="bell-o" color="white" size={24} />
          <FontAwesome
            onPress={() => sheetRef.current?.open()}
            name="plus-circle"
            color="white"
            size={24}
          />
        </View>
      </View>
      {/* <Portal>
        <View>
          <BottomSheet
            // onOpen={() => sheetRef.current?.open()}
            ref={sheetRef}
            // onClose={() => sheetRef.current?.close()}
            style={{
              backgroundColor: "#000",
            }}
          >
            <BottomsheetCom />
          </BottomSheet>
        </View>
      </Portal> */}
    </View>
  );
};

export default TabHeader;
