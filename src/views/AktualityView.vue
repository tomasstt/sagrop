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
        <div class="search-bar"><svg class="icon-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M7.66634 13.9999C11.1641 13.9999 13.9997 11.1644 13.9997 7.66659C13.9997 4.16878 11.1641 1.33325 7.66634 1.33325C4.16854 1.33325 1.33301 4.16878 1.33301 7.66659C1.33301 11.1644 4.16854 13.9999 7.66634 13.9999Z" stroke="#3B3731" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6663 14.6666L13.333 13.3333" stroke="#3B3731" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <input class="search" type="text" v-model="searchText" placeholder="Hladat" />
      
    </div>

    <div class="spacer"></div>
  <div class="buttons">
<button class="new" @click="sortByNewest">Najnovšie</button>
<button class="old" @click="sortByOldest">Najstaršie</button>

<div class="archive-dropdown">
      <div class="dropdown">
        <button @click="showArchiveDropdown = !showArchiveDropdown"> <span>  Archív</span><svg class="archIcon" width="25px" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"></path>
</svg></button>
        <div v-if="showArchiveDropdown" class="dropdown-menu">
          <ul>
            <li v-for="option in archiveOptions" :key="option.label">
              <a @click="selectArchiveOption(option)">{{ option.label }}</a>
            </li>
          </ul>
        </div>
        </div> 
      </div>
    </div>
</div>


        <div v-if="!admin" class="admin-page">
    <form @submit.prevent="createCard" class="form-container">
      
      <div class="drag-area" :class="{ 'active': isActive }" @dragover.prevent="onDragOver" @dragleave="onDragLeave" @drop.prevent="onDrop" >
       
        <svg class="brow" xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
<path d="M26.833 3.83325H17.2497C7.66634 3.83325 3.83301 7.66659 3.83301 17.2499V28.7499C3.83301 38.3333 7.66634 42.1666 17.2497 42.1666" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.166 19.1665V24.9165" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M42.1663 19.1666H34.4997C28.7497 19.1666 26.833 17.2499 26.833 11.4999V3.83325L42.1663 19.1666Z" stroke="#A6A29D" stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.3732 34.9986C21.8691 35.3244 21.8691 41.8411 26.3732 42.1669H37.0299C38.3141 42.1669 39.5791 41.6877 40.5182 40.8252C43.6807 38.0652 41.9941 32.5452 37.8349 32.0277C36.3399 23.0386 23.3449 26.4502 26.4116 35.0177" stroke="#A6A29D" stroke-width="2.875" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      <header v-text="dragText"></header>
      
      <div class="or">or<a class="browse" @click="browseFile" > browse </a></div>
      <input type="file"  ref="fileInput" required hidden @change="handleImageUpload">
    </div>
      <!-- <label for="imageUpload" class="custom-file-label">Choose an image</label>
<input id="imageUpload" type="file" accept="image/jpeg" @change="handleImageUpload" required class="custom-file-input"> -->

<div class="input-container">
      <input class='input-line full-width' type="text" v-model="title" placeholder="Názov" required>
     
      <input id="up" class='input-line full-width' v-model="description" placeholder="Popis" required></div>
      
      <button type="submit">Submit</button>
    </form>
  </div>


            <div class="container">
                <div class="box-container">

                  
                  
          <div class="box" v-for="(card, index) in paginatedCards" :key="index">
          <img class="fw1" :src="card.imageUrl" alt="">
          <h2>{{ card.title }}</h2>
          <p>{{ card.description }}</p>
          <!-- <router-link :to="{ name: 'cardDetail', params: { id: index }, props: { card } }">
        Zobraziť viac
      </router-link> -->
          <button class="delete-button" v-if="!admin" @click="deleteCard(index)">Vymazať</button> 
              </div>
            </div>
            </div>
            <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1" class="arrow-btn">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0002 13.28L5.65355 8.9333C5.14022 8.41997 5.14022 7.57997 5.65355 7.06664L10.0002 2.71997" stroke="#050402" stroke-opacity="0.6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
    <span v-for="pageNumber in totalPages" :key="pageNumber">
      <button @click="changePage(pageNumber)" :class="{ active: pageNumber === currentPage }">
        {{ pageNumber }}
      </button>
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages" class="arrow-btn">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.99978 2.72003L10.3464 7.0667C10.8598 7.58003 10.8598 8.42003 10.3464 8.93336L5.99978 13.28" stroke="#050402" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
  </div>
             </div>

             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-cV5lumV66EPpxFsNmR5P5K5J6pxzrIMjFgaBzZSUO2Fm2z4MWf0ykInI2P4FffA2" crossorigin="anonymous">


<Footer class="space"></Footer>
</template>


<script>
import CardDetailViewVue from './CardDetailView.vue';
import Footer from '../components/Footer.vue';
export default {
  components: 
    {CardDetailViewVue,Footer}
  ,
  data() {
    return {
      title: '',
      admin: false,
      cards: [],
      image: null,
      imageUrl: '',
      description: '',
      showArchiveDropdown: false,
      selectedArchiveOption: '',  
      droppedFile: null,    
      cardsPerPage: 12, 
      currentPage: 1,
      cards: [],
      searchText:'',
      date: '', 
      isActive: false,
      dragText: 'Drop files to upload',
      file: null,
      validExtensions: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/svg+xml", "image/jpg"],
    };
  },
  created() {
    this.loadCardsFromStorage();
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },

    
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },

    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    browseFile() {
          this.$refs.fileInput.click();
        },
        onFileChange(event) {
          const file = event.target.files[0];
      this.image = file;
      this.imageUrl = URL.createObjectURL(file);
        },
        onDragOver(event) {
          event.preventDefault();
          this.isActive = true;
          this.dragText = "Release to Upload File";
        },
        onDragLeave() {
          this.isActive = false;
          this.dragText = "Drop files to upload";
        },
        onDrop(event) {
         
          this.file = event.dataTransfer.files[0];
          this.showFile();
          this.imageUrl = URL.createObjectURL(file);
        },
        showFile() {
          if (this.validExtensions.includes(this.file.type)) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
              const fileURL = fileReader.result;
              const imgTag = `<img src="${fileURL}" alt="image">`;
              this.$el.querySelector(".drag-area").innerHTML = imgTag;
            };
            fileReader.readAsDataURL(this.file);
          } else {
            alert("This is not an Image File!");
            this.isActive = false;
            this.dragText = "Drag & Drop to Upload File";
          }
        },

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
       return dateA - dateB;
      });
    },

    selectArchiveOption(option) {
      this.selectedArchiveOption = option.label;
      this.showArchiveDropdown = false;
    },

    createCard() {
      const currentDate = new Date();
      const newCard = {
        title: this.title,
        image: this.image,
        imageUrl: this.imageUrl,
        description: this.description,
        date: currentDate.toISOString(),
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
      const storedCards = localStorage.getItem('cards');
      if (storedCards) {
        this.cards = JSON.parse(storedCards);
      }
    }
  },
  computed: {
    
    sortedCards() {
      
      return this.cards.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    },
    filteredCards() {
      return this.cards.filter((card) => {
        return card.title.toLowerCase().includes(this.searchText.toLowerCase());
      });
    },

    paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.cardsPerPage;
      const endIndex = startIndex + this.cardsPerPage;
      return this.filteredCards.slice(startIndex, endIndex);
    },

    totalPages() {
      return Math.ceil(this.filteredCards.length / this.cardsPerPage);
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
.space{
  margin-top: 27cm;
}


.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: none;
  font-family: 'Plus Jakarta Sans';
  
}

.pagination button {
  background-color: none;
  border: none;
  padding: 8px 12px;
  margin: 0 2px;
  cursor: pointer;
  border: none;
  color: #333;
  background: none;
  transition: background-color 0.3s ease;
}

.pagination button:hover {
  background-color: none;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: none;
}

.pagination .active {
  background-color: transparent;
  color: rgb(0, 0, 0);
  
}

.pagination .active:hover {
  background-color: none;
  opacity: 0.8;
}

/* Additional styles for arrow buttons */
.arrow-btn {
  font-size: 18px;
  width: 40px;
  background: none;
  border: none;
}





.or{
  font-size: 17px;
}
.browse {
  text-decoration: underline;
  font-size: 17px;
  color: var(--green, #2C3714);
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
font-weight: 600;
line-height: 32px; /* 188.235% */
letter-spacing: 0.255px;
cursor: pointer;
  
}

.icon-search{
  display: flex;
  position: absolute;
  margin-top: 10px;
  margin-left: 11px;
}

@media (max-width: 1000px) {
  .delete-button{


margin-left: 0.5cm;
border: solid 1px black;

background: transparent;
font-size: 13px;
border-radius: 19px;
cursor: pointer;
padding:7px 20px;






}
.dropdown span{
  display: none;
}
  .archIcon{
    display: block;
  }
  .brow{
    width: 30px;
}



  .drag-area header {
    display: none;
  }
  .drag-area span {
    
    display: none;
  }
  
  
  .drag-area img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

}




@media (min-width: 1000px) {


  .delete-button{


  
    border: solid 1px black;
    
    background: transparent;
    font-size: 13px;
    border-radius: 19px;
    cursor: pointer;
    padding:7px 20px;

  

  
  
  
  }

  .dropdown span{
  display: block;
}
  
  .archIcon{
    display: none;
  }
  .drag-area {
  border: 2px dashed rgba(5, 4, 2, 0.40);
    height: 303px;
    width: 303px;
    border-radius: 20px;
    font-family: 'Plus Jakarta Sans';
    display: flex;
   flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }


  .drag-area.active {
    border: 2px solid black;
  }
  .drag-area .icon {
    font-size: 100px;
    color: black;
  }
  .drag-area header {
    font-size: 17px;
    font-weight: 500;
    color: black;
    margin-top: 1cm;
  }
  .drag-area span {
    font-size: 15px;
    font-weight: 500;
    color: black;
    margin: 10px 0 15px 0;
  }
  
  .drag-area button {
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    outline: none;
    background: black;
    color: #5256ad;
    border-radius: 5px;
    cursor: pointer;
  }
  .drag-area img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

*{

 box-sizing: border-box;
}
.input-container {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  
  padding-left: 50px;
  
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

.form-container {
  display: flex;
  flex-direction: row; /* Set the form to be stacked vertically */

}

@media (min-width: 1000px) {
#up{
  line-height: 140px;
}

.trash{
  margin-left: 14cm;
}

}

@media (max-width: 999px) {
  #up{
  line-height: 40px;
  
}

.trash {
    display: flex;
    justify-content: flex-end; /* Aligns the icon to the right end */
    margin-left: 9cm;
    align-items: center; /* To center items vertically if needed */
  }


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
.search::placeholder {
padding-left: 1px;

  color: rgba(15, 11, 5, 0.40);
font-family: "Plus Jakarta Sans";
font-size: 13px;
  
}

.search{
display: grid;
place-items: start;
align-self: start;

align-content: start;
justify-content: start;
text-indent: 10px; 


}

.boost-round {
cursor: pointer;
background: none;
border: none;
background: transparent;
border-radius: 25px;

border: solid 1px black;

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
font-family: 'Plus Jakarta Sans';
border-bottom: 1px rgba(5, 4, 2, 0.40) solid;
-webkit-transition: all .2s ease;
transition: all .2s ease;
}
@media (min-width: 1000px) {
.full-width {
width: 362px;
}}

@media (max-width: 1000px) {
.full-width {
width: 160px;
}}

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
  font-size: 13px;
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
  padding-top: 67px;
  justify-content: start;
  place-items: center;
  display: flex;
  color: rgb(0, 0, 0);
padding-left: 20px;

  margin: 0 auto;

}


.admin-page h1{
  color: #ffffff;
  font-size: 40px;
 margin-right: 4cm;

}

@media (min-width: 1000px) {
.admin-page button{
background: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border: none;
place-items: start;
place-content: start;
justify-content: start;
align-self: end;
justify-content: start;
font-family: 'Plus Jakarta Sans'; 
font-size: 14px;
border-radius: 20px;
width: 100px;
height: 40px;
margin-left: -363px;
cursor: pointer;

}

.dropdown button {
  background: transparent;
  border: 1px solid black;
  border-radius: 20px;
  padding: 10px 30px;
  margin-right:20px;
}

}
@media (max-width: 1000px) {
.admin-page button{
background: rgb(0, 0, 0);
color: rgb(255, 255, 255);
border: none;





font-family: 'Plus Jakarta Sans'; 
font-size: 14px;
border-radius: 20px;
width: 100px;
height: 40px;
cursor: pointer;

}

}




.fw1 {
border-radius: 20px;
width: 500px;
height: 320px;
}

.container{
  display: flex;
  font-family: 'Plus Jakarta Sans';
  margin-top: 2cm;
  justify-content: center;
}
@media (min-width: 2000px) {
  .container .box-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}

/* For screens larger than or equal to 1000px but less than 2000px */
@media (min-width: 1000px) and (max-width: 1999px) {
  .container .box-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1000px) and (max-width: 1299px) {
  .container .box-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
/* For screens smaller than 1000px */
@media (max-width: 999px) {
  .container .box-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}



.container .box-container .box{
border-radius: 5px;
margin-left: 20px;
margin-right: 20px;
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

   
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
    
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
    .dropdown button {
  background: transparent;
  border:none;
  border-radius: 20px;
  padding: 5px 10px;
  margin-right:20px;
}


    .search-bar input {
  
  flex: 1;
  place-content: start;
  width: 93px;
  padding: 9px 20px;
  border: 1px solid #000;
  border-radius: 20px;
  outline: none;
  background: #F4F0EB;}

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