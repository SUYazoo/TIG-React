import { View } from "react-native";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Grid  from '@mui/material/Grid';
import Stack  from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { Item } from "../contexts/Item";
import { Wrapper, StyledButton } from "../styles/ProduitStye";
import { Cart } from "../Cart/Cart";

export type CartItemType = {
  id : number;
  category: string;
  price : number;
  title : string;
  amount : number;
}

export default function ProductScreen() {

  const [cartOpen, setCartOpen] = useState(true);

  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  
  const getTotalItems = (items : CartItemType[]) => items.reduce((ack:number, item) => ack + item.amount , 0);
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems( prev => {
      const isInCart = prev.find(item => item.id === clickedItem.id);

      if(isInCart){
        return prev.map(item => item.id === clickedItem.id ? { ...item, amount : item.amount +1} : item);
      }
      //Dans le cas ou l'item a été ajouté une 1ere fois dans le panier
      return [...prev, { ...clickedItem, amount : 1}]
    })
  };
  
  const handleRemoveFromCart = (id:number) => {
    setCartItems(prev =>(
      prev.reduce((ack,item) => {
        if(item.id === id){
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount : item.amount -1}]
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    ))
  };
  
  const data : CartItemType[] = [
    //Poissons :
    {
      id : 0,
      title : 'Filet Bar de ligne ',
      category: 'Poissons',
      price : 7,
      amount: 1
    },
    {
      id : 1,
      title : 'Bar de ligne portion',
      category: 'Poissons',
      price : 10,
      amount: 1
    },
    {
      id : 2,
      title : 'Aile de raie',
      category: 'Poissons',
      price : 10,
      amount: 1
    },
    {
      id : 3,
      title : 'Lieu jaune de ligne',
      category: 'Poissons',
      price : 12,
      amount: 1
    },
    {
      id : 4,
      title : 'Filet Julienne',
      category: 'Poissons',
      price : 19,
      amount: 1
    },
    {
      id : 5,
      title : 'Bar de ligne',
      category: 'Poissons',
      price : 30,
      amount: 1
    },
    //Coquillages
    {
      id : 6,
      title : 'Moules de pêches',
      category: 'Coquillages',
      price : 30,
      amount: 1
    },
    {
      id : 7,
      title : 'Bouquets cuits',
      category: 'Coquillages',
      price : 30,
      amount: 1
    },
    {
      id : 8,
      title : 'Huîtres N°2 St Vaast ',
      category: 'Coquillages',
      price : 9.50,
      amount: 1
    },
    {
      id : 9,
      title : 'Huîtres N°2 OR St Vaast',
      category: 'Coquillages',
      price : 12,
      amount: 1
    },
    {
      id : 10,
      title : 'Huîtres N°2 St Vaast',
      category: 'Coquillages',
      price : 19,
      amount: 1
    },
    {
      id : 11,
      title : 'Huîtres N°2 OR St Vaast',
      category: 'Coquillages',
      price : 24,
      amount: 1
    },
    {
      id : 12,
      title : 'Huîtres N°2 St Vaast',
      category: 'Coquillages',
      price : 38,
      amount: 1
    },
    {
      id : 13,
      title : 'Huîtres N°2 St Vaast',
      category: 'Coquillages',
      price : 24,
      amount: 1
    },
    //Crustacés
    {
      id : 14,
      title : 'Araignées',
      category: 'Crustacés',
      price : 7,
      amount: 1
    },
    {
      id : 15,
      title : 'Moule de pêche',
      category: 'Crustacés',
      price : 7,
      amount: 1
    }
  ];

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
            cartItems={cartItems}
            addToCart={handleAddToCart}    
            removeFromCart={handleRemoveFromCart} 
        />
      </Drawer>
      <StyledButton onClick={()=> setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
          )
        )}
      </Grid>
    </Wrapper>
  )
}

