<template>
  <div>
    <p class="pacifico is-size-1">Wishlist</p>
    <p class="is-size-4 color-auxiliar">Matrimonio 23 de Enero</p>
    <ion-icon class="is-size-20" name="qr-code-outline" v-pre></ion-icon>
    <section class="block">
      <p class="is-size-3 color-secundario has-text-weight-bold">
        Deseos de Ana y Benja
      </p>
      <p class="is-size-4 color-auxiliar">Fecha: {{ this.fecha_evento }}</p>
      <p class="is-size-4 color-auxiliar">Código: ANABEN21</p>
    </section>
    <section class="block">
      <panel-opciones />
    </section>
  </div>
</template>

<script>
import PanelOpciones from "../components/PanelOpciones.vue";
export default {
  components: { PanelOpciones },
  name: "HostView",
  data() {
    return {
      fecha_evento: "23 de Enero",
    };
  },
};
</script>

<style>
.is-size-20 {
  font-size: 20rem;
}
</style>
