<script>
    import links from "../../Constants/links"
    import { link } from "svelte-routing"
    import globalStore from "../../Stores/globalStore"
    import {fly,fade} from "svelte/transition";
    import LoginLink from '../LoginLink.svelte'

    let closeSidebar=globalStore.ToggleItem;
</script>

<div class="sidebar-container" transition:fly={{x:-1000}}>
    <div class="sidebar" transition:fade={{delay:400}}>
        <div class="sidebar-header">
            <!-- close -->
            <button class="btn-close" 
                on:click="{()=>
                {
                    closeSidebar('sidebar',false)
                }}">
                <i class="fas fa-window-close"></i>
            </button>
            
        </div>
        <!-- logo -->
        <img src="/assets/images/logo.svg" class="logo sidebar-logo" alt="logo">
        <!-- links -->
        <ul class="sidebar-links">
            {#each links as sidebar}
            <li>
                <a  on:click="{()=>
                    {
                        closeSidebar('sidebar',false)
                    }}"
                     href="{sidebar.url}"
                    use:link>{sidebar.text}</a>
            </li>
            {/each}
            <li>
                <LoginLink/>
            </li>
        </ul>
    </div>
</div>