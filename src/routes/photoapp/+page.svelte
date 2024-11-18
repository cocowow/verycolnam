<script>
let image = "cat!!.jpg"
let photo = "bloheöycat.png"
let picture = "slococat.jpg"
</script> 


<h1>Kitties</h1>
<div class = "photos">
    <div class="image-wrapper">
        <img src={image} alt="bleh">
    </div>
    <div class="image-wrapper">
        <img src={photo} alt = "cat">
    </div>
    <div class="image-wrapper">
        <img src={picture} alt = "kitty!!">
    </div>
</div>


<style>
    .photos{
        display:flex;
        max-width: 80vw;
        overflow: hidden;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: auto;
        flex-basis: 300px;
        
    }
    .photos img{
        width: 80%;
        align-items: center;       
        
    }
    .image-wrapper img{
        width: 80%;
        flex-grow: 1;
        border-radius: 15px;
        box-shadow: 6px 9px 0px rgba(242, 83, 194, 0.296);
        min-width: 300px;
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
        margin: 10px;
        color: hotpink;
        margin-bottom: 60px;
    }
</style>