<script lang="ts" setup>
const meetings = ref<any[]>([]);
function handleSaveMeeting(data: any) {
  console.log("Received meeting data from DataEntry:", data)
  meetings.value.push(data);
}

function handleDeleteMeeting(meetingToDelete: any) {
  console.log("Meeting data to Delete from Data:", meetingToDelete)
  meetings.value = meetings.value.filter((m) => m !== meetingToDelete);
}

</script>
<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>AGORA</v-toolbar-title>
        <v-btn color="primary" :to="{ name: 'DataManagement' }">Data Management</v-btn>
        <v-btn color="primary" :to="{ name: 'Welcome' }">Welcome Page</v-btn>
        <v-btn color="primary" :to="{ name: 'DataEntry' }">Data Entry</v-btn>
        <v-btn color="primary" :to="{ name: 'Statistics' }">Statistics</v-btn>
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" :meetings="meetings" @delete-meeting="handleDeleteMeeting" @save-meeting="handleSaveMeeting"/>
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

