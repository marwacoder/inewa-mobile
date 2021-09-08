import React, { useState, useEffect } from 'react';
import {  Box, useToast } from 'native-base';

import DataItem from '../../component/dataItem';
import Modal from '../../component/modal';

 const Tab2=(props)=> {


const [data, setData]= useState(null);
const [modalVisible, setModalVisible]= useState(false)
const [modalArticleData, setModalArticleData]= useState({})
const toast = useToast()

 const handleItemDataOnPress = (articleData) => {
     setModalVisible(true)
     setModalArticleData(articleData)
  }

const  handleModalClose = () => {
    setModalVisible(false)
     setModalArticleData({})
  }
  const controller = new AbortController();
  useEffect(()=>{
    fetch(`https://setinsoftnewsapp.herokuapp.com/news/getByCategory/business`)
    .then((response) => response.json())
    .then((response) => {
      if(typeof response === 'undefined'){
        if(response.status !== 200){
        
          toast.show({
            title: response.message
          })
          }else {
          setdata(response.user)
          }
          
          return ()=> {
            controller.abort()
          }
    

      }else {
        setData(response.articles)
      }
      
      
    })
    .catch((error) => {
      toast.show({
        title: error.message ? error.message: 'Network Faild',
      })
    });

  },[])
 




  return (
    <Box flex={1}>
        <Box>
        {data && <DataItem onPress={handleItemDataOnPress} data={data} />}
        </Box>
      <Modal
        showModal={modalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Box>
  );
}

export default Tab2;