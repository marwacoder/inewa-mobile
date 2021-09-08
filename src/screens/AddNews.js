import React,{useState} from 'react';
import {
  Spinner,
  TextArea,
  Text,
  Box,
 FormControl,
  Button,
  Image,
  Input,
 Menu,
 useToast
} from 'native-base';

import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Platform
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import AntDesign from 'react-native-vector-icons/AntDesign'
import mime from 'mime'

import {launchImageLibrary} from 'react-native-image-picker'

const createFormData = (urlToImage, body = {}) => {
  // console.log(photo.assets[0].uri,'pppp')
  const pic = urlToImage.assets[0]
  const newUri = "file:///"+ pic.uri.split("file:/").join("")
 
    const data = new FormData();
  
    data.append('urlToImage', {
      name: newUri.split("/").pop(),
      type: mime.getType(newUri),
      uri: newUri,
    });
  
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);


    });
  
    return data;
  };

const AddMenu = ({navigation}) => {
  const [shouldOverlapWithTrigger] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);
  const [urlToImage, setUrlToImage] = React.useState(null);
  const [author, setAuthor] = React.useState('');
  const [source, setSource] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');

  const toast = useToast();
  
  
  
  const takePhotoFromGallery = () => {
    launchImageLibrary({ noData: true }, (response) => {
        // console.log(response);
        if (response) {
          setUrlToImage(response);
        }
      });
  };

  

  
  const onPublish =()=>{
      setIsLoading(true)
    fetch(`https://setinsoftnewsapp.herokuapp.com/news/article`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        body: createFormData(urlToImage, { author, content, description, source, title, category }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response,'iiiiiii')
          if(response.status !== 201){
            setIsLoading(false)
            
          toast.show({
            title: response.message
          })
        }else {
          setIsLoading(false)
          toast.show({
            title: response.msg
          })
        }
        })
        .catch((error) => {
          setIsLoading(false)
          console.log(error,'error')
          toast.show({
            title: error.message,
          })
        });
  }





  
  
  

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
      <Box >
          <Box mt={15} mx={5}>
            <View >
              <Text color='singletons.black' fontWeight='bold' fontSize='3xl'>
              Publish
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text  fontWeight='bold' color='blue.500'  fontSize='3xl'>
                News{' '}
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
                        
                        mb={3}
                          placeholder="Author"
                          onChangeText={(text)=>setAuthor(text)}
                        value={author}
                        />
                        <Input
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        value={source}
                        mb={3}
                          placeholder="Source"
                          onChangeText={(text)=>setSource(text)}
                        />
                        <Input
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        value={title}
                        mb={3}
                          placeholder="Title"
                          onChangeText={(text)=>setTitle(text)}
                        />
                        <Input
                        isReadOnly={true}
                        _focus={{
                          borderColor:"yellow.200"
                        }}
                        value={category}
                        InputRightElement={<Menu
                          shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
                          placement='left'
                          trigger={(triggerProps) => {
                            return (
                              <Button bg='blueGray.50' _pressed={{
                                bg: 'blueGray.50'
                              }} _text={{
                                color:'black'
                              }}  startIcon={<AntDesign name='down'   size={20}/>} alignSelf="center"  {...triggerProps}></Button>
                            )
                          }}
                        >
                          <Menu.Item  onPress={()=>setCategory('general')}>General</Menu.Item>
                          <Menu.Item onPress={()=>setCategory('business')}>Business</Menu.Item>
                          <Menu.Item onPress={()=>setCategory('technology')}>Technology</Menu.Item>
                        </Menu>}
                        mb={3}
                          placeholder="Category"
                          
                        />

                        <TextArea
                        value={content}
                        onChangeText={(text)=>setContent(text)}
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        mb={3}
                        placeholder="Content"
                      
                        />
                        <TextArea
                        value={description}
                        onChangeText={(text)=>setDescription(text)}
                        _focus={{
                          borderColor:"blue.200"
                        }}
                        mb={3}
                        placeholder="Description"
                      
                        />
                        <Button
                        
                        onPress={takePhotoFromGallery}
                        _text={{
                          color: 'white'
                        }}
                        _pressed={{
                        bg: 'blue.300'
                      }}    endIcon={urlToImage ? <MaterialIcons name='check-circle'  size={20}/> :<MaterialIcons name='add-a-photo'  size={20}/>} bg='blue.500'>
                        UPLOAD PHOTO
                      </Button>
                      <Button mt={10}
                         isLoading={isLoading} isLoadingText="Submitting" 
                        onPress={onPublish}
                        _text={{
                          color: 'white'
                        }}
                        _pressed={{
                        bg: 'blue.300'
                      }}   bg='blue.500'>
                        PUBLISH
                      </Button>

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


// author: author,
//       content: content,
//       description: description,
//       sourceName,
//       sourceTitle,
//       category,
//       photo: req.file.path