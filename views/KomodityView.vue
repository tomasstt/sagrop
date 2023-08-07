<template>
  <div>
    <!-- Display a table with commodities -->
    <table class="custom-table">
      <thead>
        <tr>
          <th class="first-header">Komodity</th>
          <th>Dopyt</th>
          <th>Ponuka</th>
          <th>Cena</th>
          <th>Množstvo</th>
          <th>Termín</th>
          <th class="last-header">Parita</th>
        </tr>
      </thead>
      <tbody>
        <!-- Loop through commodities to display in the table -->
        <tr v-for="(commodity, index) in commodities" :key="index">
          <!-- Display commodity name column -->
          <td class="cell1" :class="{ 'lastf-cell': index === commodities.length - 1 }">
            <span v-if="!admin">{{ commodity.name }}</span>
            <input v-else v-model="commodity.name" />
          </td>
          <!-- Display commodity inquiry column -->
          <td>
            <span v-if="!admin">{{ commodity.inquiry }}</span>
            <input v-else v-model="commodity.inquiry" />
          </td>
          <!-- Display commodity offer column -->
          <td>
            <span v-if="!admin">{{ commodity.offer }}</span>
            <input v-else v-model="commodity.offer" />
          </td>
          <!-- Display commodity price column -->
          <td>
            <span v-if="!admin">{{ commodity.price }}</span>
            <input v-else v-model="commodity.price" />
          </td>
          <!-- Display commodity amount column -->
          <td>
            <span v-if="!admin">{{ commodity.amount }}</span>
            <input v-else v-model="commodity.amount" />
          </td>
          <!-- Display commodity date column -->
          <td>
            <span v-if="!admin">{{ commodity.date }}</span>
            <input v-else v-model="commodity.date" />
          </td>
          <!-- Display commodity parita column -->
          <td class="cell7" :class="{ 'lasts-cell': index === commodities.length - 1 }">
            <span v-if="!admin">{{ commodity.parita }}</span>
            <input v-else v-model="commodity.parita" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Show the "Save" button only for admin users -->
    <button v-if="admin" @click="saveCommodities">Save</button>

    <!-- Include the Aktuality component to display other data -->
    <Aktuality></Aktuality>
  </div>
</template>

<script>
import Aktuality from "../components/Aktuality.vue";
import axios from "axios";

export default {
  components: { Aktuality },

  data() {
    return {
      admin: false,
      commodities: [],
    };
  },

  created() {
    // Load commodities and check admin status when the component is created
    this.loadCommodities();
    this.checkAdmin();
  },

  methods: {
    /**
     * Check the user's admin status.
     * @returns {Promise<void>} - A Promise that resolves after checking the admin status or rejects on error.
     */
    async checkAdmin() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://127.0.0.1:5000/api/check-admin", {
          headers: { Authorization: token },
        });
        this.admin = response.data.isAdmin;
      } catch (error) {
        console.error("Error checking admin status:", error.message);
      }
    },

    /**
     * Load commodities from the backend API.
     * @returns {Promise<void>} - A Promise that resolves after loading the commodities or rejects on error.
     */
    async loadCommodities() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/commodities");
        this.commodities = response.data;
      } catch (error) {
        console.error("Error loading commodities from backend:", error.message);
      }
    },

    /**
     * Save or update the commodities in the database.
     * @returns {Promise<void>} - A Promise that resolves after saving or updating the commodities or rejects on error.
     */
    async saveCommodities() {
      try {
        // Iterate through each commodity and save/update it individually
        for (const commodity of this.commodities) {
          // Check if the commodity has an ID
          if (commodity.id) {
            // If the commodity has an ID, it means it already exists in the database, so update it
            await axios.put(`http://127.0.0.1:5000/api/commodities/${commodity.id}`, commodity);
          } else {
            // If the commodity does not have an ID, it is a new commodity, so save it as a new entry in the database
            await axios.post("http://127.0.0.1:5000/api/commodities", commodity);
          }
        }

        console.log("Commodities saved successfully.");
      } catch (error) {
        console.error("Error saving commodities:", error.message);
      }
    },
  },
};
</script>

<style  scoped>


.custom-table {
  /* position: absolute;
  top: 4cm;
  left: 3cm; */
padding-top: 5cm;
margin:  auto;
  width: 98%;
  height: 896px;
  overflow: hidden;
  border-spacing: 0;
}

.lastf-cell {
  border-bottom-left-radius: 20px;
}
.lasts-cell {
  border-bottom-right-radius: 20px;
}

.cell1{
  place-content: start;
  justify-content: start;
 

}
th {
 max-width: 20px;
height: 90px;

}
th.first-header {
  border-top-left-radius: 20px;
  
}@media (max-width: 1000px){
  th {
  background: #2C3714;
  font-size: 17px;
  font-weight: 400;
}
}
@media (max-width: 600px){
  th {
  background: #2C3714;
  font-size: 15px;
  font-weight: 400;
}
}@media (max-width: 435px){
  th {
  background: #2C3714;
  font-size: 12px;
  font-weight: 400;
}
}

@media (min-width: 1000px){
  th {
  background: #2C3714;
  font-size: 24px;
  font-weight: 600;
}

}



td {
  max-width: 10px;
  font-family: Plus Jakarta Sans;
}
th.last-header {
  border-top-right-radius: 20px;
  background: #2C3714;

}

.custom-table thead {
  color: white;
}


.custom-table td {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #87837D;
  border-right: 1px solid #87837D;
}

.custom-table th:first-child,
.custom-table td:first-child {
  border-left: 1;
  border-left: 1px solid #87837D;
}

.custom-table th:last-child,
.custom-table td:last-child {
  border-right: 1 ;
  border-right: 1px solid #87837D;
}

.custom-table tr:first-child th,
.custom-table tr:first-child td {
  border-top: 1;
}

.custom-table tr:last-child th,
.custom-table tr:last-child td {
  border-bottom: 1;
  
}

/* Additional styles for the green header */
.custom-table th.first-header {
  background: #2C3714;

}
</style>