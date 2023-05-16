<template>
  <div>
    <p>Het getal in de view : {{this.ontvgetal}}</p>
    <hr>
    <CustomEventComponent @verzend="this.ontvang($event)"></CustomEventComponent>

  </div>
</template>

<script>
import CustomEventComponent from "@/components/CustomEventComponent.vue";
export default {
  name: "CustomEventView",
  components: {CustomEventComponent},

  data () {
    return {
      ontvgetal : 0,
    }
  },

  methods : {
    ontvang (getal) {
      this.ontvgetal = getal;
    }
  }
}
</script>

<style scoped>

</style>