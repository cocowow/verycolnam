<script>
    let bild = "memory1.png"
    let bild2 = "memory2.png"
    let bild3 = "memory3.png"
    let bild4 = "memory4.png"
    let bild5 = "memory5.png"
    let bild6 = "memory6.png"
    let bilder = [bild, bild2, bild3, bild4, bild5,bild6]
    let cards = []
    for (let i = 0; i < 12; i++){
        cards.push({flipped:false,matched:false,image:bilder[i%6]})
    }
    let bluepoint = 0;
    let redpoint = 0;
    let blueTurn = true;
    let flipCount = 0;


        cards.sort(() => Math.random() - 0.5);
    function cardflipped(card){
        if(flipCount < 2 && !card.flipped){
            flipCount++

            card.flipped = true
            if(flipCount == 2){
                let flippedCards = cards.filter(card => card.flipped==true && card.matched == false)
                console.log(flippedCards)
                if(flippedCards[0].image == flippedCards[1].image){
                    flippedCards[0].matched = true
                    flippedCards[1].matched = true
                
                    if(blueTurn){
                        bluepoint++
                    }
                    else{
                        redpoint++
                    }
                }
                setTimeout(() => {
                        cards.forEach((card) => {
                            card.flipped = card.matched;
                        });
                        flipCount = 0;
                        cards = cards;
                        }, 500);
                    
            }
        }
        if(flipCount == 2 ){
            blueTurn = !blueTurn
            flipCount = 0
        }
            
            cards = cards
    }
</script>


<center>Memory</center>
<main>
    <div class= "grid-container"> 
        {#each cards as card}
            <div class = "card" on:click={() =>cardflipped(card)} class:flipped = { card.flipped }>
                <img src={card.image} alt="" class = "front">
                <img src="https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg" alt="" class = "back">
            </div>
        {/each}
    </div>
</main>

<aside>
    <p>
        {redpoint}
    </p>
</aside>
<aside class = "blue">
    <p>
        {bluepoint}
    </p>
</aside>

<aside class = "turn" class:blue= { blueTurn }> </aside>
 
<style>
    .grid-container{
        display: grid;
        grid-template-columns: repeat(4,100px);
        grid-template-rows: repeat(3,100px);
        justify-content: center;
    }
    .card{
        border: black solid 1px;
        position: relative;
        margin: 4px;
        border-radius: 5px;
        backface-visibility: hidden;
        transition: transform 0.5s;
    }
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        border-radius: 5px;
    }
    
    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    p{
        font-size: 30px;
    }
    .blue{
        background-color: blue;
        left: 10px;
    }
    .turn{
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
        
    }
    .front{
        transform: rotateY(180deg);
    }
    .flipped{
        transform: rotateY(180deg);
        transform-style: preserve-3d;
    }                    

</style>