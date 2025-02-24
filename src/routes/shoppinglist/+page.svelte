
<script>

    let varor = [];
    let vara = "";

    function itemSubmit(){
        if(vara == ""){
            return;
        }
        let new_vara = {namn: vara, bought: false};
        varor.push(new_vara)
        vara = "";
        varor = varor
    }

    function itembought(vara){
        vara.bought = true
        varor = varor
    }
    function item_not_bought(){
        vara.bought = false
        varor = varor
    }
    function item_delete(index){
        varor.splice(index,1)
        varor = varor
    }
</script>


<div class = backgr>
<main class = "container">
 <h1>Shoppinglist</h1>
 <div class = "categories_container"> 
    <section>
        <h2>Varor att köpa</h2>
        <ul>
            {#each varor as vara}
            {#if vara.bought == false}
            <li>
                <form on:submit|preventDefault={()=>itembought(vara)}>
                  {vara.namn} 
                  <input type = "submit" value = "köpt" class="knapp">
                </form>
            </li>
            {/if}
            {/each}
            
        </ul>
    </section>
    <section>
        <h2>Köpta varor</h2>
        <ul>
            {#each varor as vara, index}
            {#if vara.bought == true}
            <li>
                <form on:submit|preventDefault={() => item_not_bought(vara)}>
                  {vara.namn} 
                  
                  <button type="button" on:click={()=>item_delete(index)}>Tabort</button>
                </form>
            </li>
            {/if}
            {/each}
        </ul>
    </section>
</div>
<form on:submit|preventDefault={itemSubmit}>
    <label for="vara">Vara</label>
    <input type="text" id= "vara" bind:value={vara}>
    <input type="submit" value="Lägg till" class="button">
</form>
</main>
</div>

<style>
.backgr{
    background-image: url(https://www.diverge-sneakers.com/cdn/shop/products/canvas_sage-green_736x.png?v=1653391760);
    background-size: cover;
    height: 100vh;
    align-content: center;
  }

.container{
    background-color: rgb(249, 144, 144);
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 8fr 1fr;
    justify-self: center;
    align-self: center;
    color: black


}
.categories_container{
    height: 100%;
    background-color: snow;
    width: 97%;
    justify-self: center;
    border-radius: 6px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
}
h1{
    background-color: rgba(255, 250, 250, 0.686);
    height: 60%;
    align-self: center;
    width: 13%;
    border-radius: 10px;
    justify-self: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: larger;
}
.container h1{
    align-content: center;
    justify-items: center;
    text-align: center;
    color: #f3a69f;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgba(235, 89, 89, 0.725);
}
section{
    width: 100%;
    height: 100%;
    color: black;
    
}
h2{
    background-color: rgba(255, 255, 255, 0.759);
    text-align: center;
    padding-top: 1vh;
    padding-bottom: 1vh;
    font-size: 2.2vh;
}
.categories_container section:nth-child(even){  
    background-color: rgba(247, 144, 143, 0.1) 
  }
 
  .categories_container section:nth-child(odd){ 
    background-color: rgba(179, 233, 193, 0.3)
  }
ul{
    list-style-position: inside;
    padding-left: 0.3vw;
}
.button{
    background-color: aqua;
}
.knapp{
    background-color: rgb(244, 187, 232);
    border-radius: 5px;
}

       
</style>