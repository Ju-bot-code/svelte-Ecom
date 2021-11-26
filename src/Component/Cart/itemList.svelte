<script>
    import Item from './item.svelte';
    import cart,{storeTotal, removeItem,setStorageCart} from '../../Stores/Cart';
    import {fly} from 'svelte/transition';
    import {flip} from 'svelte/animate';
    import {afterUpdate} from 'svelte'

    $: totalItem =$cart.reduce((total,item)=>{
                
                return (total += item.price *item.amount);
           },0)
    $:console.log($storeTotal);

    afterUpdate(()=>{
        setStorageCart($cart);
    })

</script>

<section class="">
    <article >
            {#each $cart as item ,i(item.id)}
                  <div in:fly={{delay:(i+1)*500 ,x:100}}
                   out:fly={{x:-100}} 
                    animate:flip>
                      <Item {...item} />
                  </div>  
            {:else}
                 <p>no items </p>
            {/each}

    </article>
    <h3 style="text-align:center;">Total: ${totalItem.toFixed(2)}</h3>
</section>
