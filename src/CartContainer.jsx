import React from 'react';
import CartItem from './CartItem';
import cartItems from './data';



const CartContainer = () => {
  const cartArray = [...cartItems];
  
  if(cartArray.length === 0) {
    return (
      <section className='cart'>
       <header>
        <h2>your bag</h2>
        <h4 className='empty-cart'>Is currently empty</h4>
       </header>
      </section>  
    );
  }
    return (
    <section className='cart'>
      <header>
      <h2>Your bag</h2>   
     </header>  
      <div>
        {cartArray.map((item) => {
            return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>$10</span>
            </h5>  
        </div>
        <button className='btn btn-hipster' onClick={() => console.log('clear cart')}>
            clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer;