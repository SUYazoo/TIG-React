import { Text, View, Image, Button, StyleSheet} from 'react-native';
import { CartItemType } from "../screens/ProductsScreen"
import { Wrapper } from "../styles/ItemStyle"

export type Props = {
    item : CartItemType,
    handleAddToCart : (clickedItem : CartItemType) => void;
}

export const Item : React.FC<Props> = ({item, handleAddToCart}) => (
   /* <Wrapper>
        <div>
            <img src='../assets/boat-app/ancre.png' alt={item.title}/>
            <h3>{item.title}</h3>
            <h3>{item.price}€</h3>
        </div>
        <button onClick={() => handleAddToCart(item)}> Ajouter à votre panier</button>
    </Wrapper>*/
    <View>
        <View style={styles.body}>
            <View>
        <Image source={require('../assets/boat-app/ancre.png')} style={{ width: 20, height: 20 }} />
            <Text>{item.title}</Text>

            </View>
            <Text>{item.price}€</Text>
            <Button title="Ajouter à votre panier"
          onPress={() => { handleAddToCart(item) } }/>
        </View>
   
    </View>
)

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

    body : {
        width: 600,
        margin: 10,
        backgroundColor: '#FF9500',
        border: 5 
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
  
  