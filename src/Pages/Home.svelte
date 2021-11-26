<script>
    import Hero from "../Component/Hero.svelte";
    import {link} from "svelte-routing"
    import Featured from "../Component/Product/Featured.svelte"
</script>
 
 <Hero>
      <a href="Products" class="btn btn-primary btn-hero" use:link>Shop Now</a>
 </Hero>

 <Featured title='Featured Products' />