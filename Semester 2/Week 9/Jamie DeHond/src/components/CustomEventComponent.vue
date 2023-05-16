<template>
  <div>
  <p>Het getal in de component : {{this.getal}}</p>
    <p><button @click="setGetal">Stuur het getal naar de view</button></p>
  </div>
</template>

<script>
export default {
  name: "CustomEventComponent",

  methods : {
    setGetal() {
      this.getal++;
      this.$emit('verzend', this.getal);
    }
  },

  emits : ['verzend'],

  data() {
    return {
      getal : 0
    }
  }
}
</script>

<style scoped>

</style>