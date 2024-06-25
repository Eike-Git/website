<template>
    <div class="sliderContainer">
        <div class="sliderRow">
            <div class="sliderCol headerContent">
                    <h1>Headline 1</h1>
                    <h3>The Headline 3</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui dolores 
                        possimus corporis at eos facilis maiores autem. 
                        Magnam libero cum, rem est dignissimos numquam deserunt 
                        accusamus aliquam voluptates unde.
                    </p>
            </div>
            <div class="sliderCol imgContainer">
            </div>
        </div>
    </div>
    
    </template>
        
    <style scoped>
     .sliderContainer {
        padding: 0 0 0 0vw;
        text-align: left;
        color: #fff;
     }
     .sliderRow {
        display: flex;
        flex-wrap: wrap;
     }
     .sliderCol {
        flex: 1 1 300px;
     }
    .headerContent {
        padding: 10vw 3vw 10px 3vw;
    }
     .sliderRow > .imgContainer {
        background-image: url("../assets/Oppenheimer.jpeg");
        height: auto;
        width: 100%;
        min-height: 400px;
        min-width: 300px;
        background-size: cover;
        background-position: center;
        border-radius: 6px;
        box-shadow: 4px 4px 20px 2px #0b0b0b;
        margin: 10vw 20px 0 0;
     }
    
     @media (max-width: 900px) {
        .sliderRow {
          flex-direction: column; 
        }
      }
    </style>
    
    <script>
    
      </script>
    