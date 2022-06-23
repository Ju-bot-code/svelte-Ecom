<script>

    import {FeaturedStore} from '../../Stores/Products'; 
    import Prod from '../Product/Product.svelte';
    import Loading from '../Loading.svelte';

    export let title ='';  

  
</script>


{#if $FeaturedStore.length === 0}
<Loading/>

{:else}
<h1 class="center">{title}</h1>
<section class="section">
    <div class="products-center">
        {#each $FeaturedStore as data}
            <Prod  product={data} />
        {/each}
    </div>
</section>
{/if}

<style>
    .center{
        text-align: center;
        margin: 20px;
    }
</style>