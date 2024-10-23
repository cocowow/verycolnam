
<section>
<main>
  <div class = "text">

    <h1> Yaayy sida </h1>
    <p>wow</p>

  </div>
	
</main>
</section>


<style>
  section{
    width: 100vw;
    height: 100vh;
    margin: 0em;
    background: url(https://i1.sndcdn.com/artworks-zyYqA8D0BdfuyH28-WeeHrw-t1080x1080.jpg) center center no-repeat fixed;
    
  }
  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 20vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
    color: hotpink;
    text-align: start;
    
  }
  h1{
    font-size: 65px;
    margin-top: 50px;
    margin-bottom: 35px;
    
  }
  .text{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 30px;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: black;

    
  }
  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }
  </style>
