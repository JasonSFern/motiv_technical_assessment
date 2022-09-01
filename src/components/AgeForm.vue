<template>
  <div class="">
    <div class="col-12 d-flex">
      <div class="age-form-container-l"></div>
      <div class="p-5 card card-background">
        <div class="d-block">
          <div class="form-logo justify-content-center">
            <img class="comp-logo" src="../assets/mobile-logo.svg" />
          </div>
          <div class="d-flex">
            <h3>
              Joining us for <span class="color-beige">coffee</span> or
              <span class="color-pink">late night cocktails</span>?
            </h3>
          </div>
          <div class="d-flex">
            <h5>
              Please verify that you are 18 years of age or older to enter the
              site.
            </h5>
          </div>
        </div>

        <div class="age-card age-inputs">
          <div class="">
            <label for="day" class="d-none">Day</label>
            <select
              class="color-grey form-select"
              aria-label="Age - Day"
              id="day"
              v-model="selectedDay"
              name="day"
              placeholder="Day"
            >
              <option class="" value="" disabled selected>Day</option>
            </select>
          </div>

          <div>
            <label for="month" class="d-none">Month</label>
            <select
              class="color-grey form-select mr-md-1"
              aria-label="Age - Month"
              id="month"
              v-model="selectedMonth"
              name="month"
              placeholder="Month"
            >
              <option value="" disabled selected>Month</option>
            </select>
          </div>

          <div>
            <label for="year" class="d-none">Year</label>
            <select
              class="color-grey form-select"
              aria-label="Age - Year"
              id="year"
              v-model="selectedYear"
              name="year"
              placeholder="Year"
            >
              <option value="" disabled selected>Year</option>
            </select>
          </div>
        </div>

        <div
          class="mt-2 d-flex justify-content-center justify-content-md-start"
        >
          <button class="btn btm-mtv" :disabled="submitting">Enter Site</button>
        </div>
      </div>
      <div class="age-form-container-r"></div>
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
  background: $white 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 30px #9a558029;
  border: none;
  border-radius: 20px;
  opacity: 1;
}

.btm-mtv {
  background-color: $darkgrey;
  color: $white;
  border-radius: 30px;
  font-size: small;
  padding: 10px 20px 10px 20px;
}

select {
  border: 1px solid var(--unnamed-color-7c7c7c);
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid $grey;
  border-radius: 10px;
  margin: 5px 0px 5px 0px;
  min-width: 100px;
  background-image: url("@/assets/arrow.svg");
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}

@media (max-width: 979px) {
  .age-form-container-l {
    width: 10%;
  }
  .age-form-container-r {
    width: 10%;
  }
  .form-logo {
    display: flex;
    margin-bottom: 20px;
  }
  .age-card {
    display: block;
  }
  .age-inputs > div {
    margin-right: 00px;
  }
}

@media (min-width: 980px) {
  .age-form-container-l {
    width: 50%;
  }
  .age-form-container-l {
    width: 50%;
  }

  .form-logo {
    display: none;
  }
  .comp-logo {
    background: transparent url("~/src/assets/mobile-logo.svg") 0% 0% no-repeat
      padding-box;
    opacity: 1;
    margin-bottom: 40px;
  }
  .age-card {
    display: flex;
  }

  .age-inputs > div {
    margin-right: 10px;
  }
  .age-inputs > div:last-child {
    margin-right: 0px;
  }
}
</style>
