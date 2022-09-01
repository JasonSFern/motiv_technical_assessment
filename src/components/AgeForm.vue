<template>
  <div class="">
    <div class="col-12 d-flex">
      <div class="col-6"></div>
      <div class="col-5 p-5 card card-background">
        <div class="d-block">
          <div class="d-flex">
            <h3>Joining us for</h3>
            <h3 class="text-beige">coffee</h3>
            <h3>or</h3>
            <h3 class="text-pink">late night cocktails</h3>
            <h3>?</h3>
          </div>
        </div>

        <div class="d-flex">
          <div>
            <label for="day" class="hidden">Day</label>
            <select
              aria-label="Age - Day"
              id="day"
              v-model="selectedDay"
              name="day"
              placeholder="Day"
            >
              <option>--</option>
            </select>
          </div>

          <div>
            <label for="month" class="hidden">Month</label>
            <select
              aria-label="Age - Month"
              id="month"
              v-model="selectedMonth"
              name="month"
              placeholder="Month"
            ></select>
          </div>

          <div class="">
            <label for="year" class="hidden">Year</label>
            <select
              aria-label="Age - Year"
              id="year"
              v-model="selectedYear"
              name="year"
              placeholder="Year"
            ></select>
          </div>
        </div>

        <div>
          <button :disabled="submitting">Enter Site</button>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AgeForm",
  data: function () {
    return {
      selectedDay: "",
      selectedMonth: "",
      selectedYear: "",
      submitting: false,
    };
  },
  methods: {
    checkForm(e: Event): void {
      this.submitting = false;
      e.preventDefault();

      if (this.selectedDay && !this.selectedMonth && !this.selectedYear) {
        this.submitForm();
      } else {
        this.submitting = false;
      }
    },
    submitForm(): void {
      // function for submitting form
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-c {
  margin-top: 20rem;
}

.card-background {
  background-color: $white;
  border-radius: 20px;
  margin-right: 100px;
  height: 15rem;
}

.text-pink {
  color: $pink;
}

.text-beige {
  color: $beige;
}
</style>
