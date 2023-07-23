<template>
    <div>
            <div class="blue1">
            <section class="blue2"><h1 class="">Poľnohospodárske <br> služby dronom</h1> <h2>Budúcnosť poľnohospodárstva <br> za pomoci leteckých služieb</h2></section>
            
            <aside class="blue3"><p class="">Pomocou postrekovacieho dronu zvládneme rýchlo a efektívne aplikovať postreky a granulované hnojivo bez nutnosti použitia ťažkých strojov a bez škôd na rastlinách.</p></aside>
            <aside class="blue4"><p class=""> </p></aside>
            
            </div>

            <div class="image-container">
                <img src="images/drone.svg" alt="Drone">
            </div>



        <div class="container">
  <div class="right-text">
    <h1>Multispektrálny dron</h1> <p> –  Precízne zbere údajov: Multispektrálne kamery nainštalované na dronoch môžu získať vysoko presné  a detailné údaje o stavbe, zložení a raste rastlín. Tieto údaje sa potom môžu použiť na určenie optimálneho času  na zavlažovanie, aplikáciu hnojív alebo pesticídov.</p>
<p>
–  Efektívne monitorovanie úrody: Drony môžu byť použité na sledovanie rastu a vývoja plodín, a to aj v  náročných terénnych podmienkach, čo uľahčuje plánovanie zberu a zlepšenie výnosov.</p>
<br>
<p>
    
    –  Rýchle zisťovanie problémov: Multispektrálne kamery sú schopné detekovať problémy, ako sú nedostatok vody, choroby alebo škodcovia, skôr ako by boli viditeľné na povrchu. Toto umožňuje rýchlejšie reagovať a minimalizovať škody.
</p>
<br>
<p>
–  Úspora času a nákladov: Multispektrálne drony môžu nahradiť tradičné metódy, ako napríklad manuálne zber údajov alebo iné postupy,  ktoré sú nákladné a časovo náročné. Taktiež umožňujú lepšiu správu poľnohospodárskej pôdy a to aj na veľkých pozemkoch.
</p>
<br>
<p>
–  Presnosť: Drony sú schopné získať presné a spoľahlivé údaje, ktoré sú potom použité na presnejšiu aplikáciu  hnojív a pesticídov, čo zvyšuje efektivitu a znižuje náklady.
</p>
<br>
<p>
–  Rýchlosť a flexibilita: Drony sú schopné rýchlo a flexibilne prispôsobiť sa rôznym situáciám a podmienkam, čo znižuje čas potrebný na zber údajov a poskytuje rýchlejšie a presnejšie výsledky.
</p>
</div>
</div>

            <div class="cont">
    <img class="ob1" src="images/drone1.svg" alt="Drone">
    <img class="ob2" src="images/drone2.svg" alt="Drone">
          </div>




          <div class="container3">
  <div class="right-text3"><h1>Postrekovací dron</h1> <p> –  Efektivita: Postrekovacie drony sú schopné rýchlo a efektívne aplikovať pesticídy a herbicídy na veľkých pozemkoch poľnohospodárskej pôdy, čím zvyšujú produktivitu a znižujú náklady.</p>
<p>
–    Presnosť: Drony sú schopné aplikovať pesticídy a herbicídy s vysokou presnosťou, čím minimalizujú množstvo použitých chemikálií a znižujú riziko znečistenia pôdy a vody.</p>
<br>
<p>
    
  –  Flexibilita: Postrekovacie drony sú schopné prispôsobiť sa rôznym terénom a podmienkam, čo znižuje potrebu manuálneho zásahu a minimalizuje škody na plodinách.
</p>
<br>
<p>
  –  Bezpečnosť: Použitie postrekovacích dronov znižuje potrebu manuálneho zásahu a minimalizuje riziko zranenia pracovníkov a riziko vystavenia chemikáliám.
</p>
<br>
<p> 
  –  Presnosť dávkovania: Drony sú schopné aplikovať rovnaké množstvo pesticídov alebo herbicídov na každ meter štvorcový, čo zvyšuje efektivitu a znižuje riziko prebytku alebo nedostatku aplikovaných chemikálií.
</p>
<br>
<p>
  –  Úspora času: Použitie postrekovacích dronov znižuje čas potrebný na postrek poľnohospodárskej pôdy a d umožňuje rýchlejšiu reakciu na problémy v poľnohospodárstve.
</p>
</div>
</div>




          <div class="space"> <Footer></Footer></div>
    </div>
</template>

<script>
   import Footer from  "../components/Footer.vue"
import Newsletter from "../components/Newsletter.vue"
    export default {
        components: {
    Footer,
    Newsletter
  }}
</script>

<style  scoped>
@media (min-width: 1000px){
.space {
  padding-top: 50cm;
}}

@media (max-width: 1000px){

  .space {
    margin-top: -51cm;
  }
}
@media (max-width: 2066px){
  .space{
    padding-top: 50cm;
  }
}

@media (max-width: 1896px){
  .space{
    padding-top: 50cm;
  }
}
@media (max-width: 1689px){
  .space{
    padding-top: 54cm;
  }
}

@media (max-width: 1082px) and (min-width: 1000px){
  .space{
    padding-top: 55cm;
  }
}

@media (max-width: 2000px) and (min-width: 1000px){
  .right-text3 h1 {
  font-size: 8px;
  font-family: 'Recia';
}
.right-text3 p {
  font-size: 4px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

}
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-top: 1cm;
  gap: 20px;
  
  
}




.container3 {
  width: 59%;
  font-family: 'Plus Jakarta Sans', sans-serif;
    padding-top: 0.2cm;
  position: absolute;
  right: 0;

}


.right-text3 h1 {
  font-size: 58px;
  font-family: 'Recia';
}
.right-text3 p {
  font-size: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

.right-text3 {
  padding-right: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}




@media (max-width: 1000px){
  


  .container3 {
  width: 100%;
  position: static;
  
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
.container3 br{
  display: none;
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
@media (max-width: 1000px) {

  .ob1 , .ob2 {
    width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
    
  }
  .cont {
    width: 100%;
    
    height: auto;
    
  }

  .image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  width: 97%;
  margin: 0 auto;
  margin-bottom: 10cm;

}


.image-container img {

  max-width: 97.5%;
  border-radius: 20px;
  max-height: 100%;
  height: auto;
  
}}

@media (max-width: 1000px) {
.ob1 {
  border-radius: 30px;
  width: 95%;
height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


.ob2 {
  border-radius: 20px;
  width: 95%;
  height: auto;


  display: flex;
  justify-content: center;
  align-items: center;
}}

@media (min-width: 1000px) {
.ob1 {
  border-radius: 30px;
  width: 38%;
height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


.ob2 {
  border-radius: 20px;
  width: 58%;
  height: auto;


  display: flex;
  justify-content: center;
  align-items: center;
}}
@media (max-width: 2000px) {
  .image-container img {
   margin-bottom: 2cm;
  max-width: 97.5%;
  border-radius: 20px;
  max-height: 100%;
  width: 2500px;
  height: auto;
  
}}

@media (min-width: 1000px) {
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  max-width: 100%;
 margin-top: 130px;
  gap: 20px;
}


.image-container img {
    margin-bottom: 12cm;
  max-width: 97.5%;
  border-radius: 20px;
  max-height: 100%;
  width: 2500px;
  height: auto;
  
}}

.image-container2 {

width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

}


.image-container2 #d1 {
  margin-bottom: 12cm;
max-width: 90%;
border-radius: 70px;
max-height: 90%;
width: 1780px;
height: auto;
padding: 29px;



}

.image-container2 #d2 {
  margin-bottom: 12cm;
max-width: 98%;
border-radius: 20px;
max-height: 100%;
width: 2500px;
padding: 29px;
height: auto;

}






@media (max-width: 2000px) and (min-width: 1000px){
  .right-text h1 {
  font-size: 8px;
  font-family: 'Recia';
}
.right-text p {
  font-size: 4px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

}
.cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-top: 9cm;
  gap: 20px;
  
  
}



@media (max-width: 1529px){

  .cont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  margin-top: 12cm;
  gap: 20px;
  
  
}
}
@media (max-width: 1279px){

.cont {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;
margin-top: 15cm;
gap: 20px;


}
}@media (max-width: 1045px) and (min-width: 1000px){

.cont {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;
margin-top: 16cm;
gap: 20px;


}
}

@media (max-width: 1000px){

.cont {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;
margin-top: 9cm;
gap: 20px;


}
}


.container {
  width: 59%;
  font-family: 'Plus Jakarta Sans', sans-serif;
   margin-top: -12cm;
  position: absolute;
  right: 0;

}


.right-text h1 {
  font-size: 58px;
  font-family: 'Recia';
}
.right-text p {
  font-size: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

.right-text {
  padding-right: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}




@media (max-width: 1000px){
  


  .container {
  width: 100%;
  position: static;
margin-bottom: -9cm;
  height: 100%;
  display: flex;
 
  align-items: center;
  overflow: hidden;
}
.container br{
  display: none;
}

  .right-text {
    padding-left: 20px;
    padding-right: 20px;

  }

  .right-text h1 {
    font-size: 38px;
    
}
.right-text p{
    font-size: 20px;
    
    
  
}

   
}

@media (max-width: 2066px){




}
@media (max-width: 2000px) and (min-width: 1410px){
 
  .blue1 {
    display: table;
    width: 100%;
    color: rgb(0, 0, 0);
   margin-bottom: -7cm;
  }
}

@media (max-width: 1410px) and (min-width: 1000px){

  .blue1 {
    display: table;
    width: 100%;
    color: rgb(0, 0, 0);
   margin-bottom: 2cm;
  }

}


.blue1 {
    display: table;
    width: 100%;
    color: rgb(0, 0, 0);
    padding-top: 4.5cm;
   
  }
  
  .blue2 {
    height: 300px;
    width: 40%;
    display: table-cell;
    padding-left: 30px;
    
    
  }

  .blue2 h1 {
    font-size: 60px;
  }
  .blue2 h2 {
    font-size: 35px;
  }
 
  

  /* .blue22{

    height: 300px;
    width: 30%;
    display: table-cell;
    padding-left: 20px;
    font-size: 48px;

  } */
 
 
  
  .blue3 {
    height: 300px;
    width: 30%;
    display: table-cell;
    padding-right: 1cm;
    color: rgba(35, 25, 10, 0.80);
    font-family: 'Plus Jakarta Sans';
    font-size: 29px;
  }
  .blue4 {
    height: 300px;
    width: 30%;
    display: table-cell;
  
    font-size: 3em;

  }

  @media (max-width: 2000px){
    
.image-container2 #d1 {
  margin-bottom: 12cm;
max-width: 1780px;
border-radius: 70px;
max-height: 100%;
width: 1780px;
height: auto;
padding: 29px;



}

.image-container2 #d2 {
  margin-bottom: 12cm;
max-width: 2500px;
border-radius: 20px;
max-height: 100%;
width: 2500px;
padding: 29px;
height: auto;

}
/* .image-container2 #d1 {
  margin-bottom: 12cm;
max-width: 40%;
border-radius: 20px;
max-height: 100%;

scale: 0.89;


}

.image-container2 #d2 {
  margin-bottom: 12cm;
max-width:50%;
border-radius: 20px;
max-height: 100%;


} */


    .blue2 {
        height: 300px;
        width: 40%;
        display: table-cell;
        padding-left: 20px;
    
        font-size: 48px;
      }
      
      .blue3 {
        height: 300px;
        width: 30%;
        display: table-cell;
        padding-left: 20px;
        color: rgba(35, 25, 10, 0.80);
        font-family: 'Plus Jakarta Sans';
        font-size: 20px;
      }
     
      .blue4 {
        height: 300px;
        width: 40%;
        font-family: 'Plus Jakarta Sans';
        color: rgba(35, 25, 10, 0.80);
        padding-bottom: 200px;
        display: table-cell;
        padding-right: 2px;
        font-size: 20px;
    
      }
    
  }

  @media (max-width: 1410px){
    .blue2 {
      display: block;
      height: 300px;
      width: 100%;
      font-size: 6em;
      
    }
    
    .blue3 {
      display: block;
      height: 150px;
      width: 100%;
      
      padding-left: 20px;
      padding-top: 30px;
      font-size: 30px;
    }
    .blue4 {
        padding-left: 60px  10;
        
        font-size: 30px;
      }
  
    }

    
  @media (max-width: 1000px){
    .image-container2 {
margin-top: 4cm;
max-width: 100%;
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}

.image-container2 #d1 {
 
max-width: 100%;
border-radius: 46px;
max-height: 100%;

scale: 0.89;


}

.image-container2 #d2 {
  margin-top: -12cm;
max-width:90%;
border-radius: 20px;
max-height: 100%;


}


    .blue1{
       display: block;
       margin-bottom: -6cm;
       
    }

    .blue3 p {
        font-size: 20px;
      }
      .blue4 p {
        font-size: 20px;
      }

    .blue2 h1 {
    font-size: 35px;
  }
  .blue2 h2 {
    font-size: 18px;
  }
    .blue2 {
      display: block;
      height: auto;
      width: auto;
      font-size: 31px;
      padding-right: 20px;
      padding-left: 20px;
    }
    
    .blue3 {
      display: block;
      height: auto;
      width: auto;
      font-size: 30px;
      padding-left: 20px;
      
      
    }
    .blue4 {
        display: block;
        height: auto;
        width: auto;
        font-size: 30px;
   
        padding-top: 20px;
      }
  }





</style>