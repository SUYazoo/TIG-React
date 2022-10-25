import * as React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'; 
import { RootStackParamList } from '../types';


export default function HomeScreen({navigation}: {navigation: any}){
  return (
    <View style={styles.container}>
        <Button title="Produits et Promotions"
          onPress={() => { navigation.navigate("Produits") } }/>
        <Button title="Bateaux"
          onPress={() => { navigation.navigate("Bateaux") } }/>
        <Button title="Restaurants"
          onPress={() => { navigation.navigate("Restaurants") } }/>
        <Button title="Recettes"
          onPress={() => { navigation.navigate("Recettes") } }/>
        <Button title="Contact"
          onPress={() => { navigation.navigate("Contact") } }/>
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

