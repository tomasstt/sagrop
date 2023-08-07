<template>
  


  <div >
      <div class="blue1">
          <section class="blue2"><h1 class="">Osivá</h1></section>
          
          <aside class="blue3"><p class="">Kompletné portfólio hybridov kukurice a slnečnice od firiem Pioneer Hi-Bred, Monsanto, Limagrain, Saatbau, KWS, Gabonakutató, Rapool, Syngenta, Kiskun, Martonvásár, …</p></aside>
          <aside class="blue4"><p class="">Najnovší sortiment osív pšenice ozimnej od firiem VP Agro, Saatbau, Gabonakutató, Rapool a Selgen.</p></aside>
          
          </div>
          
    
  </div>


<div class="cont">
  <img class="ob1" src="/images/chemia2.svg" alt="">
  <img class="ob2" src="/images/chemia1.svg" alt="">
</div>
  

<div class="container3">
<div class="right-text3">
<p> Nové trendy pestovateľskej technológie v podobe hybridných osív ozimnej pšenice od firmy Rapool a hybridných osív ozimných jačmeňov od firmy Syngenta.</p>

<p> 
Ponuka osív ozimného jačmeňa a ovsa, jarných odrôd sladovníckeho jačmeňa a ostatných jarín, vrátane medziplodín pre potreby „greeningu“ v samostatných osivách ako aj miešankách podľa potreby.</p>
</div>
</div>
          
          

  <div class="space"> <Footer></Footer></div>
     <!-- <div class="space"> <GreenPart></GreenPart></div> -->
 
</template>

<script>
import GreenPart from "../components/GreenPart.vue"
import Footer from "../components/Footer.vue"
  export default {
    components:{  GreenPart, Footer
        } 

}


        
</script>

<style  scoped>


@media (max-width: 1000px){
.space {
margin-top: 3cm;
}
}
@media (min-width: 1000px){
.space {
  margin-top: 40cm;
}}
@media (min-width: 1000px) and (max-width: 1300px) {
.space {
  margin-top: 40cm;
}
}
@media (min-width: 1410px) and (max-width: 2000px) {

.cont{
  margin-top: -4cm;
}
}

.blue1 {
  display: row;
  width: 100%;
  
  color: rgb(0, 0, 0);
  padding-top: 2.5cm;
 
}

.blue2 {
  height: 300px;
  width: 42.5%;
  display: table-cell;
padding-left: 30px;
  font-size: 50px;
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
  padding-top: 1cm;
  
  display: table-cell;
  padding-right: 1cm;
  color: rgba(35, 25, 10, 0.80);
/* Body text/80% */
font-family: Plus Jakarta Sans;

font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;

  
  font-family: 'Plus Jakarta Sans';
  font-size: 3em;
}
.blue4 {
  height: 300px;
  font-family: 'Plus Jakarta Sans';
  width: 80%;
  display: table-cell;
padding-right: 30px;
  font-size: 3em;
  color: rgba(35, 25, 10, 0.80);
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;

}

@media (max-width: 2000px){
  

  .blue1{

    width: 92%;
  }
  .blue2 {
      height: 300px;
      width: 45%;
      display: table-cell;
      padding-left: 20px;
    
      font-size: 38px;
    }
 
    
    
    .blue3 {
      height: 300px;
      width: 30%;
      display: table-cell;
      padding-left: 20px;
      
      font-size: 20px;
    }
    .blue4 {
      height: 100px;
      width: 40%;
      padding-bottom: 240px;
      display: table-cell;
      padding-right: 2px;
      font-size: 20px;
      padding-right: 20px;

  
    }


    
  
}

@media (max-width: 1410px) and (min-width: 1000px){
  .blue2 {
    display: block;
    height: 70px;
    width: 100%;
    font-size: 4em;
 
    
  }
  
  
  .blue3 {
    display: block;
    height: 100px;
    width: 90%;
    padding-left: 20px;
    padding-top: 30px;
    font-size: 26px;
  }
  .blue4 {
      padding-top: 40px;
      padding-bottom: 24px;
      padding-left: 20px;
      font-size: 26px;
      
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
    height: 0px;
    width: auto;
    font-size: 23px;
    
    padding-left: 20px;
  }
  
  .blue3 {
    display: block;
    height: 180px;
    width: auto;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 0;
    
    
  }
  .blue4 {
      display: block;
      height: 80px;
      width: auto;
      font-size: 20px;
      padding-left: 20px;
      padding-right: 0px;
      padding-top: 30px;
    }

 
}
.container3 {
  width: 57.5%;
font-family: 'Plus Jakarta Sans';
  padding-top: 1.5cm;
position: absolute;
right: 0;
color: rgba(35, 25, 10, 0.80);
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;

}

.right-text3 p {
font-size: 28px;

}

.right-text3 {
padding-right: 20px;
}




@media (max-width: 1000px){


.Newsletter {
margin-top: 6cm;
padding-bottom: 7cm;
}
.container3 {
width: 100%;
position: static;

margin-top: 3.5cm;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
overflow: hidden;

}

.right-text3 {
  padding-left: 16px;

}

.right-text3 h1 {
  font-size: 38px;
  
}
.right-text3 p{
  font-size: 20px;
  
  

}

 
}

@media (max-width: 2000px){
.right-text3 p{
  font-size: 20px;
  color: rgba(35, 25, 10, 0.80);
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
  

}
}
.cont {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;

gap: 20px;


}

@media (max-width: 1000px) {

.ob1,.ob2 {
  max-width: 100%;
  height: auto;
}
.cont {
  margin-top: -5cm;
  margin-bottom:-5cm;
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;

gap: 5px;


}


}


.ob1 {
border-radius: 20px;
width: 40%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
}


.ob2 {
border-radius: 20px;
width: 57%;
height: auto;
  

display: flex;
justify-content: center;
align-items: center;
}

@media (max-width: 1410px){
.ront {
  padding-top: 4cm;
}
}
</style>