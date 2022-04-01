<template>
  <nav class="panel mx-5">
    <p class="panel-heading color-auxiliar fondo-primario">
      <ion-icon name="gift" v-pre></ion-icon>
      Listado de Regalos
      <ion-icon name="gift" v-pre></ion-icon>
    </p>
    <div class="is-hidden-touch">
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Añadir regalo</a>
        <a>Ver listado</a>
        <a>Banear</a>
        <a>Añadir personas</a>
      </p>
    </div>
    <ul class="menu-list">
      <li>
        <a
          :class="currentActive == 'addGift' ? 'currentActive' : ''"
          @click="toggle('addGift')"
          >Añadir regalo</a
        >
      </li>
      <li>
        <a
          :class="currentActive == 'seeInvitations' ? 'currentActive' : ''"
          @click="toggle('seeInvitations')"
          >Ver listado</a
        >
        <ul v-show="dropdown['seeInvitations']">
          <li><a>Tetera</a></li>
          <li><a>Sofá</a></li>
          <li><a>Añadir regalos</a></li>
        </ul>
      </li>
      <li><a>Baneos</a></li>
      <li><a>Otras opciones</a></li>
      <li>
        <a
          :class="currentActive == 'whitelist' ? 'currentActive' : ''"
          @click="toggle('whitelist')"
          >Lista blanca</a
        >
        <ul v-show="dropdown['whitelist']">
          <li><a>Juan Manuel</a></li>
          <li><a>José Miguel</a></li>
          <li><a>Añadir personas</a></li>
        </ul>
      </li>
    </ul>
    <label class="panel-block">
      <input type="checkbox" />
      Lista blanca.
    </label>
    <div class="panel-block">
      <button
        @click="activateModal"
        class="button is-danger is-outlined is-fullwidth"
      >
        <span>Finalizar evento</span>
        <span class="icon">
          <ion-icon name="trash-outline" v-pre></ion-icon>
        </span>
      </button>
      <modal-delete @close-modal="closeModal" :isActive="activeModal" />
    </div>
  </nav>
</template>

<script>
import ModalDelete from "./ModalDelete.vue";
export default {
  components: { ModalDelete },
  name: "PanelOpciones",
  data() {
    return {
      activeModal: false,
      currentActive: null,
      dropdown: {
        addGift: false,
        seeInvitations: false,
        whitelist: false,
      },
    };
  },
  methods: {
    activateModal() {
      this.activeModal = true;
    },
    closeModal() {
      this.activeModal = false;
    },
    toggle(gatillador) {
      this.currentActive = this.dropdown[gatillador] ? null : gatillador;
      this.dropdown[gatillador] = !this.dropdown[gatillador];
    },
  },
};
</script>

<style scoped>
.menu-list a:hover {
  background-color: var(--color-primario);
}

.currentActive {
  background-color: var(--color-secundario);
}
li {
  border-bottom: 1px solid #ededed;
}

.menu-list li ul {
  border-left: 5px solid var(--color-secundario);
}
</style>
