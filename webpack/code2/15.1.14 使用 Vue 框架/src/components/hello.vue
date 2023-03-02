<template>
  <div>
    <h3>Hello Vue</h3>
    <!-- <img src="http://iwenwiki.com/api/livable/details/3.jpg" alt=""> -->
    <img :src="img" alt="" />
  </div>
</template>

<script>
import img from "../images/1.jpeg";

export default {
  data() {
    return {
      img,
    };
  },
};
</script>

<style>

img{
  width: 300px;
}

</style>