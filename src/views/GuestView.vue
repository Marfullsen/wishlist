<template>
  <div>
    <p class="pacifico is-size-1">Wishlist</p>
    <p class="is-size-4 color-auxiliar">Deseos de Ana y Benja</p>

    <section class="block">
      <figure
        class="is-flex is-justify-content-center is-align-content-center mb-neg-23"
      >
        <div class="numberCircle fondo-primario color-auxiliar">1</div>
      </figure>
      <article class="message">
        <div class="message-body">
          <p class="is-size-2 color-secundario">Tetera</p>
          Una tetera roja para tomar tesito en familia
          <p class="color-secundario">
            Regalar
            <ion-icon name="gift-outline"></ion-icon>
          </p>
        </div>
      </article>
    </section>

    <section
      class="block is-flex is-justify-content-center is-align-content-center"
    >
      <figure>
        <div class="numberCircle fondo-secundario color-auxiliar">2</div>
      </figure>
      <article class="message is-dark">
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </section>

    <section
      class="block is-flex is-justify-content-center is-align-content-center"
    >
      <div class="numberCircle fondo-auxiliar color-primario">3</div>
      <article class="message is-info">
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "GuestView",
};
</script>

<style scoped>
.mb-neg-23 {
  margin-bottom: -23px;
}

.numberCircle {
  font: 32px "sunlain", Arial, sans-serif;

  width: 2em;
  height: 2em;
  box-sizing: initial;

  border: 0.1em solid var(--color-auxiliar);
  text-align: center;
  border-radius: 50%;

  line-height: 2em;
  box-sizing: content-box;
}
</style>
