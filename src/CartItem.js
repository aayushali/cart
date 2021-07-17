import React from 'react';

const CartItem = (props) => {
    const {price, title, qty} = props.product;
    const {product, onIncreaseQuantity, onDecreaseQuantity, onDelete} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src="" alt="" style={styles.image}/>
            </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{color: '#777'}}> Rs {price}</div>
                <div style={{color: '#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="increase"
                         className="action-icons" onClick={() => onIncreaseQuantity(product)}/>
                    <img src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="decrease"
                         className="action-icons" onClick={() => onDecreaseQuantity(product)}/>
                    <img src="https://image.flaticon.com/icons/png/512/1214/1214428.png" alt="delete"
                         className="action-icons" onClick={() => onDelete(product.id)}/>
                </div>
            </div>
        </div>
    );
}
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
};
export default CartItem;