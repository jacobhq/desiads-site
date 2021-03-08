<template>
  <v-card
    class="mx-auto my-auto"
    max-width="1000"
    min-width="500"
    :loading="loading"
    :disabled="loading"
  >

    <v-window>
      <v-window-item :value="1">
        <v-card-text>
          <p class="display-1">Thank you</p>
          <p>Thank you for ordering. An email confirming your purchase is on its way.</p>
        </v-card-text>
      </v-window-item>

    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        color="primary"
        depressed
        to="/"
      >
        Head home
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>