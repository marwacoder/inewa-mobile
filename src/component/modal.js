//import libraries
import React, {Component} from 'react';
import {Dimensions, Modal, Share} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import moment from 'moment';

import {
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Button,
  Box
} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;



// create a component
const ModalComponent = props => {

  const {showModal, articleData} = props;
const {url, title,author, source,urlToImage, description, publishedAt} = articleData;

  const handleShare = () => {
  let  message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
    return Share.share(
      {title, message, url: message},
      {dialogTitle: `Share ${title}`},
    );
  };

  console.log(source)

  

  if (url != undefined) {
    return (
      <NativeBaseProvider>
        
      <Center flex={1}>
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={props.onClose}>
   <Box
    h={webViewHeight}
      shadow={1}
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            roundedTop="lg"
            source={{
              uri: urlToImage,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="red.500"
          _text={{
            color: "white",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom={0}
          px={2}
          py={1}
        >
          {source.name ? source.name: source}
        </Center>
        <Center
          p={1}
          rounded="full"
          bg="red.500"
          boxSize={10}
          position="absolute"
          right={0}
          m={2}
          _text={{
            color: "white",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "xs",
          }}
        >
          
        <Ionicons onPress={props.onClose} name="close" style={{color: 'white', fontSize: 20}} />
        </Center>
      </Box>
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading size="md" ml={-1}>
            {title}
          </Heading>
          <Heading
            size="xs"
            _light={{
              color: "red.500",
            }}
            _dark={{
              color: "red.300",
            }}
            fontWeight="500"
            ml={-0.5}
            mt={-1}
          >
            {author}
          </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
          {description}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
          <MaterialIcons name="access-time" />
            <Text ml={1} color="gray.500" fontWeight="500">
            {moment( publishedAt).fromNow()}
            </Text>
          </HStack>
          <HStack alignItems="center">
          <Button _pressed={{
      bg: 'gray.300'
    }} bg='gray.500' onPress={handleShare} 
    startIcon={<Ionicons name="share" style={{color: 'white', fontSize: 20}} />}
    transparent>
    </Button>
          </HStack>
        </HStack>
      </Stack>
    </Box>
       
      </Modal>
      </Center>
    </NativeBaseProvider>
     
    );
  } else {
    return null;
  }
};


export default ModalComponent;

