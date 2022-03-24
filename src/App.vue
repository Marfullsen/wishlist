<template>
  <div id="nav">
    <router-link to="/guest">Guest</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/host">Host</router-link> |
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

:root {
  --color-fondo: #fbf6f3;
  --color-fondo-primario: #feb06a;
  --color-fondo-secundario: #36d6e7;
  --color-fondo-auxiliar: #5d6c89;
  --color-primario: #feb06a;
  --color-secundario: #36d6e7;
  --color-auxiliar: #5d6c89;
}

/* @font-face {
  font-family: "sunlain";
  src: local("sunlain"),
    url(./assets/fonts/ArchitectsDaughter-Regular.ttf) format("truetype");
} */

#app {
  font-family: "Comfortaa", cursive, Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: var(--color-fondo);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-primario);
}

.pacifico {
  font-family: "Pacifico", cursive;
}

button {
  font-family: "Comfortaa", cursive, Avenir, Helvetica, Arial, sans-serif;
}

.color-primario {
  color: var(--color-primario);
}

.color-secundario {
  color: var(--color-secundario);
}

.color-auxiliar {
  color: var(--color-auxiliar);
}

.color-fondo {
  color: var(--color-fondo);
}

.fondo-primario {
  background-color: var(--color-fondo-primario);
}

.fondo-secundario {
  background-color: var(--color-fondo-secundario);
}

.fondo-auxiliar {
  background-color: var(--color-fondo-auxiliar);
}

#nav {
  background-color: transparent;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
