<template>
    <div>
     
  
        


  <footer class="blacko">
    <div class="pad">
    <img src="/images/Logo Sagrop.png" width="140" alt="logo">
     
      <div class="side">
        <div class="fir">
     <router-link to="/">Domov</router-link>
     <router-link to="/about">O nás</router-link>
      <router-link to="/">Portfólio</router-link>
   <router-link to="/sluzby">Služby</router-link>
  </div>
    <div class="sec">
    <a href="/komodity">Komodity</a>
    <a href="">Cenník</a>
    <a href="/aktuality">Aktuality</a>
    <router-link to="/kontakty">Kontakty</router-link>
      </div>
  </div>
    <!-- medias -->
    <div class="media">
    <a href="https://www.facebook.com/Sagropspol/">Facebook</a>
    <a href="https://www.instagram.com/sagrop_sala/">Instagram</a>
    <a href="https://www.youtube.com/channel/UCvk4O6e8NzRZzio6c8MWv1A">Youtube</a>
  </div>

    <div class="ky"><h1 id="kon">Kontaktujte nás</h1> <div class="boua"><router-link to="/kontakty"><button  class="bttnax">Kontakty</button></router-link> </div></div>

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

  </div>
  <div class="copyright">Copyright &copy; 2023 Sagrop All Rights reserved</div>

  </footer>
    </div>
</template>

<script>


    export default {
        
    }
</script>

<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');



*{
  font-family: 'Plus Jakarta Sans';
}

  @media (min-width: 1000px){
.blacko {
    background: #050402;
margin-top: -26cm;
width: 100%;
height: auto;
color: white;}

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
  padding: 10px 30px ;
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
  color: white;
  font-size: 110px;  
  display: flex;
  font-weight: 500;
  font-family: 'Plus Jakarta Sans';
}

footer p {
  font-size: 17px;
  padding-left: 1cm;
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
   border-top: 1px solid #E9E5E0;
  border-bottom: 0px solid #E9E5E0;

}
.deu{
  width: 96%;
  height: auto;
  margin: 0 auto;
 display: flex;
 border-top: 1px solid #E9E5E0;
border-bottom: 0px solid #E9E5E0;
}
.troi {
  width: 96%;
  height: auto;
  margin: 0 auto;
 display: flex;
 border-top: 1px solid #E9E5E0;
border-bottom: 1px solid #E9E5E0;
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
  color: rgba(233, 229, 224, 0.80);

}
.media {
  color: rgba(233, 229, 224, 0.80);

position: absolute;
right: 1cm;
margin-top: -2cm;

}

.media a {
  margin-top: 12px;

  display: block;
  color: rgba(233, 229, 224, 0.80);

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
  background: #050402;
margin-top: 0cm;
width: 100%;
height: auto;
color: white;

}





footer img {
  margin-left: 30px;
  
}

.pad {
  padding-top: 1cm;
}

.bttnax {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 17px 30px ;
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

.boua{
  margin-top: 2cm;
  

}

#kon {
  height: 1cm;
  margin-top: 5cm;
  display: flex;
  position: relative;
}
.ky {
margin: 0 auto ;
width: 80%;
height: 1.6cm;

}

footer h1 {
  color: white;
  font-size: 40px;  
  display: flex;
  

  font-weight: 500;
}

footer p {
  font-size: 14px;
  padding-left: 13px;
  font-weight: 500;
  padding-top: 1cm;
  width: 98%;

}

.et{
    width: 96%;
    align-items: center;
    place-items: center;
    margin: 0 auto;
    
    height: auto;
   display: row;
   margin-top: 3cm;
   border-top: 1px solid #E9E5E0;
  border-bottom: 0px solid #E9E5E0;

}
.deu{
  width: 96%;
  height: auto;
  margin: 0 auto;
 display: row;
 border-top: 1px solid #E9E5E0;
border-bottom: 0px solid #E9E5E0;
}
.troi {
  width: 96%;
  height: auto;
  margin: 0 auto;
 display: row;

 border-top: 1px solid #E9E5E0;
border-bottom: 1px solid #E9E5E0;
}

.end {
  width: 100%;

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