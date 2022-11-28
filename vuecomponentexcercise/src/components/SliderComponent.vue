<template>
    <div class="d-flex flex-column p-5" style="background-color: rgb(241, 234, 234);;">
        <h3 class="pt-3 pb-3">Complete Your Room <br> With What We Design</h3>
        <div class="d-flex  justify-content-between">
            <CardS v-for="(item, index) in arrCardTitle"
             :key="index"
             :cardtitle="item"
             :cardprice="arrCardPrice[index]"
             :cardimage="arrCardImage[index]"
            ></CardS>
        </div>
    </div>
</template>
<script>
import CardS from './CardComponent'
export default {
  name: 'MainComponent',
  components : {
    CardS
  },
  data: function(){
    return{
      arrCardImage : ["chair-1","chair-2","chair-3","chair-4"],
      arrCardTitle : ["Cangkir Mauttie","Saman Kakka","Lino Dino","Syail Ammeno"],
      arrCardPrice : ["IDR 89.300.000","IDR 14.500.000","IDR 22.000.000","IDR 12.000.000"],
    }
  },
}
</script>