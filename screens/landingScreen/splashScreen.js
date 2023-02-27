import React, { useState, useEffect } from "react";
// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

const SplashScreen = ({ navigation }) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        navigation.navigate("Login")
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton
        />
      )}
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: 200,
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: "s1",
    text: "Alumni App for GCOERA",
    title: "For alumni and college student",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png",
    },
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Guidance",
    text: "Learn from your alumni",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Refferals for jobs",
    text: "Enjoy Great opportunity to get refrence from alumni",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png",
    },
    backgroundColor: "#22bcb5",
  },
  {
    key: "s4",
    title: "Stay connected",
    text: " Best way to connect with industry",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png",
    },
    backgroundColor: "#3395ff",
  },
  {
    key: "s5",
    title: "Bus Booking",
    text: "Enjoy Travelling on Bus with flat 100% off",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png",
    },
    backgroundColor: "#f6437b",
  },
  {
    key: "s6",
    title: "Train Booking",
    text: " 10% off on first Train booking",
    image: {
      uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png",
    },
    backgroundColor: "#febe29",
  },
];
