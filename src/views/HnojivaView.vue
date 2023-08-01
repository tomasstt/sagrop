<template>
  <div>
    

     
        <div class="blue1">
            <section class="blue2"><h1 class="">Ponuka organických <br> a anorganicých hnojív</h1></section>
            
            <aside class="blue3"><p class="">Sagrop spol. s r.o. ponúka a predáva priemyselné hnojivá – granulované aj kvapalné (LAD, DASA, Amofos, NPK, Močovina, DAM, SAM) – voľne uložené, BigBag balenie, v cisternách, 1000 l nádrže, ktorých ceny pravidelne aktualizujeme.</p></aside>
            <aside class="blue4"><p class="">Naša ponuka je rozšírená aj o špeciálne kvapalné a kryštalické hnojivá vo vode rozpustné rastové stimulátory a hnojivá používané v ekologickej poľnohospodárskej prvovýrobe. V predaji je sortiment špeciálnych hnojív od firiem YARA International, Agro Aliance SK, ASRA, Belba plus, AM Agro, Energen, MV Servis, Organix, Qenerika, Timac agro, Vermivital.</p></aside>
            
            </div>
            

    </div>

   
<div class="cont">
    <img class="ob1" src="/images/traktor.svg" alt="">
    <img class="ob2" src="/images/zelen.svg" alt="">
  </div>
  

  <div class="container3">
  <div class="right-text3">
<p> Tieto firmy sú plne etablované v slovenskej poľno výrobe pri pestovaní hustosiatych obilnín (pšenica, jačmeň), kukurice, repky olejnej, cukrovej repy, špeciálnych plodín, vo vinohradoch a sadoch.</p>

<p> 
Sortiment týchto firiem, ktoré zastupuje naša spoločnosť vám vieme zabezpečiť. Ich aplikáciu a cenovú kalkuláciu vám navrhnú naši obchodno-odborní zástupcovia. Základné ceny špeciálnych prípravkov, stimulantov a biopreparátov nájdete v našom cenníku, ktorý vám pošleme na vyžiadanie e-mailom alebo poskytneme pri osobnom stretnutí.</p>
</div>
</div>
            
            


       <div class="space"> <GreenPart></GreenPart></div>

       <div class="blue1">
            <section class="blue2"><h1 class="">Cenník Eko Hnojív </h1></section>
            
            <aside class="blue3"><p class="">Resp. doprava vo vlastnej réžii je možná zo skladu spoločnosti Sagrop Šala , Dlhá nad Váhom 927 05</p></aside>
            <aside class="blue4"><p class="">Všetky produkty sú vhodné pre  ekologické  poľnohospodárstvo. K dispozícii je aj  vo vode  rozpustná  humínová kyselina  -  CODAHUMUS S80</p></aside>
            
            </div>

          


        <table class="custom-table">
    <thead>
      <tr>
        <th class="first-header">Komodity</th>
        <th>Dopyt</th>
        <th>Ponuka</th>
        <th>Cena</th>
        <th>Množstvo</th>
        <th>Termín </th>
        <th class="last-header">Parita</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td class="cell1" :class="{ 'lastf-cell': index === tableData.length - 1 }">
            <span v-if="!admin">{{ row.cell1 }}</span>
            <input v-else v-model="row.cell1" /></td>
        <td><span v-if="!admin">{{ row.cell2 }}</span>
            <input v-else v-model="row.cell2" /></td>
        <td><span v-if="!admin">{{ row.cell3 }}</span>
            <input v-else v-model="row.cell3" /></td>
        <td><span v-if="!admin">{{ row.cell4 }}</span>
            <input v-else v-model="row.cell4" /></td>
        <td><span v-if="!admin">{{ row.cell5 }}</span>
            <input v-else v-model="row.cell5" /></td>
        <td><span v-if="!admin">{{ row.cell6 }}</span>
            <input v-else v-model="row.cell6" /></td>
        <td class="cell7" :class="{ 'lasts-cell': index === tableData.length - 1 }"><span v-if="!admin">{{ row.cell7 }}</span>
            <input v-else v-model="row.cell7" /></td>
      </tr>
    </tbody>
  </table>

  <FooterVue class="space2"></FooterVue>
    
   
</template>

<script>
import FooterVue from '../components/Footer.vue';
import GreenPart from "../components/GreenPart.vue"
    export default {
      components:{  GreenPart, FooterVue
          },
        

        
  data() {
    return {
      admin : true,
      
      tableData: [
        { cell1: "Jačmeň kŕmny", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Kukurica kŕmna", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica P", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica A", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica E", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Repka olejná", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Slnečnica čierna", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Slnečnica HO", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7"},
      
      ],
    };
  }
  
};

        
          
</script>

<style  scoped>




@media (min-width: 1000px){
.space2 {
    padding-top: 18cm;
}}
@media (max-width: 1000px){
.space2 {
margin-top: 2cm;
}
}
@media (min-width: 1000px){
.space2 {
    margin-top: 12cm;
}}
@media (min-width: 1000px) and (max-width: 1300px) {
  .space2 {
    margin-top: 12cm;
  }
}




.custom-table {

margin:  auto;
  width: 98%;
  height: 896px;
  overflow: hidden;
  
  
  border-spacing: 0;
}

.lastf-cell {
  border-bottom-left-radius: 20px;
}
.lasts-cell {
  border-bottom-right-radius: 20px;
}

.cell1{
  place-content: start;
  justify-content: start;
 

}

th {
 max-width: 20px;
height: 90px;
}
th.first-header {
  border-top-left-radius: 20px;
  
}
th {
  background: #2C3714;
  font-size: 24px;
  font-weight: 600;
}
@media (max-width: 1000px){

  th{
    font-size: 15px;
  }
}

td {
  max-width: 10px;
}
th.last-header {
  border-top-right-radius: 20px;
  background: #2C3714;

}

.custom-table thead {
  color: white;
}


.custom-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #87837D;

  border-right: 1px solid #87837D;
}

.custom-table th:first-child,
.custom-table td:first-child {
  border-left: 1;
  border-left: 1px solid #87837D;
}

.custom-table th:last-child,
.custom-table td:last-child {
  border-right: 1 ;
  border-right: 1px solid #87837D;
}

.custom-table tr:first-child th,
.custom-table tr:first-child td {
  border-top: 1;
}

.custom-table tr:last-child th,
.custom-table tr:last-child td {
  border-bottom: 1;
  
}

/* Additional styles for the green header */
.custom-table th.first-header {
  background: #2C3714;

}

@media (max-width: 1100px) and (min-width: 1000px){
.space {

padding-top: 2cm;
}
}

@media (max-width: 1000px){
.space {
margin-top: 2cm;
}
}
@media (min-width: 1000px){
.space {
    margin-top: 12cm;
}}
@media (min-width: 1000px) and (max-width: 1300px) {
  .space {
    margin-top: 12cm;
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
      padding-left: 30px;
      padding-top: 30px;
      font-size: 30px;
      
    }
    .blue4 {
      
        padding-left: 30px;
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
  .container3 {
  width: 55%;
  font-family: 'Plus Jakarta Sans', sans-serif;
    padding-top: 2cm;
  position: absolute;
  right: 0;

}

.right-text3 p {
  font-size: 24px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  
}

.right-text3 {
  padding-right: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

@media (max-width: 1267px) and (min-width:1000px ){

.container3 {
  width: 55%;
  font-family: 'Plus Jakarta Sans', sans-serif;
    padding-top: 1cm;
  position: absolute;
  right: 0;

}

}
@media (max-width: 1100){
  

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
  width: 43%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}


.ob2 {
  border-radius: 20px;
  width: 54%;
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