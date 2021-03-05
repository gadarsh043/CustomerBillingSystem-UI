<template>
  <div>
    <div class="main-cont" style="background-image: url('https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg');opacity: 1;">
      <div class="item-cont">
        <div class="flex-container">
          <div v-for="i in info" :key="i.id">
            <div v-bind:id="i.id">
              <img v-bind:src="i.imgsrc" style="width:60%">
              <p>
              {{ i.product_name }} -
              {{ i.price }}
              </p>
              </div>
          </div>
        </div>
        <div class="price-for-bill" v-for="check in user.productCollection" :key="check.id">
          <div v-if="check.isSelected">
            {{check.product_name}} {{ (check.price*check.quantity)}}
          </div>
        </div>
        <div>
          Total: {{getTotal}}
        </div>
      </div>
      <div class="open-item" id="demo" style="color: navajowhite; margin-top: 6%; margin-left: -7%;">
        <template>
          <form @submit.prevent="handleSubmit">
              <div class="form-group form-check" v-for="i in user.productCollection" v-bind:key="i.id">
                  <div class="productname-check" style="margin: 1rem">
                    <label class="form-check-label" :for="i.id">{{i.product_name}}</label>
                    <input type="checkbox"  v-model="i.isSelected" :id="i.id" :value="i.id">
                  </div>
                  <quantity :id="i.id" v-if="i.isSelected" :item='i' />
              </div>

              <!-- print result -->
              <!-- <div class="form-group">
                      {{user.productCollection}}
              </div> -->

              <div class="form-group">
                  <button class="btn btn-primary" @click='redirect'>Submit</button>
              </div>
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import quantity from '../components/quantity'
export default {
  data () {
    return {
      info: '',
      price: 0,
      user: {
        productCollection: []
      },
      prodlist: [{
        qty: '',
        id: ''
      }]
    }
  },
  name: 'product',
  components: {
    quantity
  },
  computed: {
    getTotal () {
      let sum = 0
      this.user.productCollection.forEach(e => {
        if (e.isSelected) {
          sum += e.price * e.quantity
        }
      })
      return sum
    }
  },
  methods: {
    handleSubmit () {
      JSON.stringify(this.user)
    },
    getProductDetails () {

    },
    setProduct (id) {
      this.user.productCollection[id] = 0
    },
    redirect () {
      this.$router.push('/payment')
    },
    setProductCollection (info) {
      this.user.productCollection = []
      for (const i in info) {
        this.user.productCollection.push({
          ...info[i],
          isSelected: false,
          quantity: 0
        })
      }
    }
  },
  mounted () {
    axios
      .get('http://10.177.68.115:8080/product/getProducts')
      .then(response => {
        console.log(response)
        this.info = response.data
        this.setProductCollection(this.info)
      })
  }
}

</script>

<style scoped>

.main-cont {
  display: flex;
  text-align: center;
}

.item-cont {
  width: 100%
}

.open-item {
  width: 30%;
  font-size: 20px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}
button {
  background-color: darkgreen;
  border-radius: 2px;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 3px;
  margin: auto;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 130px;
  margin: 30px;
  line-height: 70px;
  font-size: 10px;
}
body {
  font-family: 'Times New Roman', Times, serif;
  background-color: #433520;
}
/* .inside{
  font-size: 20px;
} */
/* }
.text1{
  top: 50px;
  text-align: center;
  margin: auto;
} */
</style>
