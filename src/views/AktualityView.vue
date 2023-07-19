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
      <input type="text" v-model="searchText" placeholder="Hladat" />
    </div>
        <div>
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
      <span class="selected-option">{{ selectedArchiveOption }}</span>
    </div>
</div>
<button class="old" @click="sortByOldest">Oldest Cards</button>
<button class="new" @click="sortByNewest">Newest Cards</button>
</div>


        <div v-if="!admin" class="admin-page">
    <form @submit.prevent="createCard">
      <input type="text" v-model="title" placeholder="Názov" required>
      <label for="imageUpload" class="custom-file-label">Choose an image</label>
<input id="imageUpload" type="file" accept="image/jpeg" @change="handleImageUpload" required class="custom-file-input">

      <textarea v-model="description" placeholder="Popis" required></textarea>
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


.bar{
  place-content: end;
display: flex;
}
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
  background-color: #f7f7f7;
  padding: 90px;
  border: 2px dotted black;
  border-radius: 25px;
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
::placeholder{
  color: black;
}

.admin-page input{
text-align: center;
background: white;
border: solid 1px;
border-radius: 20px;
color: black;
caret-color: #2C3714;
height: 40px;
width: 400px;
margin-right: 1cm;
line-height: 40px;
}


.admin-page h1{
  color: #ffffff;
  font-size: 40px;
 margin-right: 4cm;

}

 textarea{
background: transparent;
border-radius: 20px;
line-height:  auto;
margin-top: 0px; /* Add spacing only at the top */
  margin-bottom: -14px;
text-align: center;
background: white;
width: 400px;
height: 40px;

}
.admin-page button{
background: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border: none;
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
    
    color: rgb(0, 0, 0);
    padding-top: 2.5cm;
   
  }
  
  .blue2 {
    height: 300px;
    width: 45%;
    display: table-cell;
    padding-left: 30px;
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
    display: table-cell;
    padding-right: 1cm;
    
    font-size: 3em;
  }
  .blue4 {
    height: 300px;
    width: 30%;
    display: table-cell;
  padding-right: 20px;
    font-size: 3em;

  }

  @media (max-width: 2000px){
    
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
        padding-bottom: 200px;
        display: table-cell;
       
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
}

.archive-dropdown {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0cm;

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