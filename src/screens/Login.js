import React from 'react';
import {
  Text,
  Box,
 FormControl,
  Button,
  Input,
useToast
} from 'native-base';
import Store from '@react-native-async-storage/async-storage'
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'


const REGEX =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const AddMenu = ({navigation}) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPass, setShowPass] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (email === '') {
      setErrors({
        ...errors,
        email: 'Username is required',
      });
      return false;
    } else if (REGEX.test(String(email).toLowerCase()) == false) {
      setErrors({
        ...errors,
        email: 'Must be  valid email address',
      });
      return false;
    }else if (password === '') {
      setErrors({
        ...errors,
        password: 'Password is required',
      });
      return false;
    }else if (password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password be greather than five',
      });
      return false;
    }else if (password.length > 8) {
      setErrors({
        ...errors,
        password: 'Password be less than nine',
      });
      return false;
    }
    else
    setErrors({})
    return true;
  };


  const toast = useToast();
  const onShowPass =()=> setShowPass(!showPass)


  const onSubmitHandler =()=>{
    
    if(validate() === true) {  
      setIsLoading(true)
     fetch(`https://setinsoftnewsapp.herokuapp.com/news/auth/login/action`, {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type':'application/json'
  },
    body:  JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((response) => {
      if(response.status !== 200){
        setIsLoading(false)
        
      toast.show({
        title: response.message
      })
      }else {
        Store.setItem('userId', response.auth[0].userId)
        setIsLoading(false)
        toast.show({
          title: response.message
        })
        navigation.navigate('tabs')
      }
    })
    .catch((error) => {
      console.log('error', error);
      setIsLoading(false)
      toast.show({
        title: error.message ? error.message: 'Network Faild',
      })
    });
  }
  }
  

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <Box >
          <Box mt={20} mx={5}>
            <View >
              <Text color='singletons.black' fontWeight='bold' fontSize='3xl'>
              Welcome
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text  fontWeight='bold' color='blue.500' fontSize='3xl'>
                Back{' '}
                </Text>
              </View>
            </View>
          </Box>
          <Box style={{marginVertical: 30, marginHorizontal: 15}}>
            <FormControl isRequired >            
                <Box>
                        
                        
                      <Input
                      
                      mb={3}
                        _focus={{
                        
                          borderColor:"blue.200"
                        }}
                        InputLeftElement={<AntDesign name='user'  size={20}/>}
                        
                          placeholder="Username"
                          onChangeText={(text)=> setEmail(text)}
                          value={email}
                        />
                       
                      {'email' in errors && <FormControl.HelperText _text={{fontSize: 'xs'}}>
                        {errors.email}
                      </FormControl.HelperText>}
        
                         <Input
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        InputRightElement={<Box mr={2} >{showPass ? <Ionicons  onPress={onShowPass} size={25} name="ios-eye" />:<Ionicons onPress={onShowPass}  size={25} name="ios-eye-off" />}</Box> }
                        InputLeftElement={<Entypo  size={25} name="lock" />}
                        mb={3}
                        onChangeText={(text)=> setPassword(text)}
                          value={password}
                          placeholder="Password"
                          type={showPass ? 'text': 'password'}
                        />
                      {'password' in errors && <FormControl.HelperText _text={{fontSize: 'xs'}}>
          {errors.password}
        </FormControl.HelperText>}  
                        <Button mt={10}
                         isLoading={isLoading} isLoadingText="Submitting" 
                        onPress={onSubmitHandler}
                        _text={{
                          color: 'white'
                        }}
                        _pressed={{
                        bg: 'blue.300'
                      }}   bg='blue.500'>
                        LOGIN
                      </Button>

                      <Button mt={3} bg='blue.500' 
                      onPress={()=> navigation.navigate('register')}
                      _pressed={{
                        bg: 'blue.300'
                      }} 
                      _text={{
                        color: "white",
                      }}>REGISTER</Button>

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

export default AddMenu;
