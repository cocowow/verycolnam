<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    let botName = "Eliza"
    let userName ="user"
    let isWriting=false
    


    
 async function write(message) {
    
    //Hämta HTML-elementet med id:et visible
    var element = document.getElementById("visible");
    //Ändrar elementets CSS-egenskap display till default
    element.style.display = "flex"; // Visa elementet
            
    if (isWriting) {return}
    chat.push({user : "user", message :message})
    
    chat = chat
    

    isWriting=true

    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    isWriting=false

   

    let response = eliza.transform(message)
    chat.push({user : botName, message :response})
    element.style.display="none";
    chat=chat
    
  }
                
</script>

<main>
    <section class="section">
        {#each chat as message}
        <article class={message.user}>
            <p>
                {message.message}
            </p>
        </article>
        {/each}
        <article id="visible">
            <span class="ball"></span>
            <span class="ball"></span>
            <span class="ball"></span>
        </article>
    </section>

    
<form  method="post"
    use:enhance={({ formElement, formData, action, cancel }) => { cancel(); 
    const text = formData.get("text"); // what does "text" refer to?
    write(text);
    formElement.reset()
    }}>

<input type="text" name="text" class="TextBox" minlength="2" placeholder="SKRIV">
<input type="submit" name="submit">
            
</main>

<style>
   main{
    height: 70vh;
    width: 60vw;
    background-color: rgb(243, 187, 194);
    color: black;
    
   }

.section{
    height: 90%;
    overflow-y: scroll;
    
}
.TextBox{
    width: 85%;
    border-radius: 10px;
    background-color: rgb(251, 233, 245);
    border-color: rgb(222, 103, 147);
   
}
.user{
    background-color: rgba(243, 46, 95, 0.221);
    direction: rtl;
    margin: 10px;
    margin-left: 20vh;
    border-radius: 20px;
}
.Eliza{
    background-color: rgba(249, 230, 235, 0.284);
    margin: 10px;
    margin-right: 20vh;
    border-radius: 20px;
    
}
#visible{
    width: 100px;
    height: 60px;
    display: none;
    justify-content: center;
    align-items: center; 
    flex-direction: row;
    position: absolute;
    bottom: 33%;
    left: 0%;
}
.ball{
    height:25px;
    width:25px;
    background-color: white;
    display: inline-block;
    border-radius: 50%;
    animation:thinkingBall 1000ms ease-in-out;
    animation-iteration-count: infinite;
}
@keyframes thinkingBall {
    0% { transform:scale(1) }
    50% { transform:scale(1.4) }
    100% { transform:scale(1) }
}
.ball:nth-child(1){
    animation-delay:0ms;
}
.ball:nth-child(2){
    animation-delay:333ms;
}
.ball:nth-child(3){
    animation-delay:666ms;
}
</style>