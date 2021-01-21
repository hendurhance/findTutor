<template>
  <section>
    <tutor-filter @change-filter="setFilters"></tutor-filter>
  </section>
  <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadTutors">Refresh</base-button>
          <base-button v-if="!isTutor" link to="/register">Register as Tutor</base-button>
      </div>
      <ul v-if="hasTutors"> 
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
import TutorFilter from '../../components/tutors/TutorFilter.vue'
export default {
    components: {
        TutorItem,
        TutorFilter
    },
    data(){
      return{
        activeFilters: {
          frontend: true,
          backend: true,
          career: true
        }
      }
    },
    computed: {
        isTutor(){
            return this.$store.getters['tutors/isTutor']
        },
        filteredTutors(){
            const tutors = this.$store.getters['tutors/tutors']
            return tutors.filter(tutor => {
              if(this.activeFilters.frontend && tutor.areas.includes('frontend')){
                return true
              }
              if(this.activeFilters.backend && tutor.areas.includes('backend')){
                return true
              }
              if(this.activeFilters.career && tutor.areas.includes('career')){
                return true
              }
              return false
            })
        },
        hasTutors(){
            return this.$store.getters['tutors/hasTutors']
        }
    },
    created(){
      this.loadTutors()
    },
    methods: {
      setFilters(updatedFilters){
        this.activeFilters = updatedFilters
      },
      loadTutors(){
        this.$store.dispatch('tutors/loadTutors')
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