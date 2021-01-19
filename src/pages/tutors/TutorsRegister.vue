<template>
  <section>
    <base-card>
      <h2>Register as a Tutor</h2>
      <tutor-form @save-data="saveData"></tutor-form>
    </base-card>
  </section>
</template>

<script>
import TutorForm from '../../components/tutors/TutorForm.vue'

export default {
  components: {
    TutorForm
  },
  methods: {
    saveData(data){
      this.$store.dispatch('tutors/registerTutor', data)
    }
  }
}
</script>

<style scoped>

</style>