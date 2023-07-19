<template>
    <div>


        <table class="custom-table">
    <thead>
      <tr>
        <th class="first-header">Komodity</th>
        <th>Dopyt</th>
        <th>Ponuka</th>
        <th>Cena</th>
        <th>Množstvo</th>
        <th>Termín </th>
        <th class="last-header">Parita</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in tableData" :key="index">
        <td class="cell1" :class="{ 'lastf-cell': index === tableData.length - 1 }">
            <span v-if="!admin">{{ row.cell1 }}</span>
            <input v-else v-model="row.cell1" /></td>
        <td><span v-if="!admin">{{ row.cell2 }}</span>
            <input v-else v-model="row.cell2" /></td>
        <td><span v-if="!admin">{{ row.cell3 }}</span>
            <input v-else v-model="row.cell3" /></td>
        <td><span v-if="!admin">{{ row.cell4 }}</span>
            <input v-else v-model="row.cell4" /></td>
        <td><span v-if="!admin">{{ row.cell5 }}</span>
            <input v-else v-model="row.cell5" /></td>
        <td><span v-if="!admin">{{ row.cell6 }}</span>
            <input v-else v-model="row.cell6" /></td>
        <td class="cell7" :class="{ 'lasts-cell': index === tableData.length - 1 }"><span v-if="!admin">{{ row.cell7 }}</span>
            <input v-else v-model="row.cell7" /></td>
      </tr>
    </tbody>
  </table>


        <Aktuality></Aktuality>
    </div>
</template>

<script>

import Aktuality from "../components/Aktuality.vue"
    export default {
        components:{ Aktuality},
        
  data() {
    return {
      admin : true,
      tableData: [
        { cell1: "Jačmeň kŕmny", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Kukurica kŕmna", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica P", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica A", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Pšenica E", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Repka olejná", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Slnečnica čierna", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7" },
        { cell1: "Slnečnica HO", cell2: "Cell 2", cell3: "Cell 3",cell4: "Cell 4", cell5: "Cell 5", cell6: "Cell 6", cell7:"Cell 7"},
      
      ],
    };
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
  
}
th {
  background: #2C3714;
  font-size: 24px;
  font-weight: 600;
}


td {
  max-width: 10px;
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