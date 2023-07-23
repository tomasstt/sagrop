<template>

        

<div>
    <div class="blue1">
    <section class="blue2"><h1 class="">Autodoprava </h1> <h2>Ponúkame spoľahlivú a <br> efektívnu dopravu kamiónmi <br>pre poľnohospodárstvo!</h2></section>
    
    <aside class="blue3"><p class="">Ak hľadáte spoľahlivého partnera na dopravu v oblasti poľnohospodárstva, sme tu pre vás. Naša spoločnosť má dlhoročné skúsenosti v oblasti dopravy a logistiky a vieme, ako sa postarať o vaše poľnohospodárske potreby.</p></aside>
    <aside class="blue4"><p class=""> Ak hľadáte partnera, ktorý vám poskytne spoľahlivú a efektívnu dopravu kamiónmi v poľnohospodárstve, neváhajte nás kontaktovať e-mailom alebo telefonicky. Radi vám poskytneme viac informácií a zodpovieme všetky vaše otázky.</p></aside>
    
    </div>

    <div class="image-container">
        <img src="images/dopravap.svg" alt="Drone">
    </div>



<div class="container3">
<div class="right-text3">
 <p> S našimi modernými kamiónmi a profesionálnym tímom vodičov sme pripravení poskytnúť vám kompletnú dopravnú službu od začiatku až do konca. Či už potrebujete prepraviť zrná, hnojivá, rastliny alebo iné poľnohospodárske produkty, sme pripravení na akúkoľvek úlohu. <br> </p>
<br>
<p>
–  Navyše, vždy dbáme na bezpečnosť a kvalitu našej práce. Naši vodiči sú školení a skúsení v riešení všetkých druhov situácií a naši kamióny sú vždy v prevádzkyschopnom stave.
</p>
<br>

</div>
</div>
</div>


<Footer class="space"></Footer>

</template>


<script>
import Footer from "../components/Footer.vue"
export default{
components: {
    Footer
}

}

</script>


<style scoped>



@media (max-width: 2000px){
.space{
    margin-top: 30cm;
}
}
@media (min-width: 1000px){
.space{
    margin-top: 30cm;
}
}



@media (max-width: 1000px){
    .space{
        margin-top: 0cm;
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
    padding-top: 2cm;
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
  margin-top: 3.5cm;
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
  margin-bottom: 7.4cm;

}


.image-container img {

  max-width: 97.5%;
  border-radius: 20px;
  max-height: 100%;
  height: auto;
  
}}


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
}
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

.container {
  width: 97%;
margin-top: -12cm;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
.right-text h1 {
    font-size: 58px;
    
}
.right-text p{
  font-size: 20px;
    
  
}

.right-text {
  text-align: start;
  overflow: hidden;
}
@media (max-width: 1000px){
  .image-container2 {

width: 100%;
height: 100vh;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
}
  .container {
  width: 97%;
  
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}

  .right-text {
    padding-left: 20px;

  }

  .right-text h1 {
    font-size: 38px;
    
}
.right-text p{
    font-size: 20px;
    height: 100%;
    
  
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
    margin-top: -11cm;
  position: absolute;
  right: 0;
  color: rgba(35, 25, 10, 0.80);
/* Body text/80% */
font-family: Plus Jakarta Sans;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;

}



.right-text3 p {
  font-size: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

.right-text3 {
  padding-right: 30px;
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
    color: #2C3714;
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
/* Body text/80% */
font-family: Plus Jakarta Sans;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
    font-size: 3em;
  }
  .blue4 {
    height: 300px;
    width: 30%;
    display: table-cell;
    color: rgba(35, 25, 10, 0.80);
/* Body text/80% */
font-family: Plus Jakarta Sans;
font-size: 15px;
font-style: normal;
padding-right: 20px;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
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
        
        font-size: 20px;
      }
     
      .blue4 {
        height: 300px;
        width: 40%;
        padding-bottom: 200px;
        display: table-cell;
        padding-right: 20px;
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
      width: 80%;
      padding-left: 20px;
      padding-top: 30px;
      font-size: 24px;
    }
    .blue4 {
        padding-left: 60px  10;
        
        font-size: 24px;
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
    font-size: 25px;
    padding-right: 20px;
  }
    .blue2 {
      display: block;
      height: auto;
      width: auto;
      font-size: 31px;
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
        padding-left: 20px;
        padding-top: 20px;
        padding-bottom: 10px;
      }
  }



</style>