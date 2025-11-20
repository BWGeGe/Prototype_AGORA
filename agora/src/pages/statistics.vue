<script setup langt="ts">
import { computed } from 'vue'

// Receive meetings as prop
const props = defineProps({
  meetings: {
    type: Array,
    required: true,
    default: () => []
  }
})

// Compute total number of meetings
const totalMeetings = computed(() => props.meetings.length)

// Helper function to convert "HH:mm" to minutes
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

// Compute average duration in minutes
const averageDuration = computed(() => {
  if (props.meetings.length === 0) return 0

  const totalMinutes = props.meetings.reduce((sum, meeting) => {
    const start = timeToMinutes(meeting.start)
    const end = timeToMinutes(meeting.end)
    return sum + (end - start)
  }, 0)

  return Math.round(totalMinutes / props.meetings.length)
})
</script>
<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Statistics</h1>
        <v-card>
          <v-card-title>Overview</v-card-title>
          <v-card-text>
            <p>Total Entries: {{ totalMeetings }}</p>
            <p>Average Duration: {{ averageDuration }} minutes</p>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

