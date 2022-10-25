import Button from '@mui/material/Button'
import { CartItemType } from "../screens/ProductsScreen"
import { Wrapper } from './CartItemStyles';

type Props = {
    item : CartItemType;
    addToCart : (clickedItem : CartItemType) => void;
    removeFromCart : (id: number) => void;
}

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.title}</h3>
            <div className="informations">
                <p>Prix: {item.price}€</p>
                <p>Total: {(item.amount * item.price).toFixed(2)}€</p>
            </div>
            <div className="buttons">
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.id)}>
                        -
                </Button>
                <p>{item.amount}</p>
                <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}>
                        +
                </Button>
            </div>
        </div>
    </Wrapper>
)
export default CartItem;

