import { red } from 'ansi-colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View style={styles.container}> 
      <StatusBar hidden />     
      <View style={styles.containerLinhaSuperior}>
        <View style={styles.boxLinhaSuperior}/>       
      </View>
      <View style={styles.container2}>
        <View style={styles.box2}/>
        <View style={styles.box3}/>        
      </View>
      <View style={styles.container3}>
        <View style={styles.retangEsq}/>
        <View style={styles.retangDir}/>        
      </View>
      <View style={styles.containerSeparador}>
        <View style={styles.boxSeparador}/>              
      </View>
      <View style={styles.container5A}>
        <View style={styles.container5B}>
          <View style={styles.box2}/>
          <View style={styles.box2}/>         
        </View>    
        <View style={styles.container5B}>
          <View style={styles.box2}/>
          <View style={styles.box2}/>          
        </View> 
        <View style={styles.container5B}>
          <View style={styles.box2}/>
          <View style={styles.box2}/>          
        </View>               
      </View>
      <View style={styles.container6}>
        <View style={styles.boxLinhaInferior}/>               
      </View>      
    </View>    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  

  },
  containerLinhaSuperior: {
    flex: 1,   
    // backgroundColor: 'red',        
  },
  container2: {
    flex: 6,  
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',      
    // backgroundColor: 'black', 
  },
  container3: {
    flex: 2,     
    flexDirection: 'row',
  },
  containerSeparador: {
    flex: 0,  
    marginTop: 0, 
    backgroundColor: 'yellow',
  },
  container5A: {
    flex: 8, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    // margin: 0,
    // padding: 0,
    // justifyContent: 'space-evenly',
    alignItems: 'center',    
    // backgroundColor: 'black',       
  },
  container5B: {
    flex: 1,  
    alignItems: 'center', 
    justifyContent: 'center',  
    height: '100%',
    // margin: 20,
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    // backgroundColor: 'red', 
      
  },
  container6: {
    flex: 1,  
    // backgroundColor: 'black',    
  },
  
  boxLinhaSuperior: {   
    height: 25,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',    
  },
  box3: {
    width: 150,
    height: 30,
    backgroundColor: '#F5A623',
  },
  retangEsq: {
    height: 78,
    width: '50%',
    backgroundColor: '#9013FE',  
  },
  retangDir: {
    height: 78,
    width: '50%',
    backgroundColor: '#4A90E2',
  },
  boxSeparador: {   
    height: 13,
    backgroundColor: '#50E3C2',
  },
  
  boxLinhaInferior: {   
    height: 60,
    backgroundColor: '#50E3C2',
  },
 
});

export default App;