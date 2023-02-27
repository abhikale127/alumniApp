import * as React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import { gStyle, images } from "../constants";

// components
import PromotionPlay from "./PromotionPlay";
import TouchTextIcon from "./TouchTextIcon";

// icons
import SvgCheck from "../icons/Svg.Check";
import SvgInfo from "../icons/Svg.Info";
import SvgPlus from "../icons/Svg.Plus";

const PromotionBanner = () => {
  // local state

  return (
    <ImageBackground
      source={images.bannerBander}
      style={styles.imageBackground}
    >
      <View style={styles.containerContent}>
        <Image source={images.logoBander} style={styles.image} />

        <View style={gStyle.flexRowSpace}></View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 480,
  },
  containerContent: {
    bottom: 24,
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  image: {
    alignSelf: "center",
    height: 69,
    marginBottom: 24,
    width: 291,
  },
});

export default React.memo(PromotionBanner);
