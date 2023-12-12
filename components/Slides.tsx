import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
// import Animated from 'react-native-reanimated';
// import { pagesData } from "../utils";

type Props = {
  backgroundColor: string;
  image: any;
  title: string;
  subtitle: string;
  currentIndex: number;
  scrollX: any;
};

const { width, height } = Dimensions.get("window");

const Slides = ({
  backgroundColor,
  image,
  subtitle,
  title,
  currentIndex,
  scrollX,
}: Props) => {
  const scroll = new Animated.Value(0);
  return (
    <View className="min-h-screen w-[391px] items-center">
      <ImageBackground
        source={image}
        className="h-[393px] w-[393px] object-cover"
      />
      {/** indicators */}

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        {/* {pagesData.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const color = scrollX.interpolate({
            inputRange,
            outputRange: ["#808080", "#4169E1", "#808080"],
            extrapolate: "clamp",
          });
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10], // change the width here
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                height: 10,
                width: 10,
                // width: dotWidth,
                borderRadius: 5,
                backgroundColor: color,
                margin: 10,
              }}
            />
          );
        })} */}
      </View>

      <View className="px-[16px] space-y-[16px] mt-[43px]">
        <Text className="text-[24px] font-bold text-[#fff] text-center">
          {title}
        </Text>
        <Text className="text-[14px] font-bold text-[#fff] text-center">
          {subtitle}
        </Text>
      </View>
    </View>
  );
};
export default Slides;
