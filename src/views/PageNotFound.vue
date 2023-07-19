<template>
    <link href="//db.onlinewebfonts.com/c/7bb603131017eafae27426a37b652cb7?family=Recia" rel="stylesheet" type="text/css"/>
<div class="container">
    <h1>404 </h1>
    <p>Page Not Found</p>
    <a >   <button>  <router-link to="/" >Domov</router-link> </button></a>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/7bb603131017eafae27426a37b652cb7?family=Recia);
.container {
    display: grid;
  place-content: center;
  align-content: center;
  align-items: center;
  height: 90vh; /* Adjust the height as needed */

   
    
}
p{
    font-size: 15px;
    font-weight: 500;
    display: flex;
    place-content: center;
    align-content: center;
    align-items: center;
    place-items: center;
    margin-top: -50px;
    
}
a{
    text-decoration: none;
    color: black;
    font-size: 15px;
    display: grid;
    display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; 
    
    
}
h1{
    display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; 
  
    height: 140px;
    font-size: 200px;

    color: #2C3714;
    font-family: 'Recia';
}
router-link {
    text-decoration: none;
    display: flex;
    place-content: center;
    align-content: center;
    align-items: center;
    place-items: center;
    
}
button {
    outline: none; 
    color: black;
    text-decoration: none;
    width: 113px;
 
    height: 40px;
    text-align: center;
    align-content: center;

    background: transparent;
    border: solid 2px black;
    border-radius: 20px;
}


</style>