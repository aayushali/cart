import React from 'react';

class CartItem extends React.Component {

    increaseQuantity = () => {
       /* This is form 1
       if we don't require previous state then we use this below component
       this.setState({
            qty: this.state.qty + 1
        })*/

        // Can be written like this too
        // calling setState basically re renders our component
        // if we require prev state then we use this below component of setState
        this.setState((prevState) => {
          return {  qty: prevState.qty + 1  }
        });
    }

    decreaseQuantity = () => {
        this.setState((prevState)=> {
            if (prevState.qty === 1) {
                return ;
            }
                return {
                    qty: prevState.qty - 1
                }

        });
    }
    render(){
        const { price, title, qty} = this.props.product;
        console.log(this.props);
        return (
        <div className="cart-item">
            <div className="left-block">
                <img src="" alt="" style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div  style={{color:'#777'}}> Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons */}
                    <img src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="increase" className="action-icons" onClick={this.increaseQuantity} />
                    <img src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="decrease" className="action-icons" onClick={this.decreaseQuantity} />
                    <img src="https://image.flaticon.com/icons/png/512/1214/1214428.png" alt="delete" className="action-icons"/>
                </div>
            </div>
        </div>
            );
    }
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