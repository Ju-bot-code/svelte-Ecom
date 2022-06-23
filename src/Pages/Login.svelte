<script>
import { element } from 'svelte/internal';

    import loginUser from '../Strapi/loginUser';
    import registerUser from '../Strapi/registerUser';

    let email='';
    let password='';
    let username='Default user';
    let isMember=true;

    $:isEmpty= !email || !password || !username;

    function ToggleMember(){
        isMember = ! isMember;

        if(!isMember){
            username='';  
        }else{
            username='Default user';
        }
    }

    async function handleSubmit()
    {
       let user;

       if(isMember){
           loginUser();
       }else{
            registerUser();
       }
    }

</script>

<section class="form">
    <h2 class="section-title">
        {#if isMember} Sign-in {:else} Register {/if}
    </h2>

    <form class="login-form" on:submit|preventDefault="{handleSubmit}">
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" bind:value={email}>
        </div>

        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" bind:value={password}>
        </div>

        {#if !isMember}
        <div class="form-control">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" bind:value={username}>
        </div>
        {/if}

        {#if isEmpty}
        <p class="form-empty">Please fill out all form feilds</p>
        {/if}

        <button type="submit" class:disabled={isEmpty}
         disabled={isEmpty} class="btn btn-block btn-primary">
         submit
        </button>

        {#if isMember}
            <p class="register-link">need to register ?
                <button type="button" class="btn" on:click={ToggleMember}>click here</button>
            </p>
        {:else}
            <p class="register-link">already a member ?
                <button type="button" on:click={ToggleMember}>click here</button>
            </p>
        {/if}

    </form>
</section>