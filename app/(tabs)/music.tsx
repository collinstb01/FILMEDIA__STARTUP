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
import { songs } from "../../utils";

const music = () => {
  return (
    <ApolloProvider client={client}>
      <Musics />
    </ApolloProvider>
  );
};

const Musics = () => {
  const { loading, error, data: listedNfts } = useQuery(GET_LISTED_NFTS);

  return (
    <View style={styles.container}>
      {songs.map((val, index) => (
        <SongsCard {...val} key={index} />
      ))}
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
