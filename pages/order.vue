<template>
  <v-card
    class="mx-auto my-auto"
    max-width="1000"
    :loading="loading"
    :disabled="loading"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <div>
        <span>Purchase ad</span>
        <br />
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
          <v-item-group v-model="selected" multiple>
            <v-container>
              <v-row>
                <v-col
                  v-for="(item, index) in lineItems"
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
                      <v-btn icon dark absolute style="top: 0">
                        <v-icon :color="active ? '' : 'grey'">
                          {{
                            active
                              ? "mdi-check-circle"
                              : "mdi-check-circle-outline"
                          }}
                        </v-icon>
                      </v-btn>
                      <h3
                        class="headline flex-grow-1 text-center"
                        v-if="!active"
                      >
                        {{ names[index] }}
                      </h3>
                      <h3
                        class="headline flex-grow-1 text-center"
                        style="color: white"
                        v-if="active"
                      >
                        {{ names[index] }}
                      </h3>
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
      <v-btn text to="/"> Back </v-btn>
      <v-spacer></v-spacer>
      <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="(v) => (loading = true)"
      />
      <v-btn
        :disabled="selected.length === 0"
        color="primary"
        depressed
        @click="buy"
        :loading="loading"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_live_51ISSvLBs47PjhYlFprC6sRFNDemW609w1UN3KdBYVvIcWRoqOgDNJurs7FxkZFe7v6DHfaXHn4hsJMDFSrvuPPMR00UdfP2boy";
    return {
      step: 1,
      loading: false,
      selected: [],
      names: ["Small text", "Small banner"],
      lineItems: [
        {
          price: "price_1IST6FBs47PjhYlFmGceTUJ9", // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
        {
          price: "price_1IST4oBs47PjhYlFaaodshIP", // The id of the recurring price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: "https://ads.desica.uk/thanks",
      cancelURL: "https://ads.desica.uk/",
    };
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Create a password";
        default:
          return "Account created";
      }
    },
  },
  methods: {
    buy() {
      if (this.selected.length != 1) {
        if (this.selected === 1) {
          this.lineItems.shift();
        } else {
          this.lineItems.pop();
        }
      }
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
<style></style>
