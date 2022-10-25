import CartItem from "./CartItem";
import { Wrapper } from "./CartStyles";
import { CartItemType } from "../screens/ProductsScreen"

type Props = {
    cartItems : CartItemType[];
    addToCart : (clickedItem: CartItemType) => void;
    removeFromCart : (id:number) => void;
}

export const Cart : React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
   const calculateTotal = (items : CartItemType[]) =>
    items.reduce((ack : number, item) => ack + item.amount * item.price, 0)
   
    return (
        <Wrapper>
            <h2> Votre Panier </h2>
            {cartItems.length === 0 ? <p>Il n'y a pas d'article dans votre panier.</p> : null }
            {cartItems.map(item => (
                <CartItem 
                    key = {item.id}
                    item={item}
                    addToCart={addToCart}    
                    removeFromCart={removeFromCart} 
                />
            ))}
            <h2>Total : {calculateTotal(cartItems).toFixed(2)}€</h2>
        </Wrapper>
    )
}