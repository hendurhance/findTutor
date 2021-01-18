<template>
  <section>FILTER</section>
  <section>
      <base-card>
        <div class="controls">
          <button>Refresh</button>
          <router-link to="/register">Register as Tutor</router-link>
      </div>
      <ul v-if="hasCoaches"> 
        <tutor-item 
        v-for="tutor in filteredTutors" 
        :key="tutor.id"
        :id="tutor.id"
        :first-name="tutor.firstName"
        :last-name="tutor.lastName"
        :rate="tutor.hourlyRate"
        :areas="tutor.areas"
        ></tutor-item> 
      </ul>
      <h3 v-else>No tutors available.</h3>
      </base-card>
  </section>
</template>

<script>
import TutorItem from '../../components/tutors/TutorItem.vue'

export default {
    components: {
        TutorItem
    },
    computed: {
        filteredTutors(){
            return this.$store.getters['tutors/tutors']
        },
        hasCoaches(){
            return this.$store.getters['tutors/hasTutors']
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>