import { red } from 'ansi-colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    alignItems: 'center'  
          //ou alignItems aqui na View 
          //container que está como pai da View box1  ou 
          // coloco o alignSelf na View filho (box1)
  },
  
  box1: {
    flex: 1,    
    backgroundColor: "#50E3C2",
    width: "30%",    
    // alignSelf: "center",   
        // ou alignItems na View pai que está sendo a container
    
  },
});

export default App;