<script>

    import Products from '../../Stores/defaultProducts'; 
    export let title ='';  
    import Prod from '../Product/Product.svelte'
    import Loading from '../Loading.svelte'

</script>

<div class="container">

    <h1 class="center">{title}</h1>
    <section class="section">
        
        <div class="products-center">

            {#each $Products as data}
                <Prod  product={data} />
            {:else}
                <Loading/>
            {/each}

        </div>
        
    </section>
</div>

<style>
    .center{
        text-align: center;
        margin-top:20px;
    
    }
    .container{
        padding: 20px;
    }
</style>