<template>
  <header>
      <nav>
          <h1><router-link to="/">findTutor</router-link></h1>
          <ul>
              <li>
                  <router-link to="/tutors">All Tutors</router-link>
              </li>
              <li>
                  <router-link to="/requests">Requests</router-link>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>

header {
  width: 100%;
  height: 5rem;
  background-color:#04096e;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.09);
}

header a {
  text-decoration: none;
  color: #fff;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #fff;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

</style>