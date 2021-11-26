<script>
    import CartButton from '../Cart/cartButton.svelte'
    import {link} from 'svelte-routing'
    import links from '../../Constants/links';
    import LoginLink from '../LoginLink.svelte'
</script>

<nav class="navbar">
    <div class="nav-container">
        <div class="nav-center">
            <!-- navlinks -->
            <ul class="nav-links">
                    {#each links as navlink}
                    <li>
                        <a href="{navlink.url}" use:link>{navlink.text}</a>
                        </li>
                    {/each}
            </ul>
            <!-- nav logo -->
            <a href="/" use:link class="nav-logo big-logo">
                <img src="/assets/images/logo.svg" alt="logo">
            </a>
            <!-- cart button -->
                <div class="nav-aside">
                    <LoginLink/>
                    <CartButton/>
                </div>
        </div>
    </div>
</nav>