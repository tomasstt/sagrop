<template>
    <div>
        <div class="blue1">
    <section class="blue2"><h1 class="">Cennik </h1></section>
    
    <aside class="blue3"></aside>
    <aside class="blue4"></aside>
    
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>

.blue1 {
    display: row;
    width: 100%;
    
    color: rgb(0, 0, 0);
    padding-top: 2.5cm;
   
  }
  
  .blue2 {
    height: 300px;
    width: 45%;
    display: table-cell;
  padding-left: 30px;
  font-family:'Recia' ;
    font-size: 48px;
    font-weight: 600;

  }

  /* .blue22{

    height: 300px;
    width: 30%;
    display: table-cell;
    padding-left: 20px;
    font-size: 48px;

  } */

  .blue2 h2 {
    color: #2C3714;
  font-size: 38px;
    
  }
  
  .blue3 {
    height: 300px;
    width: 30%;
    display: table-cell;
    padding-right: 1cm;
    font-weight: 300;
    line-height: normal;
letter-spacing: 0.225px;



    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 3em;
  }
  .blue4 {
    height: 300px;
    width: 30%;
    display: table-cell;
  padding-right: 30px;
    font-size: 3em;
    padding-top: 2cm;
    line-height: normal;
    font-weight: 300;
    font-family: 'Plus Jakarta Sans', sans-serif;
letter-spacing: 0.225px;

  }

  @media (max-width: 2000px){
    
    .blue2 {
        height: 300px;
        width: 45%;
        display: table-cell;
        padding-left: 30px;
    
        font-size: 38px;
      }
   
      
      
      .blue3 {
        height: 300px;
        width: 30%;
        display: table-cell;
        padding-left: 10px;
        font-size: 20px;
      }
      .blue4 {
        height: 100px;
        width: 40%;
        padding-bottom: 200px;
        display: table-cell;
        padding-right: 30px;
        font-size: 20px;


    
      }


      
    
  }

  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


  @media (max-width: 1410px){
    .blue2 {
      display: block;
      height: 200px;
      width: 90%;
      font-size: 5em;
  
      
    }
    
    
    .blue3 {
      display: block;
      height: 150px;
      width: 90%;
      padding-left: 20px;
      padding-top: 30px;
      font-size: 30px;
      
    }
    .blue4 {
      
        padding-left: 20px;
        font-size: 30px;
        
      }
  
    }

    
  @media (max-width: 1000px){
  
   br {
    display: none;
  }

    .blue1{
       display: block;
       
    }
    .blue2 {
      display: block;
      height: auto;
      width: auto;
      font-size: 23px;
      
      padding-left: 16px;
    }
    
    .blue3 {
      display: block;
      height: auto;
      width: auto;
      font-size: 20px;
      padding-left: 16px;
      
      
    }
    .blue4 {
        display: block;
        height: auto;
        width: auto;
        font-size: 20px;
        padding-left: 16px;
        padding-top: 20px;
      }

   
  }



</style>