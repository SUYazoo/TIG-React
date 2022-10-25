import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageContext } from '../contexts/PageContext';

export default function RecipesScreen({navigation} : {navigation: any}){

  const recettes = [
    {
        id : 1,
        nom: 'De la Brise',
        icon: require('../assets/boat-app/deLaBrise_icon@3x.png'),
        img: require('../assets/boat-app/deLaBrise@3x.png'),
        description: 'Bon vent moussaillons'
    },
    {
        id : 2,
        nom: 'Saphir',
        icon: require('../assets/boat-app/saphir_icon@3x.png'),
        img: require('../assets/boat-app/saphir@3x.png'),
        description: 'Saphir, tel la beauté bleutée de la mer que ce charmant bateau vogue dans son infinité'
    },
    {
        id : 3,
        nom: 'Gast Micher',
        icon: require('../assets/boat-app/gastMicher_icon@3x.png'),
        img: require('../assets/boat-app/gastMicher@3x.png'),
        description: 'Le Gast Micher est un navire anglais'
    },
    {
        id : 4,
        nom: 'Aquilon',
        icon: require('../assets/boat-app/aquilon_icon@3x.png'),
        img: require('../assets/boat-app/aquilon@3x.png'),
        description: 'Le plus grand bateau proposé par Thibault'
    },
]

    const {affectPage} = React.useContext(PageContext)

    const resto = ( { item }  : { item : any } ) => (
        <View style={styles.item}>
            <View style={styles.iconContainer}>
              <Image source={item.icon} style={styles.icon}/>
            </View>
            <Text onPress={() => {
              affectPage({nom:item.nom, img:item.img, description:item.description})
              navigation.navigate("Page")
            } } 
            style={styles.name}>{item.nom} </Text>
        </View>
    )
    
    const headerComponent = () => {
        return <Text style={styles.listHeadline}>Selection d'un bateau</Text>
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

