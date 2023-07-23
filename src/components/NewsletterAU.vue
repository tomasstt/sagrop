<template>
    <div>
        <div id="example1">
        <h1>Prihláste sa k odberu <br> nášho newslettera!</h1>

        
        <div class="form__group field">
  <input type="input" class="form__field" placeholder="Mail" name="name" id='name' required />
  <label for="name" class="form__label">Vaša e-mailová adresa:</label>
      </div>
    

       <div class="containera">
        <input type="submit" value="Prihlásiť sa">
      </div>
      <p>Táto stránka je chránená reCAPTCHA a platia zásady ochrany osobných údajov <br> a Zmluvné podmienky spoločnosti Google.</p>
      
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>


.containera{
  cursor: pointer;
 
}
@media (max-width: 1000px){
  #example1 {
    border-radius:2em ;
    background:  transparent;
    
    background-color: #2C3714;
    max-width: 90%; 
    /* 1900px */
    border-left: solid #E9E5E0 1px;
    border-right: solid #E9E5E0 px;   
    background-position:right;
    height: 360px;
    padding: 15px ;
    object-fit: cover;
    
    margin:  auto ;
    padding-left: 1cm;

}
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  
#example1 h1 {
  color: white;
  font-size: 28px;
  
  }
  #example1 p {
    color: white;
    font-size: 12px;
    font-family: 'Plus Jakarta Sans';
    }
    }
  
input[type=text]
{
  width: 50%;
  padding: 15px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


input[type=submit]:hover 
{
  background: rgb(0, 0, 0);
  transition: .4s;
  color: white;
}


input[type=submit] 
{
  border-radius: 2cm;
  height: 40px;
  width: 3.0cm;
  display: flex;
  place-content: center;
  align-items: end;
  align-content: end;
  place-items: end;

cursor: pointer;
margin-top: 0.5cm;
font-weight: 500;

  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
}



.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
 
  width: 100%;
  border: 0;
  border-bottom: 1px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition:  0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right);
}

/* Reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}

  

  


  @media (min-width: 1000px){
  
  #example1 {
    border-radius:2em ;
    background:   url(/images/yell.svg) no-repeat;
    background-size:  50%;
    background-color: #2C3714;
    max-width: 94%; 
    /* 1900px */
    border-left: solid #E9E5E0 1px;
    border-right: solid #E9E5E0 px;   
    background-position:right;
    height: 476px;
    padding: 15px ;
    object-fit: cover;
    
    margin:  auto ;
    padding-left: 1.9cm;

}
  
#example1 h1 {
  color: white;
  font-size: 48px;
  }
  #example1 p {
    color: white;
    font-size: 12px;
    }
  
input[type=text]
{
  width: 50%;
  padding: 15px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


input[type=submit]:hover 
{
  opacity: 1;
}


input[type=submit] 
{
  border-radius: 2cm;
  height: 50px;
  width: 3.2cm;
  display: flex;
  place-content: center;
  align-items: end;
  align-content: end;
  place-items: end;
margin-left: 14cm;
position: absolute;
cursor: pointer;
margin-top: -1.4cm;
font-weight: 500;

  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
}



.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  
}

.form__field {
  font-family: inherit;
  width: 40%;
  border: 0;
  border-bottom: 1px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition:  0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right);
}

/* Reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}
  }



  @media (max-width: 1460px) and (min-width: 1000px){
    #example1 {
    border-radius:2em ;
    background:   url(/images/yell.svg) no-repeat;
    background-size:  54%;
    background-color: #2C3714;
    max-width: 90%; 
    /* 1900px */
    border-left: solid #E9E5E0 1px;
    border-right: solid #E9E5E0 px;   
    background-position:right;
    height: 360px;
    padding: 15px ;
    object-fit: cover;
    
    margin:  auto ;
    padding-left: 1.9cm;

}

  
#example1 h1 {
  color: white;
  font-size: 28px;
  }
  #example1 p {
    color: white;
    font-size: 12px;
    }
  
input[type=text]
{
  width: 50%;
  padding: 15px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}


input[type=submit]:hover 
{
  background: rgb(0, 0, 0);
  transition: .4s;
  color: white;
}


input[type=submit] 
{
  border-radius: 2cm;
  height: 40px;
  width: 3.0cm;
  display: flex;
  place-content: center;
  align-items: end;
  align-content: end;
  place-items: end;
margin-left: 9cm;
position: absolute;
cursor: pointer;
margin-top: -1.4cm;
font-weight: 500;

  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
}



.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
}

.form__field {
 
  width: 40%;
  border: 0;
  border-bottom: 1px solid gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 7px 0;
  background: transparent;
  transition:  0.2s;
}

.form__field::placeholder {
  color: transparent;
}

.form__field:placeholder-shown ~ .form__label {
  font-size: 1.3rem;
  cursor: text;
  top: 20px;
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: gray;
}

.form__field:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right);
}

/* Reset input */
.form__field:required,
.form__field:invalid {
  box-shadow: none;
}

  }
</style>