import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  Pressable,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Linking,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Ionicons,
  Feather,
  FontAwesome,
} from "@expo/vector-icons";
import { ResizeMode } from "expo-av";
import VideoPlayer from "expo-video-player";
import ShowScroller from "../components/ShowScroller";
// import EpisodeItem from "../../components/EpisodeItem";
// import VideoPlayer from "../components/VideoPlayer";

const MoviewDetailsScreen = ({ route }) => {
  console.log("route", route.params.data);
  return (
    <View>
      <VideoPlayer
        style={{ aspectRatio: 16 / 9, height: 210 }}
        videoProps={{
          shouldPlay: true,
          resizeMode: ResizeMode.CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
      />
      <FlatList
        style={{ marginBottom: 250 }}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text style={styles.title}>movie Name</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.match}>98% match</Text>
              <Text style={styles.year}>2022</Text>
              <View style={styles.ageContainer}>
                <Text style={styles.age}>13+</Text>
              </View>
              <Text style={styles.year}>5Seasons</Text>
              <MaterialIcons name="hd" size={24} color="white" />
            </View>

            {/* Play Button */}
            <Pressable
              onPress={() => Linking.openURL(`${route.params.data.videoUrl}`)}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            {/* Download Button */}
            <Pressable
              onPress={() => {
                console.warn("Download");
              }}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" /> Download
              </Text>
            </Pressable>

            <Text style={{ marginVertical: 10 }}>Horror</Text>
            <Text style={styles.year}>
              Cast: Amitabh Bachan , Anushka Sharma
            </Text>
            <Text style={styles.year}>Creator: Z Studio</Text>

            {/* Row with icon buttons */}
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color={"white"} />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>My List</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Rate</Text>
              </View>

              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <FontAwesome name="send-o" size={24} color="white" />
                <Text style={{ color: "darkgrey", marginTop: 5 }}>Share</Text>
              </View>
            </View>
            <View style={{ backgroundColor: "white" }}></View>

            {
              <Picker
                // selectedValue={currentSeason.name}
                onValueChange={(itemValue, itemIndex) => {
                  setCurrentSeason(seasons[itemIndex]);
                }}
                style={{ color: "white", width: 130 }}
                itemStyle={{ backgroundColor: "white" }}
                dropdownIconColor={"white"}
              ></Picker>
            }
            <Text style={{ marginVertical: 7 }}>Related</Text>
            <ShowScroller dataset="dumbData" name="netflix" color="red" />
            <ShowScroller dataset="dumbData" name="netflix" color="red" />
          </View>
        }
      />
    </View>
  );
};

export default MoviewDetailsScreen;
const styles = StyleSheet.create({
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingHorizontal: 3,
    marginRight: 5,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },

  // Button
  playButton: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#2b2b2b",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
