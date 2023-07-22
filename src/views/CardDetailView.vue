<!-- CardDetailView.vue -->

<template>
    <div>
      <!-- Display the card details if the "card" prop is available, otherwise show a loading message or error -->
      <div v-if="card">
        <h2>{{ card.title }}</h2>
        <img :src="card.imageUrl" alt="">
        <p>{{ card.description }}</p>
      </div>
      <div v-else>
        <p>Loading...</p>
   
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      card: Object, // Receive the "card" prop from the router
    },
  };
  </script>
  