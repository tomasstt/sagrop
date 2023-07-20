<template>
    <div>
        <section>
          <div class="blue1">
            <section class="blue2"><h1 class="">Aktuality</h1></section>
            
            <aside class="blue3"><p class="">Tu nájdete informácie o nových produktových <br> radoch, najnovších projektoch a iných <br> zaujímavých veciach, ktoré sa u nás dejú. Naša <br> snaha je udržiavať vás v obraze a informovať o <br> všetkom, čo sa deje v našej spoločnosti.</p></aside>
            <aside class="blue4"><p class="">Sledujte naše novinky a buďte informovaní o <br> všetkých dôležitých zmenách a aktualizáciách. </p></aside>
            
            </div>
           
        </section>
        <div class="bar">
        <div class="search-bar">
      <input class="search" type="text" v-model="searchText" placeholder="Hladat" />
    </div>

    <div class="spacer"></div>
  <div class="buttons">
<button class="new" @click="sortByNewest">Newest Cards</button>
<button class="old" @click="sortByOldest">Oldest Cards</button>

<div class="archive-dropdown">
      <div class="dropdown">
        <button @click="showArchiveDropdown = !showArchiveDropdown">Archive</button>
        <div v-if="showArchiveDropdown" class="dropdown-menu">
          <ul>
            <li v-for="option in archiveOptions" :key="option.label">
              <a @click="selectArchiveOption(option)">{{ option.label }}</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <span class="selected-option">{{ selectedArchiveOption }}</span>
    </div>
</div>


        <div v-if="!admin" class="admin-page">
    <form @submit.prevent="createCard">
      <label for="imageUpload" class="custom-file-label">Choose an image</label>
<input id="imageUpload" type="file" accept="image/jpeg" @change="handleImageUpload" required class="custom-file-input">

<div class="input-container">
      <input class='input-line full-width' type="text" v-model="title" placeholder="Názov" required></div>
      <div class="input-container">
      <input id="up" class='input-line full-width' v-model="description" placeholder="Popis" required></div>
      
      <button type="submit">Submit</button>
    </form>
  </div>


            <div class="container">
                <div class="box-container">

                  
                  
          <div class="box" v-for="(card, index) in filteredCards" :key="index">
          <img class="fw1" :src="card.imageUrl" alt="">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
          <a href="#">Zobraziť viac</a>
          <button v-if="!admin" @click="deleteCard(index)">Delete</button>
              </div>
            </div>
  
                   
                <!-- <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>

                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>

                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>

                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>
                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>

                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>
                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>

                <div class="box">
                    <img class="fw1" src="/images/flowers.svg" alt="">
                    <h2>Cenník špeciálnych osív na rok 2023</h2> 
                    <p>Pozrite si aktuálny cenník špeciálnych osív na rok 2022.</p> 
                    <a href="#">Zobraziť viac</a>
                </div>
                   -->

                
            </div>
             </div>




</template>

<script>
export default {
  data() {
    return {
      title: '',
      admin: false,
      image: null,
      imageUrl: '',
      description: '',
      showArchiveDropdown: false,
      showArchiveDropdown: false,
      selectedArchiveOption: '',
      cards: [],
      searchText:'',
      date: ''
    };
  },
  created() {
    this.loadCardsFromStorage();
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.image = file;
      this.imageUrl = URL.createObjectURL(file);
    },
    
    deleteCard(index) {
  this.cards.splice(index, 1);
  this.saveCardsToStorage();
},
sortByOldest() {
    this.cards.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  },
  sortByNewest() {
    this.cards.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });
  },
    selectArchiveOption(option) {
      this.selectedArchiveOption = option.label;
      this.showArchiveDropdown = false;
    },

    createCard() {
      const newCard = {
        title: this.title,
        image: this.image,
        imageUrl: this.imageUrl,
        description: this.description
      };
      this.cards.push(newCard);
      this.saveCardsToStorage();
      this.resetForm();
    },
    resetForm() {
  this.title = '';
  this.image = null;
  this.imageUrl = '';
  this.description = '';

  const fileInput = document.querySelector('input[type="file"]');
  fileInput.value = ''; 
},
    saveCardsToStorage() {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    },
    loadCardsFromStorage() {
      const storedCards = localStorage.clear('cards');
      if (storedCards) {
        this.cards = JSON.parse(storedCards);
      }
    }
  },
  computed: {
  filteredCards() {
    return this.cards.filter(card => {
      return card.title.toLowerCase().includes(this.searchText.toLowerCase());
    });
  },
    archiveOptions() {
    const options = [];

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    
    for (let year = currentYear; year >= 2016; year--) {
      for (let month = 12; month >= 1; month--) {
        options.push({
          year,
          month,
          label: `${year}-${month.toString().padStart(2, '0')}`
        });

        if (year === currentYear && month === currentMonth) {
          break;
        }
      }
    }

    return options;
  },
  

},

};
</script>


<style scoped>

*{

 box-sizing: border-box;
}
.input-container {
  display: block;
  margin-bottom: 10px;
}

input {
  border: transparent;
}

::-webkit-input-placeholder .input-line:focus +::input-placeholder {
color: #fff;
}

.highlight {
color: rgba(255, 255, 255, 0.8);
font-weight: 400;
cursor: pointer;
transition: color .2s ease;
}

.highlight:hover {
color: #fff;
transition: color .2s ease;
}


#up{
  line-height: 160px;
}
.spacing {
-webkit-box-flex: 1;
-webkit-flex-grow: 1;
-ms-flex-positive: 1;
flex-grow: 1;


text-align: center;
color: rgba(5, 4, 2, 0.80);
text-align: center;
font-size: 14px;
font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
line-height: 22px;
}

.input-line:focus {
outline: none;
border-color: black;
-webkit-transition: all .2s ease;
transition: all .2s ease;
}

.ghost-round {
cursor: pointer;
background: none;
border: none;
background: black;
border-radius: 25px;
color: var(--white, #E9E5E0);
-webkit-align-self: flex-end;
-ms-flex-item-align: end;
align-self: flex-end;
font-size: 14px;

font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 300;
line-height: 2.8em;
margin-top: 25px;
margin-bottom: 25px;
-webkit-transition: all .2s ease;
transition: all .2s ease;
}

.ghost-round:hover {

-webkit-transition: all .2s ease;
transition: all .2s ease;
}

.search{
display: grid;
place-items: start;
align-self: start;
align-content: start;
justify-content: start;


}

.boost-round {
cursor: pointer;
background: none;
border: none;
background: transparent;
border-radius: 25px;

border: solid 1px black;
font-family: Plus Jakarta Sans;
font-style: normal;
font-weight: 500;
line-height: 22px;
color: rgba(5, 4, 2, 0.80);
-webkit-align-self: flex-end;
-ms-flex-item-align: end;
align-self: flex-end;
font-size: 14px;

font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 300;
line-height: 2.8em;
margin-top: 25px;
margin-bottom: 25px;
-webkit-transition: all .2s ease;
transition: all .2s ease;
}

.input-line {
background: none;
margin-bottom: 10px;
line-height: 2.9em;
color: rgba(5, 4, 2, 0.40);

font-weight: 300;
letter-spacing: 0px;
letter-spacing: 0.02rem;
font-size: 19px;
font-size: 1.2rem;
border-bottom: 1px rgba(5, 4, 2, 0.40) solid;
-webkit-transition: all .2s ease;
transition: all .2s ease;
}

.full-width {
width: 362px;
}

/* CSS for the layout */
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

}

.search-bar {
  flex: 1; /* Take up remaining space */
}

.spacer {
  flex: 1; /* Take up remaining space */
}

.buttons {
  display: flex;
  align-items: center;
  
  gap:14px;
}

/* Add your existing button styles here */

.old{
  place-items: center;
  display: flex;
  border: solid 1px black;
  background: transparent;
  border-radius: 19px;
  cursor: pointer;
  padding:9px 20px;
}

.new{
  display: flex;
justify-content: flex-end;
  right: 8cm;
  border: solid 1px black;
  background: transparent;
  border-radius: 19px;
  cursor: pointer;
  padding:9px 20px;
}
.custom-file-label {
  background-color: transparent;
  width: 303px;
height: 303px;

  border-radius: 20px;
border: 1px dashed rgba(5, 4, 2, 0.40);
  cursor: pointer;
  display: inline-block;
}

.admin-page{
  
  justify-content: center;
  place-items: center;
  display: flex;
  color: rgb(0, 0, 0);


  margin: 0 auto;

}


.admin-page h1{
  color: #ffffff;
  font-size: 40px;
 margin-right: 4cm;

}


.admin-page button{
background: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border: none;
place-items: start;
place-content: start;
justify-content: start;
border-radius: 20px;
width: 100px;
height: 40px;
margin-left: 3cm;

}





.fw1 {
border-radius: 20px;
width: 500px;
height: 320px;
}

.container{
  display: flex;
  justify-content: center;
}

.container .box-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 20px;
}


@media screen and (max-width: 768px) {
  .container .box-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}

@media screen and (max-width: 576px) {
  .container .box-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

.container .box-container .box{
border-radius: 5px;
text-align: start;
}

.box {
    line-height: 19px;
}

.box h2 {
    font-size: 18px;
    font-weight: 600;
}

.box p {
    font-size: 15px;
    font-weight: 500;
}

.box a{
    font-size: 15px;
    font-weight: 600;
    color: #2C3714;
}


.container .box-container .box img {

    background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.36) 100%
  );
  border-radius: 20px;
    display: block;
  /* height: 266px; */
  position: relative;
}

.blue1 {
    display: table;
    width: 100%;
    padding-top: 3cm;
    color: rgb(0, 0, 0);
    
  
   
  }
  
  .blue2 {
    height: 300px;
    width: 40%;
    display: table-cell;
    padding-left: 30px;
    color: #050402;
    font-family: 'Recia';
font-style: normal;
font-weight: 600;
    font-size: 6em;
  }
  
  .blue3 {
    height: 300px;
    width: 30%;
    display: table-cell;
    font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
line-height: normal;
letter-spacing: 0.225px;
  padding-right: 20px;
  color: rgba(35, 25, 10, 0.80);
    font-size: 3em;
  }
  .blue3 br {
    display: none;
  }


  .blue4 {
    height: 300px;
    width: 30%;
    display: table-cell;
    font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
padding-right: 20px;
line-height: normal;
letter-spacing: 0.225px;
color: rgba(35, 25, 10, 0.80);
    font-size: 3em;

  }


  @media (max-width: 2000px){
    
    .blue2 {
        height: 300px;
        width: 40%;
        display: table-cell;
        padding-left: 30px;
        
        font-size: 48px;
      }
      .blue3 br {
    display: none;
  }
      .blue3 {
        height: 300px;
        width: 30%;
        display: table-cell;
      
        font-size: 20px;
      }
      .blue4 {
        height: 300px;
        width: 30%;
        display: table-cell;
        padding-right: 20px;
        font-size: 20px;
    
      }

      .blue4 br {
        display: none;
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
      padding-left: 30px;
      font-size: 21px;
    }
    .blue4 {
        padding-left: 60px  10;
        padding-right: 30px;
        font-size: 21px;
      }

      .blue4 br {
        display: none;
      }
  
    }

    
  @media (max-width: 1000px){
    .blue1{
       display: block;
     
       
    }
    .blue2 {
      display: block;
      height: auto;
      width: auto;
      font-size: 31px;
      
      padding-right: 30px;
      padding-left: 30px;
    }
    .blue3 br {
      display: none;
    }
    .blue1 br {
      display: none;
    }
    .blue3 {
      display: block;
      height: auto;
      width: auto;
      
      font-size: 20px;
      padding-left: 30px;
      padding-right: 30px;
      
      
      
    }
    .blue4 {
        display: block;
        height: auto;
        width: auto;
        font-size: 20px;
        padding-left: 30px;
        padding-right: 30px;
        
      }
  }


    .search-bar {
  display: block;
  align-items: start;
  margin-bottom: 10px;
  margin-left: 20px;
  place-content: start;
}

.search-bar input {
  flex: 1;
  place-content: start;
  padding: 9px 20px;
  border: 1px solid #000;
  border-radius: 20px;
  outline: none;
  background: #F4F0EB;}

.archive-dropdown {
  display: flex;
  align-items: center;
  

}

.dropdown {
  position: relative;
}

.dropdown button {
  background: transparent;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 9px 20px;
  margin-right:20px;
}

.dropdown-menu {
  position: absolute;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
  top: 30px;
  left: 0;
  z-index: 1;
}

.dropdown-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-menu li {
  margin-bottom: 5px;
}

.dropdown-menu a {
  display: block;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
}

.dropdown-menu a:hover {
  background-color: #f1f1f1;
}

.selected-option {
  margin-left: 10px;
  font-weight: bold;
}


</style>