<template>
  <div>
    <!-- Blue section with title and description -->
    <section class="blue1">
      <section class="blue2">
        <h1 class="">Aktuality</h1>
      </section>
      <aside class="blue3">
        <p class="">
          Tu nájdete informácie o nových produktových <br>
          radoch, najnovších projektoch a iných <br>
          zaujímavých veciach, ktoré sa u nás dejú. Naša <br>
          snaha je udržiavať vás v obraze a informovať o <br>
          všetkom, čo sa deje v našej spoločnosti.
        </p>
      </aside>
      <aside class="blue4">
        <p class="">
          Sledujte naše novinky a buďte informovaní o <br>
          všetkých dôležitých zmenách a aktualizáciách.
        </p>
      </aside>
    </section>
    
    <!-- Article section -->
    <section>
      <div class="container">
        <div class="box-container">
          <!-- Display articles in a 2x2 grid -->
          <div class="box" v-for="(article, index) in displayedArticles" :key="index">
            <!-- Link to article details page -->
            <a :href="`http://localhost:5173/aktuality`">
              <!-- Article image, title, and content -->
              <img class="fw1" :src="article.article_image_url" :alt="article.article_title">
              <h2>{{ article.article_title }}</h2>
              <p>{{ article.article_content }}</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      articles: [], // Array to store fetched articles
      maxDisplayedArticles: 4, // Maximum number of articles to display
    };
  },
  created() {
    this.fetchArticles(); // Fetch articles when component is created
  },
  methods: {
    /**
     * Log an error to the backend and handle it.
     * @param {Error} error - The error object to be logged to the backend.
     */
    logErrorToBackend(error) {
      try {
        const loggerEndpoint = 'http://127.0.0.1:5402/api/log';
        const logData = { source: this.$options.name, message: error.message };

        // Send the error log to the backend using Axios
        axios.post(loggerEndpoint, logData).catch((error) => {
          console.error('Error logging to backend:', error);
        });

        // Display the error message to the user or handle it as needed
        console.error('Caught error:', error.message);
      } catch (error) {
        console.error('Error logging to backend:', error);
      }
    },

    /**
     * Fetch articles from the API.
     */
    async fetchArticles() {
      try {
        const response = await axios.get('http://127.0.0.1:5402/api/articles');
        this.articles = response.data;
      } catch (error) {
        this.logErrorToBackend(error); // Log and handle the error
      }
    },
  },
  computed: {
    /**
     * Get the articles to be displayed in the grid.
     * @returns {Array} - Array of articles to display.
     */
    displayedArticles() {
      return this.articles.slice(0, this.maxDisplayedArticles);
    },
  },
};
</script>

<style scoped>
.space{
  margin-top: 27cm;
}

.timestamp {
  font-size: 14px; /* Adjust the font size as needed */
  color: #999;
  margin-top: 6px;
  text-align: right; /* Align the timestamp to the right */
}

.image-preview {
  margin-top: 10px;
  text-align: center;
  margin-left: 400px;
}

.image-preview img {
  max-width: 100%;
  max-height: 200px; /* Adjust the max height as needed */
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
  margin-top: 17px;
  margin-left: 11px;
}

.page-dot {
  display: block;
  width: 4px;
  height: 4px;
  margin: 4px auto 0;
  border-radius: 50%;
  background-color: #3B3731; /* Adjust the color as needed */
}

@media (max-width: 1000px) {
  .delete-button{



border: solid 1px black;

background: transparent;
font-size: 13px;
border-radius: 19px;
cursor: pointer;
padding:7px 20px;






}
.or{
  font-size: 17px;
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
margin-top: 8px;
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
width: 80px;
height: 40px;
position: absolute;
margin-top: 3cm;
margin-left: -10px;
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
    grid-template-columns: repeat(2, 1fr); /* Set to two columns */
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