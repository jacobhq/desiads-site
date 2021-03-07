<template>
  <v-card
    class="mx-auto my-auto"
    max-width="1000"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <div>
          <span>{{ currentTitle }}</span>
          <br>
            <span class="text--secondary caption">Select size</span>
      </div>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-item-group v-model="selected">
    <v-container>
      <v-row>
        <v-col
          v-for="item in lineItems"
          :key="item"
          cols="12"
          md="4"
        >
          <v-item v-slot="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              height="20vh"
              width="20vw"
              @click="toggle"
            >
            <h3 class="headline flex-grow-1 text-center" v-if="!active">{{item.name}}</h3>
            <h3 class="headline flex-grow-1 text-center" style="color: white;" v-if="active">{{item.name}}</h3>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
        </v-card-text>
      </v-window-item>

    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        text
        to="/"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.publishableKey = 'pk_live_51ISSvLBs47PjhYlFprC6sRFNDemW609w1UN3KdBYVvIcWRoqOgDNJurs7FxkZFe7v6DHfaXHn4hsJMDFSrvuPPMR00UdfP2boy';
    return {
      step: 1,
      loading: false,
      selected: [1],
      lineItems: [
        {
          name: 'Small text',
          price: 'price_1IST6FBs47PjhYlFmGceTUJ9', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          name: 'Big banner',
          price: 'price_1IST4oBs47PjhYlFaaodshIP', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'https://3000-cyan-wolf-oardzjl5.ws-eu03.gitpod.io/yes',
      cancelURL: 'https://3000-cyan-wolf-oardzjl5.ws-eu03.gitpod.io/no',
    };
  },
  computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
  methods: {
    subscribe () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
<style>

</style>