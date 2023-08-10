<template>
  <div>
    <div class='bold-line'></div>
    <div class='container'>
      <div class="img"><img class="bg-image" src="/images/signup.svg" alt=""></div>
      <div class="form-container">
        <div class='window'>
          <div class='overlay'></div>
          <div class='content'>
            <div class='welcome'>Prihlásiť sa</div>
            <div class='subtitle'>Už máte účet? Prihlásiť sa</div>
            <div class="input-fields">
              <input
                type="email"
                placeholder="Email"
                class="input-line full-width"
                ref="emailInput"
                :class="{ 'invalid-input': showEmailError }"
              />
              <div v-if="showEmailError" class="error-message">Vyplňte prosím svoj e-mail!</div>
              <input
                type="password"
                placeholder="Heslo"
                class="input-line full-width"
                ref="passwordInput"
                :class="{ 'invalid-input': showPasswordError }"
              />
              <div v-if="showPasswordError" class="error-message">Vyplňte prosím svoje heslo!</div>
            </div>
            <label class="checkk">
              <input type="checkbox" />
              <p>Súhlasím s podmienkami služby a Ochranou osobných údajov</p>
            </label>
            <div>
              <button @click="login" class='ghost-round full-width'>Prihlásiť sa</button>
            </div>
            <div v-if="showSuccessMessage" class="success-message">Boli ste úspešne prihlásení</div>
            <!-- Display error messages -->
            <div v-if="errorMessage" class="error-message">
              <p v-for="(error, index) in errorMessage" :key="index">
                {{ error }}
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>

    <!-- Email Pop-up -->
    <div id="emailPopup" v-if="showEmailPopup">
      <div class="popup-content">
        <h2>Please fill out your Email!</h2>
        <button @click="closeEmailPopup">Close</button>
      </div>
    </div>

    <div id="passwordPopup" v-if="showPasswordPopup">
      <div class="popup-content">
        <h2>Please fill out your Password!</h2>
        <button @click="closePasswordPopup">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showEmailPopup: false,
      showPasswordPopup: false,
      showEmailError: false,
      showPasswordError: false,
      showSuccessMessage: false,
      errorMessage: null, // Initialize errorMessage to null
      filename: 'SignUpView.vue',
      successBoxStyle: '', // Add successBoxStyle to control the success box appearance
    };
  },

  methods: {
    closeEmailPopup() {
      this.showEmailPopup = false;
    },
    closePasswordPopup() {
      this.showPasswordPopup = false;
    },

    /**
     * Simulates an error and logs it to the backend using Axios.
     * @param {Error} error - The error object to be logged to the backend.
     */
    logErrorToBackend(error) {
      try {
        // Log the error to the backend
        const loggerEndpoint = 'http://127.0.0.1:5402/api/log';
        const logData = { source: this.filename, message: error.message };

        // Send the error log to the backend using Axios
        axios.post(loggerEndpoint, logData).catch((error) => {
          console.error('Error logging to backend:', error);
        });

        // You can also display the error message to the user or handle it as needed
        console.error('Caught error:', error.message);
      } catch (error) {
        console.error('Error logging to backend:', error);
      }
    },

    /**
     * Perform user login by sending a POST request to the backend login API endpoint.
     */
    async login() {
      const userData = {
        email: this.$refs.emailInput.value,
        password: this.$refs.passwordInput.value,
      };

      try {
        const response = await axios.post('http://127.0.0.1:5402/api/login', userData);
        const token = response.data.token;
        localStorage.setItem('token', token);

        // Check if user is admin
        const isAdmin = response.data.admin;

        // Show the success message for a few seconds
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);

        // Show successful sign-in message in green box for admins
        if (isAdmin) {
          this.successBoxStyle = 'background-color: green; color: white; padding: 10px;';
        } else {
          this.successBoxStyle = '';
        }

        // Clear error message
        this.errorMessage = null;
      } catch (error) {
        console.error('Error logging in:', error.message);
        this.logErrorToBackend(error);

        // Handle specific error messages for status code 400 and 401
        if (error.response) {
          if (error.response.status === 400 && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;
            let errorMessages = [];
            errors.forEach((err) => {
              errorMessages.push(err.msg);
            });
            this.errorMessage = errorMessages;
          } else if (error.response.status === 401) {
            this.errorMessage = ['Neplatný e-mail alebo heslo.'];
          } else {
            this.errorMessage = ['Pri prihlasovaní došlo k chybe.'];
          }
        } else {
          this.errorMessage = ['Pri prihlasovaní došlo k chybe.'];
        }

        // Clear success message
        this.showSuccessMessage = false;
      }
    },
  },
};
</script>

<style scoped>
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
  font-weight: 500;
  font-family: Plus jakarta sans;
}

.success-message {
  color: green;
  font-size: 12px;
  margin-top: 10px;
  font-weight: 500;
  font-family: Plus jakarta sans;
}
.form-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  justify-content: center;
  align-items: center;
  height: 100vh;
}


img{
  border-radius: 15px;
  height: 100vh;
scale: 0.79;
}

.img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  
}


.content {
padding-left: 25px;
padding-right: 25px;
padding-top: 2cm;
display: flex;
-webkit-flex-flow: column;
-ms-flex-flow: column;
flex-flow: column;
z-index: 5;
}

.welcome {
font-weight: 200;

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

/* .window {

background-color: #fff;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
padding: 2rem;
max-width: 400px;
width: 100%;
} */

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




@media (max-width:1000px) {

.overlay {
  width: 100%;
  height: 100%;
  
}
.container{
flex-direction: column;
padding-top: 2cm;
}
.img{
  display: none;
}

.window {
  scale: 1;
  margin-top: 2cm;
  width: 100%;
  height: 100%;
}
}</style>