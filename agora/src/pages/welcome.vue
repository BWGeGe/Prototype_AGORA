<script setup>
</script>
<template>
  <v-app>
    <v-main>
      <v-container class="text-center">
        <h1>Welcome to the Application</h1>
        <p>Select an option below to get started:</p>
        <v-btn color="primary" class="ma-2" :to="{ name: 'DataEntry'}">Data Entry</v-btn>
        <v-btn color="secondary" class="ma-2" :to="{ name: 'DataManagement' }">Data Management</v-btn>
        <v-btn color="success" class="ma-2" :to="{ name: 'Statistics' }">Statistics</v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

