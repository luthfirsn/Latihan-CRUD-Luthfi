<template>
    <a id="ch2" href="" class="d-flex flex-column p-3 rounded nav-link" style="background-color: white;">
        <img :src="require('./img/' + cardimage + '.png')" alt="">
        <div class="pt-3 nav-link text-dark"><b>{{ cardtitle }}</b></div>
        <div class="nav-link text-dark">{{ cardprice }}</div>
    </a>
</template>
<script>
export default {
  name: 'CardS',
  props: [
    "cardimage","cardprice","cardtitle"
  ]
}
</script>