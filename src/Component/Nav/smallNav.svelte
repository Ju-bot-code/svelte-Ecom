<script>
import {link} from "svelte-routing";
import CartButton from '../Cart/cartButton.svelte'
import globalStore from '../../Stores/globalStore';

let openSidebar=globalStore.ToggleItem;
</script>
<nav class="navbar">
    <div class="nav-center">
        <!-- sidebar toggle -->
        <button on:click="{
            ()=>{
                openSidebar('sidebar',true)
            }
        }"
             class="btn-sidebar-toggle">
            <i class="fas fa-bars" />
        </button>
        <!-- logo -->
        <a href="/" use:link class="nav-logo">
            <img src="/assets/images/logo.svg" alt="logo">
        </a>
        <!-- cart -->
        <CartButton/>
       
    </div>
</nav>
