import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Store from '@react-native-async-storage/async-storage'

import {Box, useToast} from 'native-base'


import Share from 'react-native-share';

const ProfileScreen = ({navigation}) => {
const [data, setdata] = React.useState({})

  const toast = useToast();
  const myCustomShare = async () => {
    const shareOption = {
      message: 'test',
    };
    try {
      const ShareResponse = await Share.open(shareOption);
    } catch (error) {
      console.log('Error', error);
    }
  };


  React.useEffect(async()=>{
    const controller = new AbortController();
    const id = await Store.getItem('userId')
    console.log(id)
    fetch(`https://setinsoftnewsapp.herokuapp.com/news/auth/user/getById/${id}`)
    .then((response) => response.json())
    .then((response) => {
      if(response.status !== 200){
        
      toast.show({
        title: response.message
      })
      }else {
      setdata(response.user)
       console.log(response)
      }
      
      return ()=> {
        controller.abort()
      }
    })
    .catch((error) => {
      toast.show({
        title: error.message ? error.message: 'Network Faild',
      })
    });

  },[])


  const logoutHandler = async()=>{
   await Store.removeItem('userId')
     navigation.navigate('login')

  }

  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{marginLeft: 20}}>
                <Text style={[styles.title, {marginTop: 15, marginBottom: 5}]}>
                  {data.name}
                </Text>
                <Box style={styles.caption}>{data.email}</Box>
              </View>
            </View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={20}
                color="#777777"
              />
              <Text style={{color: '#777777', marginLeft: 20}}>
                Calabar, Nigeria
              </Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
             
                name="phone"
                size={20}
                color="#777777"
              />
              <Text style={{color: '#777777', marginLeft: 20}}>
                +234 (0) 803 4074 748
              </Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                
                name="email"
                size={20}
                color="#777777"
              />
              <Text style={{color: '#777777', marginLeft: 20}}>
                {data.email}
              </Text>
            </View>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <Text>$140</Text>
              <Box>Wallet</Box>
            </View>
            <View style={styles.infoBox}>
              <Text>12</Text>
              <Box>orders</Box>
            </View>
          </View>
          <View style={styles.menuWrapper}>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                  name="heart-outline"
                  size={25}
                  color="#3b82f6"
                />
                <Text style={styles.menuItemText}>Your Favorite</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
               
                  name="credit-card"
                  size={25}
                  color="#3b82f6"
                />
                <Text style={styles.menuItemText}>Payment</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={myCustomShare}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
             
                  name="share-outline"
                  size={25}
                  color="#3b82f6"
                />
                <Text style={styles.menuItemText}>Tell your friends</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.menuItem}>
                <MaterialCommunityIcons
                 
                  name="account-check-outline"
                  size={25}
                  color="#3b82f6"
                />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={logoutHandler}>
              <View style={styles.menuItem}>
                <AntDesign

                  name="logout"
                  size={25}
                  color="#3b82f6"
                />
                <Text style={styles.menuItemText}>Logot</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 14,
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

export default ProfileScreen;

