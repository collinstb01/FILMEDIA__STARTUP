import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import SongsCard from "../../components/cards/SongsCard";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { client } from "../../constants/addresses";

import GET_LISTED_NFTS from "../../constants/subgraphQueries";

const music = () => {
  return (
    <ApolloProvider client={client}>
      <Musics />
    </ApolloProvider>
  );
};

const Musics = () => {
  const songs = [
    {
      name: "Song 1",
      image: "https://example.com/song1_image.jpg",
      title: "First Melody",
      artist: "Artist A",
    },
    {
      name: "Song 2",
      image: "https://example.com/song2_image.jpg",
      title: "Groovy Beats",
      artist: "Artist B",
    },
    {
      name: "Song 3",
      image: "https://example.com/song3_image.jpg",
      title: "Serenade in D",
      artist: "Artist C",
    },
    {
      name: "Song 4",
      image: "https://example.com/song4_image.jpg",
      title: "Epic Symphony",
      artist: "Artist D",
    },
    {
      name: "Song 5",
      image: "https://example.com/song5_image.jpg",
      title: "Jazz Fusion",
      artist: "Artist E",
    },
  ];
  
  const { loading, error, data: listedNfts } = useQuery(GET_LISTED_NFTS);

  console.log(listedNfts, "shssssssssssssssssssss");
  return (
    <View style={styles.container}>

    </View>
  );
};

export default music;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
});
