import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageContext } from '../contexts/PageContext';

export default function RecipesScreen({navigation} : {navigation: any}){

  const recettes = [
    {
        id : 1,
        nom: 'Homard',
        nom_complet : 'Homard en chaud-froid',
        icon: require('../assets/boat-app/homardRecette_icon@3x.png'),
        img: require('../assets/boat-app/homardRecette@3x.png'),
        description: 'Brasserie chic et sobre servant des omelettes, des salades, et des plats typiques de viande ou poisson. Tables sur le trottoir.'
    },
    {
        id : 2,
        nom: 'St Jacques',
        nom_complet : 'Noix de Saint Jacques flambées au cogne',
        icon: require('../assets/boat-app/saintJacques_icon@3x.png'),
        img: require('../assets/boat-app/saintJacques@3x.png'),
        description: 'Un restaurant typique de 10h à 21h tous les jours pour une ambiance chaleureuse entre amis.'
    },
    {
        id : 3,
        nom: 'Bar',
        nom_complet : 'Bar rôti au laurier frais',
        icon: require('../assets/boat-app/barRecette_icon@3x.png'),
        img: require('../assets/boat-app/barRecette@3x.png'),
        description: 'Restaurant de cuisine traditionnelle Landaise, spécialisée dans les plats du Sud-Ouest...'
    },
    {
        id : 4,
        nom: 'Tourteau',
        nom_complet : 'Tourteau linguine',
        icon: require('../assets/boat-app/tourteau@3x.png'),
        img: require('../assets/boat-app/tourteau@3x.png'),
        description: 'Restaurant de cuisine traditionnelle Landaise, spécialisée dans les plats du Sud-Ouest...'
    },
]

    const {affectPage} = React.useContext(PageContext)

    const resto = ( { item }  : { item : any } ) => (
        <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon}/>
            </View>
            <Text onPress={() => {
              affectPage({nom:item.nom_complet, img:item.img, description:item.description})
              navigation.navigate("Page")
            } } 
            style={styles.name}>{item.nom} </Text>
        </View>
    )
    
    const headerComponent = () => {
        return <Text style={styles.listHeadline}>Selection d'une recette</Text>
    }

    const itemSeperator = () => {
        return <View style={styles.seperator} />
    }

  return (
    <SafeAreaView>
        <FlatList
            ListHeaderComponentStyle={styles.listHeader}
            ListHeaderComponent = {headerComponent}
            data = { recettes }
            renderItem = { resto }
            ItemSeparatorComponent = { itemSeperator }
            ListEmptyComponent = { <Text>Une liste assez simple</Text> }
        />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  listHeader : {
    height : '55',
    alignItems : 'center',
    justifyContent : 'center',
  },

  listHeadline: {
    color: '#333',
    fontSize: 21,
    fontWeight : 'bold',
  },

  item : {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical : 13,
  },

  iconContainer: {
    backgroundColor :  '#D9D9D9',
    borderRadius: 100,
    height: 89,
    width: 89,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height : 90,
    width : 90,

  },

  name: {
    fontWeight : '600',
    fontSize : 16,
    marginLeft : 13,
  },

  seperator : {
    height : 1,
    width: '100%',
    backgroundColor: '#CCC',
  },
});

