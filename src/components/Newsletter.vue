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
@media (max-width: 1000px){
    #example1 {
      background-repeat: no-repeat;
      background-size: cover;
      position: absolute;
      display: flex;
    margin: 57cm auto;
     border-top: solid rgb(233, 201, 22);
    
      background-color: #2C3714;
      /* background-image:  url(/images/yellomob.svg); */
      
      width: 100%;
      
      border-radius: 2em;
      background-position:right;
      height: 330px;
       
  
  
  }

#example1 h1 {
  color: white;
  display: flex; 
  width: auto;
 position: absolute;
 top: 3em;
  margin-left: 1cm;
  font-size: 26px;
  text-align: start;

  
  
  }
  #example1 p {
    color: white;
    font-size: 14px;
    display: flex; 
    position: absolute;
    bottom: 1em;
    margin-left: 1cm;
    max-width: 310px;
    font-size: 1em;
   
 
    
    }


    input[type=text]
{
  width: 100%;
  padding: 15px;
  margin-top: 0cm;
  margin: 10px 0;
position: absolute;
  border: 1px solid #ccc;
  display: flex;
}

input[type=submit] 
{
  border-radius: 2cm;
  height: 30px;
  width: 3cm;
  cursor: pointer;
  display: block;
  margin-top: 5.5cm;
  right: 1cm;
 position: absolute;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
}
input[type=submit]:hover 
{
  opacity: 1;
}
.form__group {
  position: absolute;
  padding: 15px 0 0;
  margin-top: 5cm;
  width: 100%;
  margin-left: 1cm;
}

.form__field {
  font-family: inherit;
  width: 40%;

  border: 0;
  border-bottom: 1px solid rgb(255, 255, 255);
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
  }


  @media (min-width: 1000px){
  
  #example1 {
    border-radius:2em ;
    background:   url(/images/yell.svg) repeat-y;
    background-size: 73% auto;
    background-color: #2C3714;
    max-width: 1900px;
    border-left: solid #E9E5E0 9px;
    border-right: solid #E9E5E0 9px;
    background-position:right;
    height: 476px;
    padding: 15px ;
    object-fit: cover;
    margin-top: 0cm;
    margin: 30cm auto ;
    padding-left: 1cm;

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
  height: 30px;
  width: 3cm;
  position: absolute;
  display: block;
  
  margin-left: 12cm;
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
</style>