<script>
  import globalStore from '../../Stores/globalStore'
  import  cart from '../../Stores/Cart';

  let openCart=globalStore.ToggleItem;

  $: totalItem =$cart.reduce((total,item)=>{
                
              return total + item.price;
         },0)

</script>



<div class="btn-cart-container">
  <button class="btn-cart-toggle" on:click={()=>{
      openCart('cart',true)
  }}>
      <i class="fas fa-cart-plus" />
  </button>

  <span class="btn-cart-items">{totalItem}</span>
</div>