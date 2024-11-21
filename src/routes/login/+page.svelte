<script>
	import { base } from "$app/paths";

    let color = "black"
    let namn
    let colors = [{namn: "", value: ""},{namn: "Blå", value: "Blue"},{namn: "Lila", value: "purpol"},{namn: "gul", value: "Yellow"},{namn: "rosa", value: "Pink"}]
    function handleSubmit(){
        alert("Välkommen tillbaka")
    }
    
    
</script>

<main>

<div class = "container">
    <h1>Inloggning</h1>
    <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"> </div> 
    
<form action="" on:submit|preventDefault={handleSubmit}>          
    <label for="email">Your email thankyu:</label>
    <input type="email" id="email" >
    <label for="password">Enter password:</label>
    <input type="password" id="password" >
    
    <br>
    <br>
    <input type="submit" value="Login!" class= "knapp">
    <br>
    <br>
    <h2> Don't have an account? <div class = "wrapthing"><a href="{base}/register">Make an account</a></div></h2>

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
        height: 70%;
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
    .wrapthing:hover{
        text-decoration: underline;
    }
</style>
