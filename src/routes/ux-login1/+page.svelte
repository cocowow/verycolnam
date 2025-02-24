<script>
    import { onMount } from "svelte";
    let lettersString = "ABCDEFGHIJKLMNOPQRSTVWXYZ<".split("");
    let letters = [];
    let username = "";
    let png = "thum.png"
    let isPopupOpen = false;
    let pop_pos = []
    

    function randomizeLetter(letter){
        let left;
        let top;

        left = Math.random()*95
        top = Math.random()*60

        return {letter:letter,left:left,top:top}
    }
    function randomizeLetters(){
        letters = [];
        for(let letter of lettersString){
            letters.push(randomizeLetter(letter))
        }
        
    }
    onMount(()=>{
        randomizeLetters()
        console.log(letters)
        setInterval(()=>{
            randomizeLetters()
        },8000)
    })
    onMount(()=>{
        togglePopup()
        setInterval(()=>{
            togglePopup()},100000)}
)
    function addLetter(letter,i){
        // remove last letter
        if(letter === "<"){
            username = username.substring(0,username.length-1)
            return
        }
        username += letter;
        letters[i] = randomizeLetter(letter)
        
        letters = letters;  

    }
    function morePopop(){

    }
    
function togglePopup() {
   
  
    isPopupOpen = !isPopupOpen; 
    let left = Math.random()*100
    let top = Math.random()*70



    pop_pos.push({left:left,top:top})

    pop_pos=pop_pos
}
function hidePopup(){
    
}
</script>

<main>
    {#each pop_pos as {left,top} }
        <div class="popup" style="left:{left}%; top:{top}%;" >
            <h2>Do you like popups?</h2>
        <p><img src={png}></p>
            <button on:click={togglePopup}>Yes!!! give me more!!!!</button>
            <br>
            <button class="close" on:click={hidePopup}>close</button>
        </div>
     {/each}

     

<div class="container">
    {#each letters as {letter,top,left},i}
        <button class="clic" on:click={()=>addLetter(letter,i)} style="top:{top}%; left:{left}%;">
            {letter}
        </button>
    {/each}
</div>
<div class="signup">
    <h1>
        Sign up
    </h1>
    <br>
    <button class="login">
        Enter your name: {username}
    </button>
    <button class="o" on:click={()=>{alert(username!=""?"welcome "+username:"writeurname")}}>
          ""
    </button>
    <h3>Press above to continue</h3>
</div>

</main>

<style>
    .o{
        background-color: aliceblue;
        opacity: 0%;
        font-size: 1px;
    }
    .container{
        display: grid;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        animation: example 3000ms ease-out;
        animation-iteration-count: infinite;
    }
    .clic{
        background-color: rgb(243, 233, 208);
        position:absolute;
        color: black;
        
    }
    .signup{
        z-index: 2;
        position: relative;
        background-color: rgba(251, 163, 203, 0.704);
        height: 50vh;
        width: 20vw;
        display: flex;
        flex-direction: column;
        justify-self: center;
        align-content: center;
        padding: 30px;
        border-radius: 20px;
        top: 130px;
    }
    h1{
        align-self: center;
        font-size: 60px;
    }
    h3{
        font-size: 10px;
        align-self: center;
    }
    .login{
        align-self: flex-start;
        margin: 30px;
        background-color: whitesmoke;
        color: black;
        border-radius: 5px;
    }
    .popup {
        display: block;
        justify-items: center;
        text-align: center;
        background-color: rgb(250, 246, 246);
        border-style: inset;
        border-style: inset;
        border-color: rgb(221, 212, 212);
        padding: 20px;
        position: fixed;
        width: 200px;
        color: black;
        z-index: 2;
        animation: pupp 3000ms ease-in;
        
    }
    .close{
        font-size: 5px;
        color: rgb(213, 215, 216);
    }
    
    @keyframes example {
        0%   {top:0px;}
        100% {top:300px;}
        }
    @keyframes cvcolor {
        0%   {background-color: rgba(255, 255, 0, 0.241) ;}
        25%  {background-color: rgba(255, 0, 0, 0.377);}
        50%  {background-color: rgba(0, 0, 255, 0.485);}
        75%  {background-color: rgba(172, 255, 47, 0.248);}
        100% {background-color: rgba(137, 43, 226, 0.4); }
        }
    main{
        animation: cvcolor 2000ms ease-in-out;
        animation-iteration-count: infinite;
        height: 100vh;
    }
    @keyframes pupp{
        0%  {opacity: 0%;}
        50% {opacity: 100%;}

    }
    @keyframes poof{
        0% {opacity: 100%;}
        100% {opacity: 0%;}
    }
    .disappear{
        animation: poof 2000ms ease-in;
    }
</style>