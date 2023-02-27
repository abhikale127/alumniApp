import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { signOut } from "firebase/auth";
import { auth } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { doc } from "firebase/firestore";

export default function More({ navigation }) {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  useEffect(async () => {
    const Emailvalue = await AsyncStorage.getItem("email");
    const docRef = doc(db, "User", Emailvalue);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }, []);

  const userData = false;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.userImg}
            source={{
              uri: !userData
                ? "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg"
                : userData.photo,
            }}
          />

          <View style={styles.userInfo}>
            <View style={styles.row}>
              <Icon name="account" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {userData
                  ? userData.name || "No details added."
                  : "No details added."}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {userData
                  ? userData.location || "No details added."
                  : "No details added."}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {userData
                  ? userData.phone || "No details added."
                  : "No details added."}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{ color: "#777777", marginLeft: 20 }}>
                {"No details added."}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="heart-outline" color="#FFA500" size={25} /> */}
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color="#FFA500"
            />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={25}
              color="#FFA500"
            />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="share-outline"
              size={25}
              color="#FFA500"
            />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="account-check-outline"
              size={25}
              color="#FFA500"
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("editProfile");
          }}
        >
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="pen" size={25} color="#FFA500" />
            <Text style={styles.menuItemText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="logout" size={25} color="#FFA500" />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 100,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
  userInfoSection: {
    paddingHorizontal: 15,
    borderColor: "#FFA500",
    borderWidth: 1,
    borderRadius: 10,
  },
  userImg: {
    height: 120,
    width: 120,
    borderRadius: 75,
  },

  userInfo: {
    paddingHorizontal: 15,
  },

  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
    borderColor: "#FFA500",
    borderWidth: 1,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
