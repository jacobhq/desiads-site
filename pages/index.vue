<template>
  <div>
      <v-app-bar flat>
          <v-app-bar-title>Desiads</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn text color="primary">Sign up</v-btn>
      </v-app-bar>
      <header>
          <div class="center">
            <h1>Desiads</h1>
            <small>Minimalist ads that aren't spoonfed down the customers throat</small>
            <div class="cta-btns">
                <v-btn color="primary" depressed>Sign up</v-btn>
                <v-btn color="primary" depressed text href="#what">Who wants that</v-btn>
            </div>
          </div>
      </header>
      <section>
          <div class="center2">
              <h1>This is a Desiad</h1>
              <br>
              <a class="ad" :href="ad.url" target="_blank">
                  <v-card flat outlined width="200" v-ripple>
                    <v-card-title>{{ ad.name }}</v-card-title>
                    <v-card-subtitle>{{ ad.description }}</v-card-subtitle>
                    <v-card-text style="margin-top: 5px;">ADS VIA DESIADS</v-card-text>
                </v-card>
              </a>
              <br>
              It can look however you want!
          </div>
      </section>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ad: []
        }
    },
    async fetch() {
      this.ad = await fetch(
        'https://api.ads.desica.uk/api/ad'
      ).then(res => res.json())
    }
}
</script>

<style>
.center {
    position: absolute;
    top: 27.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
}

.center2 {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
}

header {
    height: 90vh;
}

.cta-btns {
    margin-top: 10px;
}

section {
    height: 100vh;
}

.ad {
    display: block;
    position: relative;
    text-decoration: none;
}
</style>
