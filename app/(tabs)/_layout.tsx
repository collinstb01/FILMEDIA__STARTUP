import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Text,
  View,
  useColorScheme,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TabHeader from "../../components/TabHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import MusicPlayer from "../../components/MusicPlayer";
import { Platform, Keyboard, Animated } from "react-native";
import { Portal } from "@gorhom/portal";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet";


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
// }

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [keyboardHeight, setKeyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration,
          toValue: event.endCoordinates.height,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      (event) => {
        Animated.timing(keyboardHeight, {
          duration: event.duration,
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardWillShowSub.remove();
      keyboardWillHideSub.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: "column-reverse" }}>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: true,
          tabBarStyle: {
            backgroundColor: "black",
            paddingLeft: 19,
            paddingRight: 19,
            // paddingVertical: 16,
            height: Platform.OS === "ios" ? 100 : 70,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },
          header: () => {
            return <TabHeader />;
          },
        }}
        sceneContainerStyle={{
          backgroundColor: "#001F3F",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="search" color={color} size={28} />
            ),
            headerRight: () => (
              <Pressable>
                {({ pressed }: any) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    // color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            ),
          }}
        />
        <Tabs.Screen
          name="live"
          options={{
            tabBarLabel: "Live",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="recording" color={color} size={28} />
            ),
          }}
        />
        <Tabs.Screen
          name="music"
          options={{
            tabBarLabel: "Music",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="musical-notes" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="video"
          options={{
            tabBarLabel: "Video",
            tabBarIcon: ({ color }) => (
              <Ionicons name="md-videocam" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="nft"
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="contrast" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ color }: { color: string }) => (
              <Ionicons name="library" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
      {/* <MusicPlayer /> */}
     
    </View>
  );
}
