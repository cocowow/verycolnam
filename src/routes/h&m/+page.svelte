<script>
    import { base } from "$app/paths";
    let dumrock = "dumrcok.jpg"
    let r1 = "flouritee.jpg"
    let r2 = "apatite.jpg"
    let r3 = "limestone.jpg"
    let r4 = "rosequartz.jpg"
    let r5 = "diamond.jpeg"
    let cart = "cart!!!!.jpg"
    let rocks = [{name:"DUmbrock", img: dumrock,price: 7000, info:"wonderful and totally worth the price"},{name:"Fluorite",img: r1,price:20, info: "Beautiful fluorite!!!"},
    {name:"Apatite",img: r2,price:120, info: "this is nice rook"} ,{name:"Limestone",img: r3,price:50, info:"CaCO3"},
    {name:"Rose Quartz",img: r4,price:500, info: "It's pink"},{name:"Diamond",img: r5,price:527, info:"very sparklish"},]
    let carts = []

    let showCart = false;

    function boughtMineral(rockName, rockPrice) {
        let roockPrice = rockPrice * 0.1 + rockPrice * 0.05 + rockPrice
        alert(`Thank you for buying ${rockName} for ${roockPrice} €! We charged extra for shipping and rock tax!`);
    }

    function toggleCart(){
        showCart = !showCart
        if (showInfo = true){
            showInfo = false
        }
    }
    function addToCart(item){
        const existingItem = carts.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            carts = [...carts, { ...item, quantity: 1 }];
        }
        carts = carts;
    }
    function giveMore(item) {
        item.quantity += 1;
        carts = carts; 
    }
    function lessItem(item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            carts = carts.filter((cartItem) => cartItem.name !== item.name);
        }
        carts = carts;
    }
    
    $: totalAmount = carts.reduce((total, item) => total + item.price * item.quantity, 0);
    $: shipping = totalAmount * 0.1
    $: rockTax = totalAmount * 0.05
    $: actualPrice = totalAmount + shipping + rockTax

    function finallyDone(totalPrice){
        if(totalPrice <= 0){
            alert("Add some rocks to your cart pls")
        }
        else{
            alert(`Yay you spent ${totalPrice} € on our rocks!`)
        }
        
    }
</script>

<main>

    <div class="home" >
        <div>
            <button on:click={toggleCart} class="cart"><img src="{cart}" alt="cart" class="cart"></button>
            <h1>H&M</h1>
        </div>
        <div class="rocks" class:shift-left={showCart}>

            {#each rocks as vara}
            <div class="rooock">
                <img src={vara.img} alt=" rook">
                <h2>{vara.name}</h2>
                <p>{vara.info}</p>
                <p>{vara.price} €</p>
                <div class="bluebutt"><button on:click={() => boughtMineral(vara.name, vara.price)}>Buy</button> <button on:click={() => addToCart(vara)}>Add to cart</button></div>
            </div>
            
            {/each}
            
        </div>
    </div>
    <div class="carttt" class:visible={showCart}>
        
        <h3>Cart</h3>
            {#each carts as item}
                <div class="cartItem">
                    <img src={item.img} alt={item.name} width="50">
                    {item.name} - {item.price} €
                    <div class="moreless">
                        <button on:click={() => lessItem(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button on:click={() => giveMore(item)}>+</button>
                    </div>
                </div>
            {/each}
            
            <div class="total-amount">
                <p><strong>Products:</strong> {totalAmount.toFixed(2)} €</p>
                <p><strong>Shipping (10%):</strong> {shipping.toFixed(2)} €</p>
                <p><strong>Rock tax(5%):</strong> {rockTax.toFixed(2)} €</p>
                <p><strong class="tot">Total:</strong> {actualPrice.toFixed(2)} €</p>
            </div>
        <button on:click={() => finallyDone(actualPrice).toFixed(2)} class="done"> Pay for the minerals</button>
    </div>
    

</main>

<style>
    main{
        overflow-x: hidden;
        background: rgb(244, 233, 212) center center no-repeat fixed;
        color: black;
    }
    .total-amount{
        display: flex;
        flex-direction: column;
    }
    strong{
        font-size: small;
    }
    .tot{
        font-size: larger;
    }
    .cartItem img{
        width: 40px;
        height: 40px;
        border-radius: 10%;
        object-fit: cover;
    }
    .cartItem{
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        margin: 10px 0;
        background-color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease; 
        border-radius: 10px;
        color: black;
    }
    .cartItem:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    }
    h3{
        color: black;
        font-size: 50px;
        margin: 10px;
        margin-bottom: 40px;
        
    }
    .carttt{
        height: 100vh;
        width: 25vw; 
        min-width: 300px;
        background-color: rgb(236, 228, 218);
        transition: transform 0.5s ease-in-out;
        position: fixed;
        top: 3%; 
        right: 0; 
        transform: translateX(100%); 
        padding: 20px;
        z-index: 0;
        overflow-y: auto;
        height: 950px;
        border-left: rgba(117, 100, 85, 0.53) solid 3px;
        border-top: rgba(117, 100, 85, 0.53) solid 3px;
        overflow-x: hidden;
        
    }
    .carttt.visible{
        transform: translateX(0);
        right: 0;
    }
   
    .bluebutt{
        display: flex;
        gap: 10px; 
        justify-content: space-between;
        
        border: none;
        border-radius: 25px; 
        font-size: 14px;
        font-weight: bold;

        transition: background-color 0.3s ease, transform 0.2s ease;
    }
    .bluebutt button{
        flex: 1;
        border-radius: 25px;
    }
    .bluebutt button:first-child {
        background: rgb(161, 161, 210);
        color: white;
        margin-right: 50px;
    }

    .bluebutt button:last-child {
        background: rgb(146, 146, 244);
        color: white;
    }
    .bluebutt button:hover {
        transform: scale(1.05); 
        opacity: 0.9; 
    }
    .bluebutt button:active {
        transform: scale(0.95);
    }
    .home{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: black;
    }
    .rocks{
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        width: 70vw;
        flex-direction: row;
        justify-self: center;
        transition: transform 0.5s ease-in-out;
        position: relative;
    }
    
    .rocks.shift-left {
        transform: translateX(-150px);
    }
    .cart{
        display: flex;
        border-radius: 50%;
        width: 5vw;
        right: 0;
        top: 30px;
        margin-right: 30px;
        z-index: +1;
        position: fixed;
        min-width: 60px;
        
    }
    
    h1{
        justify-self: center;
        font-size: 100px;
        margin-bottom: 90px;
        margin-top: 80px;
    }
    .rooock{
        margin: 20px;    
        transition: 600ms; 
        color: black; 
        background-color: white;
        padding: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border-radius: 2%;
        max-width: 20vw;
        max-height: 40vh;
        min-width: 300px;
        min-height: 50px;
        overflow: hidden;
    }
    .rooock:hover{
        transform: scale(1.1);
        
    }
    .rooock img{
        max-height: 60%;
        min-width: 40%;
        max-width: 99%;
        object-fit: cover;
    }
    .moreless {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .moreless button {
        padding: 5px 10px;
        font-size: 16px;
        border: none;
        background-color: #f0f0f0;
        border-radius: 5px;
        transition: background-color 0.2s ease;
    }
    .moreless button:hover {
        background-color: #ddd;
    }
    .moreless span {
        font-size: 16px;
        font-weight: bold;
        color: #333;
    }
    .done{
        font-size: 20px;
        font-weight: bold;
        background-color: rgb(169, 240, 169);
        padding: 10px;
        border-radius: 25px;
        justify-self: center;
    }
</style>