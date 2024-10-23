<script>
let image = "cat!!.jpg"
let photo = "bloheöycat.png"
let picture = "slococat.jpg"
</script> 


<h1>Kitties</h1>
<div class = "photos">
    <div class="image-wrapper">
        <img src={image} alt="Flexbox egenskaper">
    </div><div class="image-wrapper">
        <img src={photo} alt = "idk">
    </div><div class="image-wrapper">
        <img src={picture} alt = "boo">
    </div>
</div>


<style>
    .photos{
        display:flex;
        max-width: 90vm;
        overflow: hidden;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
        
        
    }
    .photos img{
        width: 50%;
        align-items: center;       
        flex-basis: 300px;
    }
    .image-wrapper img{
        width: 60%;
        flex-grow: 1;
        border-radius: 15px;
        box-shadow: 4px 8px 0px rgba(242, 83, 194, 0.296);
    }
    .image-wrapper{
        flex: 1;
        margin: 10px;
        flex-grow: 1;
    }
    .image-wrapper:hover {
        flex-grow: 1.3;
    }
    .image-wrapper:active { 
        transform: scale(0.9); 
    }
    h1{
        text-align: center;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 40px;
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: black;
        margin: 60px;
        color: hotpink;
    }
</style>