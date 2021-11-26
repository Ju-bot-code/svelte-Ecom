import { derived, writable } from 'svelte/store';
// import localCart from '../localCart';


// const cart=writable([...localCart]);
const cart=writable(getStorage());

export const storeTotal=derived(cart,($cart)=>{
    $cart.reduce((total,item)=>{
       return (total += item.price *item.amount);
   },0)
})


const toggleAmount = (id, items, action) => {
    return items.map(item => {
      let newAmount;
      if (action === "inc") {
        newAmount = item.amount + 1;
      } else if (action === "dec") {
        newAmount = item.amount - 1;
      } else {
        newAmount = item.amount;
      }
      return item.id === id ? { ...item, amount: newAmount } : { ...item };
    });
  };

export const remove= (items ,id) =>{
    return items.filter(item=> item.id !== id);
}

//global functions




export const removeItem = id =>{
    cart.update(values =>{
       return remove(values ,id);
    })
}

export const increaseAmount = id => {
    cart.update(storeValue => {
      return toggleAmount(id, storeValue, "inc");
    });
  };

export const decreaseAmount=id=>{
    cart.update(values=>{
        let cart ;
        cart=values.find(item=> item.id === id);
        if(cart.amount == 1){
        return  remove(values,id);
        
        }else{
        return toggleAmount(id,values,"dec")
        }
      
    })
}

//add to cart 

export const addToCart=(product)=>{

  console.log(product);

  cart.update(cartVales =>{
      const {id,image,price,title}=product;
      let item =cartVales.find(i => i.id === id);
      let cart;
      if(item){
        cart=toggleAmount(id,cartVales,'inc');
      }else{
        let newItem={id,image,price,amount:1,title};
        cart =[...cartVales,newItem];
      }
      return cart;
  })

}


export function setStorageCart(cartValues)
{
    localStorage.setItem('cart',JSON.stringify(cartValues));

    // Syntax for SAVING data to localStorage:
    // localStorage.setItem("key", "value");
}


function getStorage(){
    return localStorage.getItem("cart") 
    ? JSON.parse(localStorage.getItem("cart"))
    : []; 

    // Syntax for READING data from localStorage:
    // var lastname = localStorage.getItem("key");
}


export default cart;