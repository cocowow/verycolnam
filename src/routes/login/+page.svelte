<script>
    let color = "black"
    let colors = [{namn: "", value: ""},{namn: "Blå", value: "Blue"},{namn: "Lila", value: "purpol"},{namn: "gul", value: "Yellow"},{namn: "rosa", value: "Pink"}]
    function handleSubmit(){
        alert("Välkommen!")
    }
    let selectedColor = colors[0].value;
</script>

<main>

<div class = "container">
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"> </div> 
<form action="" on:submit|preventDefault={handleSubmit}>          
    <label for="name">Namn:</label>
    <input type="text" id="name" >
    <label for="email">your email thankyu:</label>
    <input type="email" id="email" >
    <label for="password">Enter password:</label>
    <input type="password" id="password" >
    <label for = "favoritfärg">What's your favourite color?</label>
    <select id = "favoritfärg" bind:value={selectedColor}>
        {#each colors as c}
            <option value={c.value}>{c.namn}</option>
        {/each}
    </select>
    <br>
    <br>
    <input type="submit" value="Login!" class= "knapp">

</form > 
</div>

</main>

<style>
 main{
        background-image: url("https://i.pinimg.com/originals/d1/08/6a/d1086a64fecf583e00daf38fe1e9966c.jpg");
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
        height: 85%;
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
        font-size: larger;
        
    }
</style>
