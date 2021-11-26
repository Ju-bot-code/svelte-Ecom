<script>
    import Loading from "../Component/Loading.svelte";
    import Products from '../Stores/defaultProducts'; 
    import {link} from 'svelte-routing';
    import golbalStore from '../Stores/globalStore'
    import {addToCart} from '../Stores/Cart'

    export let id;
    let openCart=golbalStore.ToggleItem;



    $:product=$Products.find(items => items.id === parseInt(id));
    

</script>
<svelte:head>
    <title>{product ? product.title : 'product'}</title>
</svelte:head>

{#if !product}
<Loading/>
{:else}

    <section class="single-product">
        <a href="/products" use:link class="btn btn-primary">Back to products</a>
       
        <div class="single-product-container">
            <article class="single-product-image">
                <img src="{product.image}" alt="{product.title}">
            </article>
            <article>
                <h1>{product.title}</h1>
                <h2>${product.price}</h2>
                <p>{product.description}</p>
                <button class="btn-primary btn-block"
                    on:click={()=> {
                        addToCart(product);
                        openCart('cart',true);
                    }}>
                    Add to Cart
                </button>
            </article>
        </div>
    </section>

{/if}

<!-- <style>
    .cover{
        padding: 80px;
    }
</style> -->
