// import {
//   View,
//   Text,
//   ImageBackground,
//   StyleSheet,
//   Dimensions,
//   FlatList,
//   Animated,
//   Pressable,
//   StatusBar,
//   Image,
// } from "react-native";
// import React, { useEffect, useRef, useState } from "react";
// // import { pagesData } from "../utils";
// import Onboarding from "react-native-onboarding-swiper";
// // import Slides from "../components/Slides";
// import { router } from "expo-router";
// import { image1, image2, image3 } from "../assets/images";

// const { width, height } = Dimensions.get("window");

// const OnboardingPage = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // const onComplete = () => {
//   //   console.log("Onboarding Completed");
//   // };

//   // const pagesData = [
//   //   {
//   //     id: 1,
//   //     icon: image1 || "", // provide a default value if image1 is undefined
//   //     title: "Welcome to Filmedia, where Social Content and blockchain unite!",
//   //     description:
//   //       "A vibrant space where music, videos, and NFTs collide!. Social features, exclusive events, and a groundbreaking wallet for your security.",
//   //   },
//   //   {
//   //     id: 2,
//   //     image: image2,
//   //     icon: "", // provide a default value
//   //     title: "Dive into the world of SocialFI in our All-in-One Hub",
//   //     // Add a description here
//   //     description:
//   //       "Discover new music and share your favorites.Watch exclusive videos and connect with creators.Subscribe for premium content and support artists Individually.",
//   //   },
//   //   {
//   //     id: 3,
//   //     image: image3,
//   //     icon: "", // provide a default value
//   //     title: "Secure Wallet for Your Journey",
//   //     // Add a description here
//   //     description:
//   //       "Your inbuilt wallet ensures secure transactions. Purchase subscriptions, tip artists, and collect NFTs confidently.Your digital assets, your control.",
//   //   },
//   // ];

//   // const scrollX = new Animated.Value(0);

//   // const handleScroll = Animated.event(
//   //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//   //   { useNativeDriver: false }
//   // );

//   // const flatListRef = useRef<FlatList>(null);

//   // const handleNext = () => {
//   //   const nextIndex = currentIndex + 1;
//   //   console.log(nextIndex);
//   //   if (nextIndex < pagesData.length) {
//   //     // Only proceed to the next slide if it exists
//   //     // You can update currentIndex or perform any other action
//   //     setCurrentIndex(nextIndex);
//   //     // Scroll to the next index
//   //     flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//   //   } else {
//   //     // Handle reaching the end of the onboarding slides
//   //     // You can navigate to the next screen or perform any other action
//   //     router.push("/(auth)");
//   //   }
//   // };

//   // const handleSkip = () => {
//   //   const lastIndex = pagesData.length - 1;
//   //   setCurrentIndex(lastIndex);
//   //   if (flatListRef.current !== null) {
//   //     flatListRef.current.scrollToIndex({ index: lastIndex, animated: true });
//   //   }
//   // };

//   //here is the error
//   return (
//     <View className="flex-1 items-center justify-center">
// <StatusBar barStyle="light-content" />
// <Onboarding
//   pages={[
//     {
//       backgroundColor: "#fff", // replace with the desired background color
//       image: <Image source={image1} />, // replace with the desired image component
//       title:
//         "Welcome to Filmedia, where Social Content and blockchain unite!",
//       subtitle:
//         "A vibrant space where music, videos, and NFTs collide!. Social features, exclusive events, and a groundbreaking wallet for your security.",
//     },
//     {
//       backgroundColor: "#fff", // replace with the desired background color
//       image: <Image source={image2} />, // replace with the desired image component
//       title: "Dive into the world of SocialFI in our All-in-One Hub",
//       subtitle:
//         "Discover new music and share your favorites.Watch exclusive videos and connect with creators.Subscribe for premium content and support artists Individually.",
//     },
//     {
//       backgroundColor: "#fff", // replace with the desired background color
//       image: <Image source={image3} />, // replace with the desired image component
//       title: "Secure Wallet for Your Journey",
//       subtitle:
//         "Your inbuilt wallet ensures secure transactions. Purchase subscriptions, tip artists, and collect NFTs confidently.Your digital assets, your control.",
//     },
//   ]}
// />

//       <View className="flex-row items-center justify-evenly w-full mb-[30px]">
//         <Pressable
//           // onPress={handleSkip}
//           className="bg-transparent px-[40px] py-[16px] rounded-[40px] items-center justify-center"
//         >
//           <Text className="text-[14px] text-[#4169E1] font-bold">Skip</Text>
//         </Pressable>
//         <Pressable
//           // onPress={handleNext}
//           className="bg-[#4169E1] px-[40px] py-[16px] rounded-[40px] items-center justify-center"
//         >
//           <Text className="text-[14px] font-bold text-white">
//             {currentIndex === 2 ? "Create Account" : "Next"}
//           </Text>
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default OnboardingPage;

import { View, Text, StatusBar } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import { image1, image2, image3 } from "../assets/images";
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
