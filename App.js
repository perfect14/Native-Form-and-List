import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import ContactList  from './ContactList';
import Contact from './components/Contact';
import SignUp from './SignUp'


class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <SignUp/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top:50
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});


export default App;