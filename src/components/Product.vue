<template>
  <div id="app">
    <div class="content">
      <div v-for="data in myJson" v-bind:key="data.id" class="product">
        <div class="imgholder"><img :src="[data.image]" /></div>
        <div class="description-holder">
          <h5>{{ data.title }}</h5>
          <div class="price">&pound; {{ data.price }}</div>
          <div class="description">{{ data.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../assets/products.json";
export default {
  name: "Product",
  data() {
    return {
      myJson: json
    };
  },
  /*
  components: {
    product
  }, */
  props: [
    "id",
    "title",
    "image",
    "description",
    "price",
    "purchased",
    "cycle",
    "type",
    "duration",
    "discount",
    "order"
  ],
  computed: {
    images: function() {
      var image = this.image;
      return image;
    }
  }
};
</script>

<style lang="scss">
.content {
  max-width: 1600px;
  display: flex;
  .product {
    overflow: hidden;
    border: 4px solid #306b68;
    border-radius: 10px;
    background: #d0e0e1;
    width: 600px;
    box-sizing: border-box;
    margin: 0 20px 0 0;

    .imgholder {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      img {
        width: 100%;
        max-height: 300px;
        height: auto;
        margin-bottom: -5px;
      }
    }
    .description-holder {
      text-align: left;
      padding: 10px;
      background: #4a4d4d;
      box-sizing: border-box;
      height: 100%;
      h5 {
        color: #fff;
        margin: 0;
        padding: 0;
        font-size: 16px;
        padding: 0 0 10px 0;
      }
      .price {
        color: #fff;
        font-size: 16px;
        padding: 0 0 10px 0;
      }
      .description {
        color: #838585;
        font-size: 14px;
      }
    }
  }
}
</style>
