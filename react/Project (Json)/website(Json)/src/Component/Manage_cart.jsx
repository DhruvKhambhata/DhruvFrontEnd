import React,{useState,useEffect} from 'react'
import {Link , useParams , useNavigate} from 'react-router-dom'
import swal from 'sweetalert';

function Manage_cart() {

    const [allProduct,SetallProduct]=useState([]);

  useEffect(()=>{
    viewProducts()
  },[]);

      
  function viewProducts(){
       
      fetch('https://websiteecom-355b6-default-rtdb.firebaseio.com/Cart.json')
        .then((response) => response.json())
        .then((data) => 
        SetallProduct(data),
        );  
       
    }

    
    function handelDelete(id){
      let ans = swal({
        title: "Are you sure?",
        text: "You want remove the item ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://websiteecom-355b6-default-rtdb.firebaseio.com/Cart/${id}.json`, {
            method: 'DELETE',
          });
          swal("Item was removed", {
            icon: "success",
          });
          viewProducts();
        } else {
          swal("Your item is not removed");
          viewProducts();
        }
      });
       
      }
  
  return (
    <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Total</th>
        <th />
      </tr>
    </thead>
    
    <>
    <tbody>
      <p id='null'></p>
    {
             Object.keys(allProduct).map((item,index)=>{
              const {title,file,main_price}=allProduct[item];  
              return(
    
      
      <tr>
        <td className="product__cart__item">
          <div className="product__cart__item__pic">
            <img src={file} alt />
          </div>
          <div className="product__cart__item__text">
            <h6>{title}</h6>
          </div>
        </td>
        <td className="quantity__item">
          <div className="quantity">
            <div className="pro-qty-2">
              <input type="text" defaultValue={1} />
            </div>
          </div>
        </td>
        <td className="cart__price">{main_price}</td>
        <td >
          <button className="cart__close btn" onClick={()=>handelDelete(item)}>
            
            <i className="fa fa-close" />
            
          </button>
          </td>
      </tr>
      
             )})}
    </tbody>
    
    </>
          
  </table>

  
  )
}

export default Manage_cart