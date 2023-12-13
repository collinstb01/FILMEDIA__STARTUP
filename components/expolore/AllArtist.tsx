import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import RangeComponents from "../RangeComponents";
import SongsCard from "../cards/SongsCard";
import { ScrollView } from "react-native-gesture-handler";
import AlbumCard from "../cards/AlbumCard";
import ArtistCard from "../cards/ArtistCard";
import { _getAllArtist } from "../../constants/_helperFunctions";

const AllArtist = () => {
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
    {
      name: "Song 5",
      image: "https://example.com/song5_image.jpg",
      title: "Jazz Fusion",
      artist: "Artist E",
    },
  ];
  const [artists, setArtist] = useState([]);

  useEffect(() => {
    const getAllArtist = async () => {
      const artistsall = await _getAllArtist();
      console.log(artistsall, "sssssssss");
      setArtist(artistsall);
    };
    // getAllArtist();
  }, []);

  // const artistsArr = [
  //   {
  //     tokenId: 1,
  //   },
  //   {
  //     tokenId: 2,
  //   },
  //   {
  //     tokenId: 3,
  //   },
  // ];

  const artistsArr = [
    {
      name: "Alice Artistry",
      description:
        "An innovative artist pushing the boundaries of traditional and digital art forms.",
      image:
        "https://gateway.pinata.cloud/ipfs/QmevqC9pXa1K31SR5TgD3iK4iq7a1sLHgdhq6HDKjuYWmY",
      external_url: "https://www.aliceartistry.com",
      attributes: [
        {
          trait_type: "Style",
          value: "Surreal",
        },
        {
          trait_type: "Medium",
          value: "Mixed Media",
        },
        {
          trait_type: "Dimensions",
          value: "1800x1800",
        },
      ],
      properties: {
        creation_date: "2023-05-20T15:30:00Z",
        edition: {
          total: 8,
          current: 3,
        },
        royalties: {
          artist: 75,
          platform: 15,
          community: 10,
        },
      },
      followers: 1200,
      following: 350,
      external_links: [
        {
          name: "Auction",
          url: "https://www.auctionplatform.com/alice-artistry-001",
        },
        {
          name: "Rarible",
          url: "https://rarible.com/aliceartistry",
        },
      ],
    },
    {
      name: "David Dreamer",
      description:
        "A dream-inspired artist, turning imagination into captivating visual experiences.",
      image:
        "https://gateway.pinata.cloud/ipfs/QmWrxkw5HWZ8FFooWz2vikAcBWXxJncMrmGXDcQ6ecs96s",
      external_url: "https://www.daviddreamer.com",
      attributes: [
        {
          trait_type: "Style",
          value: "Fantasy",
        },
        {
          trait_type: "Medium",
          value: "Digital Painting",
        },
        {
          trait_type: "Dimensions",
          value: "2500x2500",
        },
      ],
      properties: {
        creation_date: "2023-06-10T10:45:00Z",
        edition: {
          total: 15,
          current: 5,
        },
        royalties: {
          artist: 85,
          platform: 10,
          community: 5,
        },
      },
      followers: 2500,
      following: 120,
      external_links: [
        {
          name: "Auction",
          url: "https://www.auctionplatform.com/david-dreamer-001",
        },
        {
          name: "SuperRare",
          url: "https://superrare.com/daviddreamer",
        },
      ],
    },
    {
      name: "John Doe",
      description:
        "A passionate artist exploring the intersection of technology and creativity.",
      image:
        "https://gateway.pinata.cloud/ipfs/QmdTHfosZu1GA76bdKiF1CkUUpwbrD782L9JixJ47V4B9g",
      external_url: "https://www.johndoeart.com",
      attributes: [
        {
          trait_type: "Style",
          value: "Abstract",
        },
        {
          trait_type: "Medium",
          value: "Digital",
        },
        {
          trait_type: "Dimensions",
          value: "2000x2000",
        },
      ],
      properties: {
        creation_date: "2023-04-15T12:00:00Z",
        edition: {
          total: 10,
          current: 1,
        },
        royalties: {
          artist: 80,
          platform: 10,
          community: 10,
        },
      },
      followers: 1800,
      following: 500,
      external_links: [
        {
          name: "Auction",
          url: "https://www.auctionplatform.com/artistic-masterpiece-001",
        },
        {
          name: "OpenSea",
          url: "https://opensea.io/artistic-masterpiece-001",
        },
      ],
    },
  ];

  return (
    <View className="">
      <View className="flex-row items-center justify-between w-full">
        <Text className="text-[20px] font-bold text-[#fff]">Artists</Text>
        <View className="flex-row items-center space-x-1">
          <Text className="text-[12px] font-bold text-[#fff]">More</Text>
          <FontAwesome name="chevron-right" color="#fff" />
        </View>
      </View>

      {/* <RangeComponents /> */}

      <View
        style={{ flexDirection: "column", flexWrap: "wrap", marginTop: 19 }}
      >
        {artistsArr?.length == 0
          ? null
          : artistsArr?.map((val, index) => (
              <View style={{ width: "50%" }} key={index}>
                <ArtistCard {...val} />
              </View>
            ))}
      </View>
    </View>
  );
};

export default AllArtist;
