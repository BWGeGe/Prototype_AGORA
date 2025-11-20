<script setup lang="ts">
import { computed,ref } from "vue";

// Receive the meetings from App.vue
const props = defineProps({
  meetings: {
    type: Array,
    required: true
  }
});


const emit = defineEmits(["delete-meeting"]);

function deleteMeeting(meeting: any) {
  emit("delete-meeting", meeting);
}
// Sort + group meetings by date
const groupedMeetings = computed(() => {
  // Step 1: sort by date (ascending)
  const sorted = [...props.meetings].sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  // Step 2: group by date
const groups: Record<string, any[]> = {};

  for (const m of sorted) {
    if (!groups[m.date]) {
      groups[m.date] = [];
    }
    groups[m.date].push(m);
  }

  return groups; // object: { "2025-01-10": [...], "2025-01-12": [...] }
});
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md border">
      <v-main class="pa-6">

        <h1 class="mb-6">Gespeicherte Meetings</h1>

        <!-- Check if we have data -->
        <div v-if="props.meetings.length === 0">
          <p>Keine Meetings gespeichert.</p>
        </div>

        <!-- Loop through grouped dates -->
        <div v-else>
          <div
            v-for="(items, date) in groupedMeetings"
            :key="date"
            class="mb-8"
          >
            <!-- Date heading -->
            <h2 class="text-h5 mb-3">{{ date }}</h2>

            <!-- Table of meetings for this date -->
            <v-table>
              <thead>
                <tr>
                  <th>Raum</th>
                  <th>Start</th>
                  <th>Ende</th>
                  <th>Aktion</th>
                </tr>
              </thead>
              <tbody>
<tr v-for="(m, index) in items" :key="m.id || index">
  <td>{{ m.raum }}</td>
  <td>{{ m.start }}</td>
  <td>{{ m.end }}</td>
  <td>
    <v-btn icon color="red" @click="deleteMeeting(m)">
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </td>
</tr>
              </tbody>
            </v-table>
          </div>
        </div>

      </v-main>
    </v-layout>
  </v-app>
</template>
