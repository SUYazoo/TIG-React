import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import BoatsScreen from './screens/BoatsScreen'
import ProductsScreen from './screens/ProductsScreen';
import RestaurantsScreen from './screens/RestaurantsScreen';
import RecipesScreen from './screens/RecipesScreen';
import PageScreen from './screens/PageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{title: "Le Bateau de Thibault"}}
        />

        <Stack.Screen 
          name="Produits" 
          component={ProductsScreen} 
        />

        <Stack.Screen 
          name="Bateaux" 
          component={BoatsScreen} 
        />

        <Stack.Screen 
          name="Restaurants" 
          component={RestaurantsScreen} 
        />

        <Stack.Screen 
          name="Recettes" 
          component={RecipesScreen} 
        />

        <Stack.Screen 
          name="Contact" 
          component={HomeScreen} 
        />

        <Stack.Screen 
          name="Page" 
          component={PageScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
