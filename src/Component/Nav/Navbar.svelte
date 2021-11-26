<script>
    import SmallNav  from './smallNav.svelte';
    import BigNav  from './BigNav.svelte';
    import globalStore from '../../Stores/globalStore'


    let screenWidth;

    $: if(screenWidth > 992)
    {
        globalStore.ToggleItem('sidebar',false);
    }
</script>


<svelte:window bind:innerWidth={screenWidth} />
{#if screenWidth > 992}
<BigNav/>
{:else}
<SmallNav />
{/if}
<!-- <nav class="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
    
</nav> -->