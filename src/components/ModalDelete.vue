<template>
  <div class="modal" :class="active ? 'is-active' : ''">
    <div class="modal-background" @click="$emit('closeModal')"></div>
    <div class="modal-card">
      <header class="modal-card-head has-background-danger">
        <p class="modal-card-title has-text-white">
          <ion-icon name="trash-outline"></ion-icon>
          Finalizar Evento
        </p>
        <button
          @click="$emit('closeModal')"
          class="delete"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body">
        <h1>¿Estás seguro?</h1>
        <p>El evento será borrado definitivamente.</p>
      </section>
      <footer class="modal-card-foot is-justify-content-center">
        <button @click="$emit('closeModal')" class="button">Cancelar</button>
        <button
          @click="borrar"
          class="button is-danger"
          :class="borrando ? 'is-loading' : ''"
        >
          Finalizar
        </button>
      </footer>
    </div>
    <button
      @click="$emit('closeModal')"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "ModalDelete",
  props: {
    isActive: Boolean,
  },
  data() {
    return {
      borrando: false,
    };
  },
  methods: {
    borrar() {
      this.borrando = true;
    },
  },
  computed: {
    active() {
      return this.isActive;
    },
  },
};
</script>

<style></style>
