import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
// import { pagesData } from "../utils";
import Slides from "../components/Slides";
import { router } from "expo-router";
import { image1, image2, image3 } from "../assets/images";

const { width, height } = Dimensions.get("window");

const OnboardingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pagesData = [
    {
      id: 1,
      backgroundColor: "#001F3F",
      image: image1,
      title: "Welcome to Filmedia, where Social Content and blockchain unite!",
      subtitle:
        "A vibrant space where music, videos, and NFTs collide!. Social features, exclusive events, and a groundbreaking wallet for your security.",
    },
    {
      id: 2,
      backgroundColor: "#001F3F",
      image: image2,
      title: "Dive into the world of SocialFI in our All-in-One Hub",
      subtitle:
        "Discover new music and share your favorites.Watch exclusive videos and connect with creators.Subscribe for premium content and support artists Individually.",
    },
    {
      id: 3,
      backgroundColor: "#001F3F",
      image: image3,
      title: "Secure Wallet for Your Journey",
      subtitle:
        "Your inbuilt wallet ensures secure transactions. Purchase subscriptions, tip artists, and collect NFTs confidently.Your digital assets, your control.",
    },
  ];

  const scrollX = new Animated.Value(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    console.log(nextIndex);
    if (nextIndex < pagesData.length) {
      // Only proceed to the next slide if it exists
      // You can update currentIndex or perform any other action
      setCurrentIndex(nextIndex);
      // Scroll to the next index
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
      // Handle reaching the end of the onboarding slides
      // You can navigate to the next screen or perform any other action
      router.push("/(auth)");
    }
  };

  const handleSkip = () => {
    const lastIndex = pagesData.length - 1;
    setCurrentIndex(lastIndex);
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToIndex({ index: lastIndex, animated: true });
    }
  };

  //here is the error
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar barStyle="light-content" />
      {/* <FlatList
        ref={flatListRef}
        data={[
          {
            id: 1,
            backgroundColor: "#001F3F",
            image: image1,
            title:
              "Welcome to Filmedia, where Social Content and blockchain unite!",
            subtitle:
              "A vibrant space where music, videos, and NFTs collide!. Social features, exclusive events, and a groundbreaking wallet for your security.",
          },
          {
            id: 2,
            backgroundColor: "#001F3F",
            image: image2,
            title: "Dive into the world of SocialFI in our All-in-One Hub",
            subtitle:
              "Discover new music and share your favorites.Watch exclusive videos and connect with creators.Subscribe for premium content and support artists Individually.",
          },
          {
            id: 3,
            backgroundColor: "#001F3F",
            image: image3,
            title: "Secure Wallet for Your Journey",
            subtitle:
              "Your inbuilt wallet ensures secure transactions. Purchase subscriptions, tip artists, and collect NFTs confidently.Your digital assets, your control.",
          },
        ]}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onMomentumScrollEnd={(ev) => {
          const newIndex = Math.round(ev.nativeEvent.contentOffset.x / width);
          console.log(newIndex);
          setCurrentIndex(newIndex);
        }}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item, index }) => <></>}
      /> */}

      <View className="flex-row items-center justify-evenly w-full mb-[30px]">
        <Pressable
          onPress={handleSkip}
          className="bg-transparent px-[40px] py-[16px] rounded-[40px] items-center justify-center"
        >
          <Text className="text-[14px] text-[#4169E1] font-bold">Skip</Text>
        </Pressable>
        <Pressable
          onPress={handleNext}
          className="bg-[#4169E1] px-[40px] py-[16px] rounded-[40px] items-center justify-center"
        >
          <Text className="text-[14px] font-bold text-white">
            {currentIndex === 2 ? "Create Account" : "Next"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default OnboardingPage;
