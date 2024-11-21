<script>
	import { base } from "$app/paths";

    let color = "black";
    let namn
    let email
    let password
    let colors = [{namn: "Blå", value: "PowderBlue"},{namn: "Violett", value: "violet"},{namn: "gul", value: "yellow"},{namn: "rosa", value: "Pink"},{namn: "Lax", value: "Salmon"}]
    function handleSubmit(){
        alert("Välkommen!")
    }
</script>

<main>

<div class = "container">
    <h1>Registrering</h1>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"> </div> 
<form action="" on:submit|preventDefault={handleSubmit}>          
    <label for="name">Namn:</label>
    <input type="text" id="name" bind:value={namn}>
    <label for="email">giveme email:</label>
    <input type="email" id="email" bind:value={email}>
    <label for="password">Password pls😇:</label>
    <input type="password" id="password" bind:value={password}>
    <label for = "favoritfärg">What's your favourite color?</label>
    <select id = "favoritfärg" bind:value={color}>
        {#each colors as c}
            <option value={c.value}>{c.namn}</option>
        {/each}
    </select>
    <br>
    <br>
    <input type="submit" value="Register here..." class= "knapp">
    <br>
    <br>
    <h2>Har du redan ett konto? <div class = "wrapthing"><a href = "{base}/login">Logga in</a></div> </h2>

</form > 
</div>

</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        
    }
    
    .container{
        display: flex;
        border: solid 5px rgb(240, 190, 216);
        border-radius: 10px;
        width: 29%;
        height: 90%;
        background-color: rgb(255, 246, 251);
        margin: auto;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        min-width: 300px;
        min-height: 500px;
        } 
    .knapp{
        border-radius: 5px;
        border: solid 2px rgb(46, 27, 34);
        background-color: rgb(246, 200, 222);
        font-family:  'Arial Narrow Bold';
        
    }
    .wrapthing:hover{
        text-decoration: underline;
    }
</style>
