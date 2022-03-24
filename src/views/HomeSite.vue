<template>
  <div class="home">
    <p class="pacifico is-size-1">Wishlist</p>
    <p class="is-size-4 color-auxiliar">¡Anticipa tu regalo!</p>
    <img src="../assets/img/gift.svg" alt="gift" />
    <p class="is-size-2 color-secundario">¡Tengo un código!</p>
    <input
      autofocus
      class="input has-text-centered p-4"
      type="text"
      name="code"
      id="code"
      placeholder="ANABEN21"
      maxlength="8"
      autocomplete="off"
      oninput="let p=this.selectionStart;this.value=this.value.toUpperCase();this.setSelectionRange(p, p);"
    />
    <section class="block">
      <p class="is-size-2 color-secundario">Listados</p>
      <button
        class="color-auxiliar fondo-primario button is-rounded is-fullwidth my-3"
      >
        Crear listado
      </button>
      <button
        class="color-fondo fondo-auxiliar button is-rounded is-fullwidth mt-2"
      >
        Ver listado
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeSite",
  components: {},
};
</script>

<style scoped></style>
