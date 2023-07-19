<template>
    <div>
        <nav class="nav"  :class="{ affix: isScrolled }">
      <div class="container">
        <div class="logo">
          <a href="/"><img src="/images/Logo Sagrop.png" width="140" alt="" /></a>
        </div>
        <div id="mainListDiv" :class="{ show_list: !isMenuActive } " class="main_list">
          <ul class="navlinks">
            <li>
              <RouterLink @click="closeClick" active-class="active" to="/">
                Domov
                <template v-if="$route.path === '/'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink @click="closeClick"   active-class="active" to="/about">
                O nás
                <template v-if="$route.path === '/about'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink @click="closeClick"  active-class="active" to="/komodity">
                Komodity
                <template v-if="$route.path === '/komodity'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink  @click="closeClick" active-class="active" to="/sluzby">
                Služby   
                             <template v-if="$route.path === '/sluzby'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink @click="closeClick"  active-class="active" to="/aktuality">
                Aktuality               
                 <template v-if="$route.path === '/aktuality'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink @click="closeClick"  active-class="active" to="/kontakty">
                Kontakty               
                 <template v-if="$route.path === '/kontakty'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            <li>
              <RouterLink @click="closeClick"  active-class="active" to="/signup">
                Admin               
                 <template v-if="$route.path === '/signup'">
                  <svg width="6" height="7" viewBox="0 0 6 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3" cy="3.5" r="3" fill="#2D3D36" />
                  </svg>
                </template>
              </RouterLink>
            </li>
            
     
          </ul>
        </div>
        <span @click="toggleMenu" :class="{ active: isMenuActive }" class="navTrigger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>

  

    </div>
</template>



<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>

export default {
  data() {
    return {
      isScrolled: false,
      isMenuActive: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 50) {
        this.isScrolled = true;
        console.log('OK');
      } else {
        this.isScrolled = false;
      }
    },
    closeClick() {
  if (window.innerWidth <= 1200) {
    mainListDiv.style.display = 'none';
    this.isMenuActive = !this.isMenuActive;
  }
},

    toggleMenu() {
      if (window.innerWidth <= 1200) {
  this.isMenuActive = !this.isMenuActive;
  const mainListDiv = document.getElementById('mainListDiv');
  if (this.isMenuActive) {
    mainListDiv.style.display = 'block';
  } else {
    mainListDiv.style.display = 'none';
  }}
},
    activeShit() {
        const active = document.getElementsByClassName(".active");
        if (active === active) {
            

        }
    }

  }
};
</script>
<style scoped >

.navlinks a{
    color: #050402;
   font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
line-height: 22px;
   font-weight: 500;
   font-size: 15px;
   
}  

.navlinks svg {
  margin-bottom: 4px;
    margin-left: 6px;
}








.navlinks a:not(.active) {
  color: rgb(0, 0, 0); /* Set the default color for inactive links */
  
}






.nav {
    width: 100%;
    height: 80px;
    position: fixed;
    line-height: px;
    line-height: 56px;
    text-align: center;
z-index: 10;
}

.nav div.logo {
    float: left;
    width: auto;
    height: auto;
    padding-left: 30px;
}

.nav div.logo a {
    text-decoration: none;

    font-size: 2.5rem;
}



.nav div.main_list {
    height: 65px;
    float: right;
}

.nav div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 5rem;
}



.nav div.main_list ul li a {
    text-decoration: none;
  
    line-height: 10px;
    font-size: 2.4rem;
}








.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}


.navTrigger {
    display: none;
}

.nav {
    padding-top: 20px;
    padding-bottom: 20px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
}


/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
        margin: 0;
   
    }
}

@media screen and (max-width:1200px) {
    .navTrigger {
        display: block;
    }
    .nav div.logo {
        margin-left: 0px;
    }
    .nav div.main_list {
        width: 100%;
        height: auto;
        margin-top: -17px;
        overflow: hidden;
    }
    .nav div.show_list {
        height: auto;
        display: none;
    }
    .nav div.main_list ul {
        flex-direction: column;
        width: 100%;
        height: 100vh;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: #E9E5E0;
        /*same background color of navbar*/
        background-position: center top;
    }
    .nav div.main_list ul li {
        width: 100%;
        text-align: right;
    }
    .nav div.main_list ul li a {
        text-align: center;
        width: 100%;
        font-size: 3rem;
        padding: 20px;
    }
    .nav div.media_button {
        display: block;
    }
}


/* Animation */
/* Inspiration taken from Dicson https://codemyui.com/simple-hamburger-menu-x-mark-animation/ */

.navTrigger {
    cursor: pointer;
    width: 30px;
    height: 25px;
    margin: auto;
    position: absolute;
    right: 30px;
    top: 0;
    bottom: 0;
}

.navTrigger i {
    background-color: rgb(0, 0, 0);
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
}

.navTrigger i:nth-child(1) {
    -webkit-animation: outT 0.8s backwards;
    animation: outT 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger i:nth-child(2) {
    margin: 5px 0;
    -webkit-animation: outM 0.8s backwards;
    animation: outM 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger i:nth-child(3) {
    -webkit-animation: outBtm 0.8s backwards;
    animation: outBtm 0.8s backwards;
    -webkit-animation-direction: reverse;
    animation-direction: reverse;
}

.navTrigger.active i:nth-child(1) {
    -webkit-animation: inT 0.8s forwards;
    animation: inT 0.8s forwards;
}

.navTrigger.active i:nth-child(2) {
    -webkit-animation: inM 0.8s forwards;
    animation: inM 0.8s forwards;
}

.navTrigger.active i:nth-child(3) {
    -webkit-animation: inBtm 0.8s forwards;
    animation: inBtm 0.8s forwards;
}

@-webkit-keyframes inM {
    50% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes inM {
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes outM {
    50% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(45deg);
    }
}

@keyframes outM {
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(45deg);
    }
}

@-webkit-keyframes inT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes inT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(9px) rotate(0deg);
    }
    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes outT {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(9px) rotate(135deg);
    }
}

@keyframes outT {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(9px) rotate(0deg);
    }
    100% {
        transform: translateY(9px) rotate(135deg);
    }
}

@-webkit-keyframes inBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes inBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-9px) rotate(0deg);
    }
    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}

@-webkit-keyframes outBtm {
    0% {
        -webkit-transform: translateY(0px) rotate(0deg);
    }
    50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
    }
    100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
    }
}

@keyframes outBtm {
    0% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-9px) rotate(0deg);
    }
    100% {
        transform: translateY(-9px) rotate(135deg);
    }
}

.affix {
    padding: 0;
   
    background-color: #E9E5E0;
}


</style>