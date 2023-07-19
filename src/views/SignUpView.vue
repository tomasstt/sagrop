<template>
  <div>
      <div class='bold-line'></div>
<div class='container'>

<div class="img"><img src="/images/signup.svg" alt=""></div>
<div class='window'>
  <div class='overlay'></div>
  <div class='content'>
    <div class='welcome'>Prihlásiť sa</div>
    <div class='subtitle'>Už máte účet? Prihlásiť sa</div>
<div><button class='boost-round full-width'><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0019 8.76736V11.442H13.8131C13.3148 13.0628 11.9606 14.2223 10.0019 14.2223C7.66964 14.2223 5.77836 12.3316 5.77836 10C5.77836 7.66836 7.669 5.77773 10.0019 5.77773C11.0506 5.77773 12.0077 6.16209 12.7465 6.79464L14.7167 4.82509C13.472 3.69109 11.8175 3 10.0019 3C6.13473 3 3 6.13409 3 10C3 13.8659 6.13473 17 10.0019 17C15.8794 17 17.1763 11.505 16.6004 8.77691L10.0019 8.76736Z" fill="#050402" fill-opacity="0.8"/>
</svg>
Prihlásiť sa cez Google</button></div>
    <div class='spacing'>alebo</div>
    <div class='input-fields'>
      <input type='text' placeholder='Meno' class='input-line full-width'>
      <input type='email' placeholder='Email' class='input-line full-width'>
      <input type='password' placeholder='Heslo' class='input-line full-width'>

    </div>
    <!-- <div class='spacing'>or continue with <span class='highlight'>Facebook</span></div> -->
    
      <label class="checkk">
        <input type="checkbox"  />
       <p> Súhlasím s podmienkami služby a Ochranou osobných údajov</p>
      </label>
      <label class="check">
        <input type="checkbox"  />
     <p>   Prihláste sa k odberu nášho newslettera!</p>
      </label>
   
    <div><button class='ghost-round full-width'>Prihlásiť sa</button></div>
  </div>
</div>
</div>
  </div>
</template>

<script>
  export default {
      
  }
</script>

<style scoped >




svg {
position: absolute;
top: 191px;
left: 2cm;
}
.checkk {
color: var(--black, #050402);
font-size: 12px;
font-family: 'Plus Jakarta Sans';
font-style: normal;

font-weight: 400;


display: flex;


flex-shrink: 0;
}

.checkk p {
margin-top: 23px;
margin-left: 15px;
}

.check {
color: var(--black, #050402);
font-size: 12px;
font-family: 'Plus Jakarta Sans';
font-style: normal;

font-weight: 400;


display: flex;


flex-shrink: 0;

}

.check p {
  margin-left: 15px;
}

input {
border: none;
}

button:focus {
outline: none;
}

::-webkit-input-placeholder {
color: rgba(5, 4, 2, 0.40);
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
width: 100%;
}

.input-fields {
margin-top: 25px;
}

.container {
display: flex;
align-items: center;
justify-content: center;
place-items: center;
max-width: 100%;
max-height: 100%;
place-content: center;
}



.img img {
border-radius: 5px;
margin-right: 271px;
max-width: 100%; 
margin-top: 30px;
max-height: auto;
overflow: hidden;
height: 800px;
width: 530px;
max-width: 100%;


}
.content {
padding-left: 25px;
padding-right: 25px;
  
display: flex;
-webkit-flex-flow: column;
-ms-flex-flow: column;
flex-flow: column;
z-index: 5;
}

.welcome {
font-weight: 200;
margin-top: 75px;
color: var(--black, #050402);
font-family: 'Plus Jakarta Sans';
font-weight: 500;
line-height: 60px;
text-align: start;
font-size: 34px;
font-size: 2.5rem;

}

.subtitle {
text-align: start;
color: rgba(25, 25, 25, 0.80);
/* Body text/80% */
font-size: 15px;
font-family: 'Plus Jakarta Sans';
font-style: normal;
font-weight: 500;
line-height: normal;
}

.menu {

width: 100%;
height: 50px;
}

.window {
z-index: 100;
color: #fff;

position: relative;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-flow: column;
-ms-flex-flow: column;
flex-flow: column;
scale: 1.2;
box-sizing: border-box;
height: 560px;
width: 360px;


}

.overlay {


height: 560px;
position: absolute;
width: 360px;

z-index: 0;
}

.bold-line {

position: absolute;
top: 0px;
bottom: 0px;
margin: auto;
width: 100%;
height: 360px;
z-index: 1;
opacity:0.1;
 

}



@media (max-width:1200px) {

.overlay {
  width: 100%;
  height: 100%;
  
}
.container{

padding-top: 2cm;
}
img{
  display: none;
}

.window {
  scale: 1;
  margin-top: -1cm;
  width: 100%;
  height: 100%;
}
}</style>