import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider.android';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import firestore from '@react-native-firebase/firestore';
import PostCard from '../components/PostCard';
import axios from 'axios';
import {Colors} from '../config';

const ProfileScreen = ({navigation, route}) => {
  const {user, logout, googleLogout} = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [userData, setUserData] = useState(null);
  // console.log('==============user======================', user);

  // const fetchPosts = async () => {
  //   try {
  //     const list = [];

  //     await firestore()
  //       .collection('posts')
  //       .where('userId', '==', route.params ? route.params.userId : user.uid)
  //       .orderBy('postTime', 'desc')
  //       .get()
  //       .then(querySnapshot => {
  //         // console.log('Total Posts: ', querySnapshot.size);

  //         querySnapshot.forEach(doc => {
  //           const {userId, post, postImg, postTime, likes, comments} =
  //             doc.data();
  //           list.push({
  //             id: doc.id,
  //             userId,
  //             userName: 'Test Name',
  //             userImg:
  //               'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
  //             postTime: postTime,
  //             post,
  //             postImg,
  //             liked: false,
  //             likes,
  //             comments,
  //           });
  //         });
  //       });

  //     setPosts(list);

  //     if (loading) {
  //       setLoading(false);
  //     }

  //     console.log('Posts: ', posts);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const logOut = async () => {
    logout();
    googleLogout();
  };
  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '07500fc9b3mshe6c1761dbf8d65ap1e8badjsn61349e1f972f',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      // console.log('res', response);
    })
    .catch(function (error) {
      console.error(error);
    });
  const id = !user.user ? user.uid : user.user.id;
  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(id)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
      .catch(error => console.error('Failed to add user:', error));
  };

  useEffect(() => {
    getUser();
    //fetchPosts();
    navigation.addListener('focus', () => setLoading(!loading));
  }, [navigation, loading]);

  const handleDelete = () => {};

  return (
    // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
    //   <ScrollView
    //     style={styles.container}
    //     contentContainerStyle={{}}
    //     showsVerticalScrollIndicator={true}>
    //     <View style={styles.profileDetail}>
    //       <View>
    //         <Image
    //           style={styles.userImg}
    //           source={{
    //             uri: !userData
    //               ? 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
    //               : userData.photo,
    //           }}
    //         />
    //       </View>
    //       <View>
    //         <Text style={styles.aboutUser}>
    //           {userData ? userData.name || 'No details added.' : ''}
    //         </Text>
    //         <Text style={styles.userName}>
    //           {userData ? userData.email || 'No details added.' : ''}
    //         </Text>
    //       </View>
    //     </View>
    //     <View style={styles.profileDetail}>
    //       <Image
    //         style={styles.userImg}
    //         source={{
    //           uri: !userData
    //             ? 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
    //             : userData.photo,
    //         }}
    //       />
    //       <Text style={styles.aboutUser}>
    //         {userData ? userData.name || 'No details added.' : ''}
    //       </Text>
    //       <Text style={styles.userName}>
    //         {userData ? userData.email || 'No details added.' : ''}
    //       </Text>
    //     </View>
    //     <View style={styles.userBtnWrapper}>
    //       {route.params ? (
    //         <>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
    //             <Text style={styles.userBtnTxt}>Message</Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
    //             <Text style={styles.userBtnTxt}>Follow</Text>
    //           </TouchableOpacity>
    //         </>
    //       ) : (
    //         <>
    //           <TouchableOpacity
    //             style={styles.userBtn}
    //             onPress={() => {
    //               navigation.navigate('EditProfile');
    //             }}>
    //             <Text style={styles.userBtnTxt}>Edit</Text>
    //           </TouchableOpacity>
    //           <TouchableOpacity style={styles.userBtn} onPress={() => logOut()}>
    //             <Text style={styles.userBtnTxt}>Logout</Text>
    //           </TouchableOpacity>
    //         </>
    //       )}
    //     </View>

    //     <View style={styles.menuWrapper}>
    //       <TouchableOpacity onPress={() => {}}>
    //         <View style={styles.menuItem}>
    //           <Icon name="heart-outline" color={Colors.orange} size={25} />
    //           <Text style={styles.menuItemText}>Your Favorites</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => {}}>
    //         <View style={styles.menuItem}>
    //           <Icon name="credit-card" color={Colors.orange} size={25} />
    //           <Text style={styles.menuItemText}>Payment</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => {}}>
    //         <View style={styles.menuItem}>
    //           <Icon name="share-outline" color={Colors.orange} size={25} />
    //           <Text style={styles.menuItemText}>Tell Your Friends</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => {}}>
    //         <View style={styles.menuItem}>
    //           <Icon name="account-check-outline" color={Colors.orange} size={25} />
    //           <Text style={styles.menuItemText}>Support</Text>
    //         </View>
    //       </TouchableOpacity>
    //       <TouchableOpacity onPress={() => {}}>
    //         <View style={styles.menuItem}>
    //           <Icon name="settings-outline" color={Colors.orange} size={25} />
    //           <Text style={styles.menuItemText}>Settings</Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //     {/* <View style={styles.userInfoWrapper}>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>{posts.length}</Text>
    //         <Text style={styles.userInfoSubTitle}>Posts</Text>
    //       </View>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>10,000</Text>
    //         <Text style={styles.userInfoSubTitle}>Followers</Text>
    //       </View>
    //       <View style={styles.userInfoItem}>
    //         <Text style={styles.userInfoTitle}>100</Text>
    //         <Text style={styles.userInfoSubTitle}>Following</Text>
    //       </View>
    //     </View>

    //     {posts.map(item => (
    //       <PostCard key={item.id} item={item} onDelete={handleDelete} />
    //     ))} */}
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.profileContainer}>
          <Image
            style={styles.userImg}
            source={{
              uri: !userData
                ? 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                : userData.photo,
            }}
          />

          <View style={styles.userInfo}>
            <View style={styles.row}>
              <Icon name="account" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userData
                  ? userData.name || 'No details added.'
                  : 'No details added.'}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userData
                  ? userData.location || 'No details added.'
                  : 'No details added.'}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userData
                  ? userData.phone || 'No details added.'
                  : 'No details added.'}
              </Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20} />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {userData ? userData.email || 'No details added.' : ''}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* 
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: '#dddddd',
              borderRightWidth: 1,
            },
          ]}>
          <Text>₹140.50</Text>
          <Text>Wallet</Text>
        </View>
        <View style={styles.infoBox}>
          <Text>12</Text>
          <Text>Orders</Text>
        </View>
      </View> */}

      <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            {/* <Icon name="heart-outline" color={Colors.orange} size={25} /> */}
            <MaterialCommunityIcons
              name="heart-outline"
              size={25}
              color={Colors.orange}
            />
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="credit-card-outline"
              size={25}
              color={Colors.orange}
            />
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="share-outline"
              size={25}
              color={Colors.orange}
            />
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="account-check-outline"
              size={25}
              color={Colors.orange}
            />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logOut();
          }}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons
              name="logout"
              size={25}
              color={Colors.orange}
            />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  userInfoSection: {
    paddingHorizontal: 15,
    borderColor: Colors.orange,
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
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
    borderColor: Colors.orange,
    borderWidth: 1,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
