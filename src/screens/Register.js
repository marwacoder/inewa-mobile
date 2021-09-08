import React from 'react';
import {
  Spinner,
  TextArea,
  Text,
  Box,
 FormControl,
  Button,
  Input,
 useToast
} from 'native-base';

import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';


import Fontisto from 'react-native-vector-icons/Fontisto'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'




const Register = ({navigation}) => {
  const [shouldOverlapWithTrigger] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPass, setShowPass] = React.useState(false);
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const toast = useToast();

  const onShowPass =()=> setShowPass(!showPass)

const onSubmitHandler =()=>{
  const name = fullName
   setIsLoading(true)
  console.log(fullName)
  fetch(`https://setinsoftnewsapp.herokuapp.com/news/auth/register`, {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type':'application/json'
  },
    body:  JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('response', response);
      setIsLoading(false)
      toast.show({
        title: response.message
      })
       navigation.navigate('login')
    })
    .catch((error) => {
      console.log('error', error);
      setIsLoading(false)
      toast.show({
        title: error.message ? error.message: 'Network Faild',
      })
    });
}





  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <Box >
          <Box mt={20} mx={5}>
            <View >
              <Text color='singletons.black' fontWeight='bold' fontSize='3xl'>
              Register 
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text  fontWeight='bold' color='blue.500' fontSize='3xl'>
                to Get  Started{' '}
                </Text>
                
              </View>
            </View>
          </Box>
          <Box style={{marginVertical: 30, marginHorizontal: 15}}>
            <FormControl>            
                <Box>
                        
                       
                       <Input
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        InputLeftElement={<AntDesign name='user'  size={20}/>}
                        mb={3}
                          placeholder="Full Name"
                          value={fullName}
                          onChangeText={(text)=> setFullName(text)}
                          
                        />
                        <Input
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        InputLeftElement={<Fontisto name='email'  size={20}/>}
                        mb={3}
                          placeholder="Email Address"
                          value={email}
                          onChangeText={(text)=> setEmail(text)}
                          
                        />
                        <Input
                        value={password}
                        onChangeText={(text)=> setPassword(text)}
                         type={showPass ? 'text': 'password'}
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        InputRightElement={<Box mr={2} >{showPass ? <Ionicons  onPress={onShowPass} size={25} name="ios-eye" />:<Ionicons onPress={onShowPass}  size={25} name="ios-eye-off" />}</Box> }

                        InputLeftElement={<Entypo  size={25} name="lock" />}
                        mb={3}
                          placeholder="Password"
                          
                        />
                        <Button mt={10} bg='blue.500' 
                      onPress={onSubmitHandler}
                      _pressed={{
                        bg: 'blue.300'
                      }} 
                      _text={{
                        color: "white",
                      }}  isLoading={isLoading} isLoadingText="Submitting">REGISTER</Button>
                      
                        </Box>
                        </FormControl>
                        </Box>
          </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    marginBottom: -110,
  },
  header: {
    marginTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  item: {
    marginHorizontal: 40,
    marginVertical: 5,
  },
  button: {
    marginHorizontal: '15%',
  },
});

export default Register;
