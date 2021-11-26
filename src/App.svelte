<script>
import ProductTemplate from "./Pages/ProductTemplate.svelte"; 
import Product from './Pages/Products.svelte'
import Checkout from "./Pages/Checkout.svelte";
import Login from './Pages/Login.svelte'
import About from "./Pages/About.svelte";
import Home from "./Pages/Home.svelte";
import {Router,Route,Link} from "svelte-routing";

//components
import Navbar from './Component/Nav/Navbar.svelte'
import Sidebar from './Component/Nav/sidebar.svelte'
import Cart from './Component/Cart/sideCart.svelte'

//store 

import globalStore from './Stores/globalStore'



</script>

<!-- <main>
	<h1>Hello</h1>
</main> -->
<Router>
	<Navbar/>

	
	{#if $globalStore.sidebar}
	<Sidebar/>
	{/if}	


	{#if $globalStore.cart}
	<Cart/>
	{/if}

	

	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Product} />
	<Route path="/products/:id" component={ProductTemplate} />

</Router>


