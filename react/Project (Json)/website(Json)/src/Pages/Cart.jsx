import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Manage_cart from '../Component/Manage_cart';

function Cart() {
     return(
<div>
{/* Shopping Cart Section Begin */}
<section className="shopping-cart spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="shopping__cart__table">
          <Manage_cart/>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="continue__btn">
              <Link to="/shop">Continue Shopping</Link>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="continue__btn update__btn">
              <button className='btn btn-dark px-5 py-2 mt-1'>Update Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="cart__discount">
          <h6>Discount codes</h6>
          <form action="#">
            <input type="text" placeholder="Coupon code" />
            <button type="submit">Apply</button>
          </form>
        </div>
        <div className="cart__total">
          <h6>Cart total</h6>
          <ul>
            <li>Subtotal <span></span></li>
            <li>Total <span>$ 169.50</span></li>
          </ul>
          <a href="#" className="primary-btn">Proceed to checkout</a>
        </div>
      </div>
    </div>
  </div>
</section>
         

  {/* Shopping Cart Section End */}
</div>
                        


  )
}

export default Cart