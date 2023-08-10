<template>
  <div>
      <section>
        <div class="blue1">
          <section class="blue2"><h1 class="">Poďme pracovať <br> spoločne!</h1></section>
          
          <aside class="blue3"><p class="">Ďakujeme Vám za záujem o našu firmu! Sme malá firma s bohatou tradíciou založenou v roku 1996. Našou prioritou je poskytnúť komplexné riešenia pre všetky vaše poľnohospodárske potreby, od výberu semien až po zber plodov.</p></aside>
          <aside class="blue4"><p class="">Ak máte akékoľvek otázky týkajúce sa našich produktov alebo služieb, neváhajte nás kontaktovať na uvedených kontaktných údajoch nižšie. Tešíme sa na Vašu spoluprácu a na to, že Vám pomôžeme dosiahnuť úspech vo vašich poľnohospodárskych aktivitách. </p></aside>
          
          </div>
          <button class="bttna">O nas </button>
      </section>



      
  
  </div>
  <footer class="blacko">
  <div class="ww">
   <div class="et">
    <p id="lex">Vedenie
      Spoločnosti</p> 
      
      <div class="end">
        <p></p>
      <p>Ing. Marek Psota <br>
        +421 903 466 234 <br>
        psota@sagrop.sk</p>
        
        <p>JUDr. Zuzana Moravčík Psotová <br>
          +421 903 235 407 <br>
          psotova@sagrop.sk</p>
    </div>
  </div>
      <div class="deu">
      <p id="le">Obchodné
        oddelenie</p>
        
        <div class="end">
          <p>Ing. Ján Kováč <br>
          +421 903 406 462 <br>
          kovac@sagrop.sk</p>

          <p>Ing. Matej Takáč <br>
            +421 902 823 580 <br>
            takac@sagrop.sk</p>

            <p>Ing. Ján Hudák <br>
              +421 911 755 462 <br>
              hudak@sagrop.sk</p>          
      </div>
    </div>
      <div class="troi">
        <p id="le">Fakturácia a logistika</p>
        <div class="end">
        <p>Ing. Helena Melová <br>
          +421 903 590 638 <br>
          melova@sagrop.sk</p>
          <p>Monika Psotová <br>
            +421 903 796 820 <br>
            monikapsotova@sagrop.sk</p>

            <p>Lukáš Psota <br>
              +421 911 339 939 <br>
              lukas.psota@sagrop.sk</p>
      </div>
    </div>
    </div>
  </footer>

  <div class="cont">
     
    <img class="ob1" src="/images/aktzel.svg" alt="">
   


  
  <img class="ob2" src="/images/obilie.svg" alt="">
</div>

  
  <div class="conta">
  <p>Sme hrdí na našu širokú ponuku semien, hnojív a agrochémie a zároveň sa snažíme našim zákazníkom pomôcť dosiahnuť najlepšie výsledky na ich poliach. Náš odborný personál je vždy k dispozícii, aby odpovedal na vaše otázky a poskytol vám radu o najlepších produktov pre vaše špecifické potreby.</p>
</div>




      
      <Aktuality></Aktuality>

</template>

<script>
import Aktuality from '../components/Aktuality.vue';
  export default {
      components:{Aktuality}
  }
</script>

<style  scoped>
.cont {
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;

gap: 20px;


}

@media (max-width: 1000px) {

.cont .ob2{
width: 94%;


}

.cont .ob1{
width: 94%;


}

.cont {
 
display: flex;
flex-wrap: wrap;
justify-content: center;
max-width: 100%;

gap: 0px;


}
}

@media (min-width: 1000px) {
.conta p {
width: 30%;
margin-left: 10px;
  font-size: 20px;
margin-top: -6cm;
font-family: 'Plus Jakarta Sans';
color: rgba(35, 25, 10, 0.80);
}

.conta {
margin-left: 50px;

}}

@media (max-width: 2017px) {
.conta p {
width: 30%;
  font-size: 20px;
margin-top: -5cm;

}


.conta {
margin-left: 50px;

}}
@media (max-width: 1624px) {
.conta p {
width: 30%;
  font-size: 20px;
margin-top: -4cm;

}


.conta {
margin-left: 30px;

}}
@media (max-width: 1292px) and (min-width: 1000px) {
.conta p {
width: 30%;
  font-size: 20px;
margin-top: -3cm;

}


.conta {
margin-left: 34px;

}}



@media (max-width: 1000px) {
.conta p {
width: 100%;

margin-left: 0px;
font-size: 20px;
display: block;font-family: "Plus Jakarta Sans";

}

.conta {
margin-top: 5cm;
margin-left: 20px;
padding-right: 20px;

}}




.cont {
display: flex;
justify-content:space-around;
}




.ob1 {
border-radius: 20px;


width: 30%;
margin-top: 2cm;
height: 100%;
display: flex;

justify-content: start;
align-items: start;
}


.ob2 {
border-radius: 20px;
width: 60%;


height: auto;
margin-top: 2cm;

display: flex;
justify-content: center;
align-items: center;
}

.container3 {
width: 97%;

height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
overflow: hidden;
}
.right-text3 h1 {
  font-size: 58px;
  
}
.right-text3 p{
  font-size: 20px;
  

}

.right-text3 {
padding: 1cm;
text-align: start;
overflow: hidden;
}


@media (max-width: 1000px){



.container3 {
width: 97%;
margin-top: 4cm;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
overflow: hidden;
}

.right-text3 {
  padding-left: 20px;

}

.right-text3 h1 {
  font-size: 38px;
  
}
.right-text3 p{
  font-size: 20px;
  height: 100%;
  

}

 
}


@media (min-width: 1000px) {
.blue1 {
  display: table;
  width: 100%;
  
  color: rgb(0, 0, 0);
  padding-top: 2.5cm;
  margin-bottom: -cm;
  
 
}

.blue2 {
  height: 300px;
  width: 45%;
  display: table-cell;
  padding-left: 50px;
  padding-right: 10px;
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
  color: rgba(35, 25, 10, 0.80);
  display: table-cell;
  padding-right: 1cm;
  font-family: 'Plus Jakarta Sans';
  font-size: 26px;
}
.blue4 {
  height: 300px;
  width: 30%;
  display: table-cell;
padding-right: 20px;
color: rgba(35, 25, 10, 0.80);
font-family: 'Plus Jakarta Sans';
  font-size: 26px;

}
}
@import url(https://db.onlinewebfonts.com/c/2b50fbf03f34a55103ff9b9c5b8d3028?family=Recia+W03+Regular);
@media (max-width: 2000px){
  .blue1 {
  display: table;
  width: 100%;
  
  color: rgb(0, 0, 0);
  padding-top: 2.5cm;
  margin-bottom: -4cm;
  
 
}
  .blue2 {
      height: 300px;
      width: 45%;
      display: table-cell;
      padding-left: 20px;
      font-family: 'Recia';
        font-weight: 600;
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
      padding-bottom: 200px;
      display: table-cell;
      padding-right: 2px;
      font-size: 20px;
      padding-right: 20px;

  
    }


    
  
}

@media (max-width: 1410px){
  .blue2 {
    display: block;
    height: 200px;
    width: 100%;
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
      padding-top: 40px;
      padding-left: 20px;
      font-size: 30px;
    }

  }



  @media (max-width: 1000px){
    br{
      display: none;
    }

    .blue1 {
  display: table;
  width: 100%;
  
  color: rgb(0, 0, 0);
  padding-top: 2.5cm;
  margin-bottom: 1.6cm;
  
 
}
  .blue1{
     display: block;
     
  }
  .blue2 {
    display: block;
    height: 20px;
    width: auto;
    font-size: 23px;
    
    padding-left: 20px;
  }
  
  .blue3 {
    display: block;
    height: auto;
    width: auto;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: rgba(35, 25, 10, 0.80);
/* Body text/80% */
font-family: Plus Jakarta Sans;

font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
    
    
  }
  .blue4 {
      display: block;
      height: auto;
      width: auto;
      font-size: 20px;
      padding-left: 20px;
      padding-top: 10px;
      color: rgba(35, 25, 10, 0.80);
/* Body text/80% */
font-family: Plus Jakarta Sans;

font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
    }

 
}
@media (max-width: 1000px){
.bttna{

display: flex;
flex-direction: row;
align-items: center;
padding: 10px 30px ;
margin-top: -5cm;
cursor: pointer;
position: absolute;

height: 40px;
right: 2cm;
border: none;
border: none;
color: white;
background: #050402;
border-radius: 30px;
}
}


@media (min-width: 1000px){
.bttna{

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 30px ;

  cursor: pointer;
  position: absolute;
  
  height: 40px;
  right: 2cm;
  border: none;
border: none;
color: white;
background: #050402;
border-radius: 30px;
}}

@media (max-width: 2000px){
.bttna{

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 30px ;
  
  cursor: pointer;
  position: absolute;
  
  height: 40px;
  right: 2cm;
  border: none;
border: none;
color: white;
background: #050402;
border-radius: 30px;
}}

@media (min-width: 1000px){
.blacko {
  background: #E9E5E0;
width: 100%;

height: auto;
color: rgb(0, 0, 0);
font-family: 'Plus Jakarta Sans';

}


footer img {
margin-left: 1cm;
}

.pad {
padding-top: 1cm;
}

.bttnax {
display: flex;
flex-direction: row;
align-items: center;
padding: 24px 30px ;
cursor: pointer;
position: absolute;
right: 1.3cm;
height: 40px;
font-size: 15px;
font-weight: 500;
border: none;
border: none;
color: rgb(0, 0, 0);
background:#E9E5E0;
border-radius: 30px;
}

.boua{
margin-top: -1.3cm;


}

#kon {
height: 1cm;
margin-top: 7cm;
display: flex;
position: relative;
}
.ky {
margin: 0cm auto 0;
width: 96%;
height: 1.6cm;

}

footer h1 {
color: rgb(0, 0, 0);
font-size: 110px;  
display: flex;
font-weight: 500;
}

footer p {
font-size: 17px;

font-weight: 500;
padding-top: 1cm;

width: 100%;

}

.et{
  width: 96%;
  align-items: center;
  place-items: center;
  margin: 0 auto;
  
  height: auto;
 display: flex;
 margin-top: 4cm;
 border-top: 1px solid black;
border-bottom: 0px solid black;

}
.deu{
width: 96%;
height: auto;
margin: 0 auto;
display: flex;
border-top: 1px solid black;
border-bottom: 0px solid black;
}
.troi {
width: 96%;
height: auto;
margin: 0 auto;
display: flex;
border-top: 1px solid black;
border-bottom: 1px solid black;
}

.end {
width: 100%;

text-align: end;
display: flex;
align-items: flex-end;
}

.end1 {
 display: flex;
 gap: 3cm;
 padding-right: cm;
}

#le {
padding-left: 0cm;
place-content: top;
position: relative;
display: flex;
margin-top: -0.5cm;
}

#lex {
padding-left: 0cm;
place-content: top;
position: relative;
display: flex;
margin-top: -3cm;
}

.copyright {
padding-left: 0cm;
font-size: 14px;
font-weight: 400;
width: 96%;
height: 1cm;
margin:0 auto ;
padding-top: 1cm;

}




.fir {


position: absolute;
left: 10cm;
margin-top: -2cm;


}

.sec {
position: absolute;
left: 16cm;
margin-top: -2cm;

}
.side a{
margin-top: 12px;
display: block;
color: white;
font-size: 17px;
text-decoration: none;

}
.media {

position: absolute;
right: 1cm;
margin-top: -2cm;

}

.media a {
margin-top: 12px;

display: block;
color: white;
font-size: 17px;
text-decoration: none;
}
}
@media (min-width: 1000px) and (max-width: 1089px) {
footer h1 {
color: white;
font-size: 100px;  
display: flex;
font-weight: 500;
}
}

@media (max-width: 1000px){
.blacko {
background: #E9E5E0;
margin-top: -2.5cm;
width: 100%;
height: auto;
color: rgb(0, 0, 0);
font-family: 'Plus Jakarta Sans';

}






.pad {
padding-top: 1cm;
}

.bttnax {
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 30px ;
cursor: pointer;
position: absolute;
right: 1cm;
height: 40px;
font-size: 15px;
font-weight: 500;
border: none;
color: rgb(0, 0, 0);
background:#E9E5E0;
border-radius: 30px;
}







footer p {
font-size: 14px;
font-weight: 500;
padding-top: 1cm;
width: 100%;

}

.et{
  width: 96%;
  align-items: center;
  place-items: center;
  margin: 0 auto;
  
  height: auto;
 display: row;
 margin-top: 3cm;
 border-top: 1px solid black;
border-bottom: 0px solid black;

}
.deu{
width: 96%;
height: auto;
margin: 0 auto;
display: row;
border-top: 1px solid black;
border-bottom: 0px solid black;
}
.troi {
width: 96%;
height: auto;
margin: 0 auto;
display: row;

border-top: 1px solid black;
border-bottom: 1px solid black;
}

.end {
width: 100%;
padding-right: 0cm; 
position: relative;
text-align: start;
display: row;  
align-items: flex-end;
}

.end1 {
 display: flex;
 gap: 3cm;
 padding-right: 2cm;
}

#le {
padding-left: 0cm;
place-content: top;
position: relative;
display: flex;
margin-top: -0.5cm;
}

#lex {
padding-left: 0cm;
place-content: top;
position: relative;
display: flex;
margin-top: -0.5cm;
}

.copyright {
padding-left: 0cm;
font-size: 13px;
font-weight: 400;
width: 96%;
height: 1cm;
margin:0 auto ;
padding-top: 1cm;

}




.fir {
align-items: center;
position: absolute;
left: 50%;
transform: translateX(-50%);
display: table;
margin-top: 0.6cm;
}

.sec {
align-items: center;
position: absolute;
right: 60%;
transform: translateX(-50%);
display: row;
margin-top: 0.6cm;
}

.side a {
align-items: center;
margin-top: 12px;
display: block;
color: white;
font-size: 13px;
text-decoration: none;
}

.media {
align-items: center;
position: absolute;
left: 80%;
transform: translateX(-50%);
display: column;
margin-top: 0.6cm;
}

.media a {
align-items: center;
font-size: 13px;
margin-top: 12px;
display: block;
color: rgb(255, 255, 255);
text-decoration: none;
}



}



</style>