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
      <article class="message fondo-primario-translucido br-tl-br-rounded mx-5">
        <div class="message-body no-border">
          <p class="block is-size-2 color-secundario">Tetera</p>
          <div class="block">
            <figure class="image m-auto is-128x128">
              <img
                src="https://images.unsplash.com/photo-1594213114663-d94db9b17125?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=96&q=96"
              />
            </figure>
          </div>
          <p class="mb-5 descripcion fondo-primario">
            Una tetera roja para tomar tesito en familia
          </p>
          <button
            class="mb-4 is-size-5 button has-background-transparent color-secundario no-border btn-orange-hover"
            @click="$event.target.classList.toggle('is-loading')"
          >
            Regalar
            <ion-icon name="gift-outline" v-pre></ion-icon>
          </button>
        </div>
      </article>
    </section>

    <section class="block">
      <figure
        class="is-flex is-justify-content-center is-align-content-center mb-neg-23"
      >
        <div class="numberCircle fondo-secundario color-auxiliar">2</div>
      </figure>
      <article
        class="message fondo-secundario-translucido br-tl-br-rounded mx-5"
      >
        <div class="message-body no-border">
          <p class="block is-size-2 color-secundario">Muspi Merol</p>
          <div class="block">
            <figure class="image m-auto is-96x96">
              <img
                src="https://images.unsplash.com/photo-1573866926487-a1865558a9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=90&q=80"
              />
            </figure>
          </div>
          <p class="block descripcion fondo-secundario">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button
            class="mb-4 is-size-5 button has-background-transparent color-secundario no-border btn-orange-hover"
            @click="$event.target.classList.toggle('is-loading')"
          >
            Regalar
            <ion-icon name="gift-outline" v-pre></ion-icon>
          </button>
        </div>
      </article>
    </section>

    <section class="block">
      <figure
        class="is-flex is-justify-content-center is-align-content-center mb-neg-23"
      >
        <div class="numberCircle fondo-auxiliar color-primario">3</div>
      </figure>
      <article class="message fondo-auxiliar-translucido br-tl-br-rounded mx-5">
        <div class="message-body no-border">
          <p class="is-size-2 color-secundario">Pellentesque</p>
          <figure class="block image m-auto is-96x96">
            <img
              src="https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
            />
          </figure>
          <p class="block descripcion fondo-auxiliar color-fondo">
            Pellentesque risus mi
          </p>
          <button
            class="block is-size-5 button has-background-transparent color-secundario no-border btn-orange-hover"
            @click="$event.target.classList.toggle('is-loading')"
          >
            Regalar
            <ion-icon name="gift-outline" v-pre></ion-icon>
          </button>
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
.descripcion {
  padding: 20px;
  border-radius: 50px 0px;
}

.fondo-primario-translucido {
  background-color: #feb06a15;
}

.fondo-secundario-translucido {
  background-color: #36d6e715;
}

.fondo-auxiliar-translucido {
  background-color: #5d6c8915;
}

.btn-orange-hover.is-focused:not(:active),
.btn-orange-hover:focus:not(:active) {
  box-shadow: 0 0 0 0;
}

.btn-orange-hover:hover {
  border-color: var(--color-fondo-primario);
  border-style: solid;
  border-radius: 0px 15px;
  color: var(--color-primario);
}

.has-background-transparent {
  background-color: transparent;
}

.no-border {
  border-style: none;
}

.br-tl-br-rounded {
  border-radius: 100px 0px;
  border: solid 0.2em var(--color-fondo-auxiliar);
}

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
