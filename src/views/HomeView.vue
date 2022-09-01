<template>
  <div>
    <div class="welcome-background"></div>
    <div class="mt-5"></div>
    <AgeForm />
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AgeForm from "@/components/AgeForm.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "HomeView",
  components: {
    AgeForm,
  },
});
</script>
