<template>
  <section>FILTER</section>
  <section>
      <div class="controls">
          <button>Refresh</button>
          <router-link to="/register">Register as Tutor</router-link>
      </div>
      <ul> 
        <li v-for="tutor in filteredTutors" :key="tutor.id">
            {{ tutor.firstName }}
        </li> 
      </ul>
  </section>
</template>

<script>
export default {
    computed: {
        filteredTutors(){
            return this.$store.getters['tutors/tutors']
        }
    }
}
</script>

<style>

</style>