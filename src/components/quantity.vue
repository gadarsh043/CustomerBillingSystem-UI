<template>
  <div class="quantity-toggle">
      <button @click="decrement()">&mdash;</button>
      <input class="input-1" type="text" :value="quantity" readonly>
      <button @click="increment()">&#xff0b;</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 0,
      user: {
        productCollection: []
      }
    }
  },
  methods: {
    increment () {
      this.quantity++
    },
    decrement () {
      if (this.quantity === 0) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    }
  }
}
</script>
<style scoped>
.quantity-toggle{
  display: flex;
  margin: 2%;
}
.input-1{
  width: 10%;
  text-align: center;
}
</style>
