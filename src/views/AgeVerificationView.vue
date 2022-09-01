<template>
  <div ref="" class="h-100">
    <img class="hero-image" src="@/assets/desktop-image.png" />
    <img class="hero-logo" src="@/assets/desktop-logo.svg" />
    <div class="hero-spacer"></div>
    <AgeForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AgeForm from "@/components/AgeForm.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "AgeVerification",
  components: {
    AgeForm,
  },
});
</script>

<style scoped>
@media (max-width: 979px) {
  .hero-image {
    position: absolute;
    /* height: auto; */
    height: 100%;
    /* width: 100%; */
    overflow: auto;
  }
  .hero-logo {
    display: none;
  }
  .hero-spacer {
    height: 25%;
  }
}

@media (min-width: 980px) {
  .hero-image {
    position: absolute;
    max-width: 50%;
    max-height: 84%;
    height: auto;
    top: 7%;
    left: 7%;
  }
  .hero-logo {
    position: relative;
    float: right;
    right: 8%;
    top: 7%;
  }
  .hero-spacer {
    height: 40%;
  }
}
</style>
