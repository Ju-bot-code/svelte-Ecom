<script>
    import globalStore from  "../../Stores/globalStore";
    import {fly,fade,blur} from "svelte/transition";
    import {link} from "svelte-routing";
    import CartList from './itemList.svelte';
    import user from '../../Stores/user'
    // let user =false;
</script>


<div class="cart-overlay" transition:blur>
    <div class="cart-container" transition:fly={{x:100}}>
        <div class="cart" transition:fade={{delay:400}}>
            <!-- cart header -->
            <div class="cart-header">
                <button class="btn-close" on:click="{()=>{
                        globalStore.ToggleItem('cart',false)
                    }}">
                    <i class=" fas fa-window-close"></i>
                </button>
                <h2 class="cart-title">
                    your bag
                    <span></span>
                </h2>
            </div>

            <!-- cart Items -->
                <CartList />
            

            <!-- cart footer -->
            <div class="cart-footer">
                {#if $user.jwt}
                  <a href="/checkout"
                    on:click={()=>{
                          globalStore.ToggleItem('cart',false)  
                    }} 
                   use:link class="btn btn-primary btn-block">
                    Checkout 
                  </a>
                {:else}
                  <p class="cart-login">
                      in order to checkout please
                      <a href="/login" use:link >
                        Login
                      </a>
                  </p>
                {/if}
            </div>

        </div>
    </div>
   
</div>