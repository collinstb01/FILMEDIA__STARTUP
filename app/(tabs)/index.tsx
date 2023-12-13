import { View, Text, StatusBar, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Carousel from "../../components/Carousel";
import AllSongs from "../../components/expolore/AllSongs";
import AllAlbums from "../../components/expolore/AllAlbums";
import AllArtist from "../../components/expolore/AllArtist";
import AllPodcast from "../../components/expolore/AllPodcast";
import Search from "../../components/Search";
import { useAuth } from "../../context/AuthContext";

const explore = () => {
  const [isInFocus, setIsInFocus] = useState(false);
  const { permanentlyDeleteAccount } = useAuth();
  return (
    <View className="min-h-screen flex-1">
      <StatusBar barStyle="default" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 20,
          // height: "100%",
          marginBottom: 19,
        }}
        style={{
          marginBottom: 200,
          flex: 1,
          height: "100%",
        }}
      >
        <View>
          <View className="bg-white/25 w-full h-[48px] space-x-6 px-5 flex-row items-center rounded-[80px]">
            <FontAwesome
              // onPress={permanentlyDeleteAccount}
              name="search"
              size={24}
              color="white"
            />
            <TextInput
              placeholder="Search"
              className="w-full"
              placeholderTextColor={"white"}
              // onFocus={() => setIsInFocus(!isInFocus)}
            />
          </View>
          {!isInFocus && (
            <View>
              <Carousel />

              <AllSongs />

              <AllAlbums />
              <AllPodcast />
              <AllArtist />
            </View>
          )}

          {isInFocus && (
            <View className="">
              <Search />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default explore;
