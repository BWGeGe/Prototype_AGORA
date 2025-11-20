<script setup>
  import { ref } from 'vue'

// define the form data
const formData = ref({
  raum: '',
  date: '',
  start: '',
  end: '',
})

// define the emit
const emit = defineEmits(['save-meeting'])

function saveMeeting() {
if(!formData.value.raum || !formData.value.date || !formData.value.start || !formData.value.end) {
    alert('Please fill in all fields.');
    return;
  }
emit('save-meeting', formData.value)
  formData.value = {
    raum: '',
    date: '',
    start: '',
    end: '',
  }
}
</script>
<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Meeting Eintragen</h1>
        <v-form>
          <v-text-field v-model="formData.raum" label="Raum" variant="outlined" clearable ></v-text-field>
          <v-text-field v-model="formData.date" label="Datum" type="Date" variant="outlined" clearable ></v-text-field>
          <v-container class=" d-flex justify-space-around">
          <v-time-picker v-model="formData.start" title="Start des Meetings" format="24hr"  variant="outlined" clearable ></v-time-picker>
          <v-time-picker v-model="formData.end" title="Ende des Meetings" format="24hr" variant="outlined" clearable ></v-time-picker>
          </v-container>
          <v-container class=" d-flex justify-center">
          <v-btn color="primary" class="ma-5" @click="saveMeeting">Save</v-btn>
          </v-container>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>
