import { red } from 'ansi-colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstSteps = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'  
          //ou alignItems aqui na View 
          //container que está como pai da View box1  ou 
          // coloco o alignSelf na View filho (box1)
  },

  box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2',
  },
  box3: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE',
  },
});

export default FirstSteps;