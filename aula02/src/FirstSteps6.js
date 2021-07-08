import { red } from 'ansi-colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
        <View style={styles.box4}/>
      </View>
      <View style={styles.container1}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
        <View style={styles.box4}/>
      </View>
      <View style={styles.container1}>
        <View style={styles.box1}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
        <View style={styles.box4}/>
      </View>
    </View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'row',              
  },
  container1: {
    flex: 1,        
    justifyContent: 'space-around',
    alignItems: 'center',        
  },
  
  box1: {
    width: 80,
    height: 80,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 80,
    height: 80,
    backgroundColor: '#4A90E2',
  },
  box3: {
    width: 80,
    height: 80,
    backgroundColor: '#9013FE',
  },
  box4: {
    width: 80,
    height: 80,
    backgroundColor: '#F5A623',
  },
});

export default App;