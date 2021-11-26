<script>
    import user from "../Stores/user"
    import {link} from "svelte-routing"
    import globalStore from "../Stores/globalStore"

</script>

{#if $user.jwt}

    <a href="/" on:click="{()=>{
        globalStore.ToggleItem('sidebar',false);
    }}" use:link>Logout</a>

{:else}

    <a href="/login" on:click="{()=>{
        globalStore.ToggleItem('sidebar',false);
    }}" use:link>Login</a>
{/if}
