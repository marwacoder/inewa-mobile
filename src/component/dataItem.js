import React, {Component} from 'react';
import {
  List,
  Box,
  View,
  Text,
  Button,
  Avatar,
  Spinner
} from 'native-base';
import TimeAgo from './time';



import {Dimensions, ScrollView, SafeAreaView, RefreshControl} from 'react-native'

const {width, height} = Dimensions.get('screen')

 function DataItem(props) {
  const [data, setData] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  
  
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
  


  React.useEffect(()=>{
    setData(props.data)
  },[])


  
  return (
 <SafeAreaView>
   <ScrollView refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
   
      {data ? data.map((data,i)=>(
<List.Item key={i}>
  <Box width={width - 20}>
      <Box >
        <Avatar
          source={{
            uri:
              data.urlToImage != null
                ? data.urlToImage
                : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=',
          }}
        />
      </Box>
      <Box>
        <Text numberOfLines={2}>{data.title}</Text>
        <Text note numberOfLines={2}>
          {data.description}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 8,
            marginLeft: 0,
          }}>
          <Text note>{data.source.name ? data.source.name : data.source}</Text>
          <TimeAgo time={data.publishedAt} />
        </View> 
      </Box>
      <Box>
        <Button bg="blue.500"
        _pressed={{
          bg: 'blue.300'
        }}
        _text={{
          color: 'white'
        }}
          transparent
          onPress={() => props.onPress(data)}
          >
            View
        </Button>
      </Box>
      </Box>
    </List.Item>
      )): <Spinner/>}
  
    </ScrollView>
 </SafeAreaView>
  );
}


export default DataItem = React.memo(DataItem)