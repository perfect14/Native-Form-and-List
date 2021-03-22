import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Contact from'./components/Contact'



function ContactList () {
    const contacts =[
        { name:"Sam Bob", number:"043-565-7665"},
        { name:"John Mike", number:"043-565-7665"},
        { name:"Eunice Anderson", number:"043-565-7665"},
        { name:"Jay Kay", number:"024-565-7665"},
        { name:"Uncle Bob", number:"023-565-7665"},
        { name:"Mary Judy", number:"050-565-7665"}
    ]
  
    return (
      <View >
          <FlatList
          data={contacts}
          renderItem={({item})=>{
               return<Contact name={item.name} phone={item.number}/>
          }}
          keyExtractor={(item)=>item.number}
              />
       
      </View>
    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default ContactList;