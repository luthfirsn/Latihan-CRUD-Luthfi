<template>
       <div class="d-flex flex-row justify-content-center">
		<div>
			<form class="border   border-primary rounded my-3 p-5" style="width: 800px;" @submit.prevent="inputShipping">
				<h2 class="text-center mb-3">Add Student</h2>
				<div >
                    <label class="field">
                        <header class="text-left mb-1">Student Name</header>
                        <input v-model="ShippingData.first_name" class="field__input" type="text" id="firstname" placeholder="Enter name"  />
                      </label>
                      <label class="field p-3">
                        <header class="text-left mb-1">Soft Skills</header>
                        <input v-model="ShippingData.phone_number" class="field__input" type="text" id="Phone" placeholder="Enter soft skills" />
                      </label>
                    </div>
                  <div>
                    <label class="field">
                        <header class="text-left mb-1">Student Age</header>
                        <input v-model="ShippingData.last_name" class="field__input" type="text" id="lastname" placeholder="Enter age"/>
                    </label>
                    <label for="field">
                        <header class="text-left mb-1">Gender</header>
                        <input v-model="ShippingData.last_name" class="field__input" type="text" id="lastname"  />
                        <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                        </select>
                    </label>
                  </div>
                    <label class="field">
                        <header class="text-left mb-1">Student Age</header>
                        <input v-model="ShippingData.last_name" class="field__input" type="text" id="lastname" placeholder="Enter age"/>
                        <header class="text-left mb-1">Gender</header>
                        <input v-model="ShippingData.last_name" class="field__input" type="text" id="lastname"  />
                        <option value="male,gender"></option>
                    </label>
                    <label class="field p-3">
                        <header class="text-left mb-1">Hard Skills</header>
                        <input v-model="ShippingData.city" class="field__input" type="text" id="city" placeholder="Enter hard skills" />
                    </label>
                    <div class="fields fields--3">
                      <label class="field">
                        <header class="text-left mb-1">Student Email</header>
                        <input v-model="ShippingData.email" class="field__input" type="email" id="email" placeholder="Enter email" />
                      </label>
                      <label class="field p-3">
                        <header class="text-left mb-1">Interest</header>
                        <input v-model="ShippingData.postal_code" class="field__input" type="" id="postal_code" />
                      </label>
                    </div>
                    <label class="field" >
                        <header class="text-left mb-1">Self Description</header>
                      <input v-model="ShippingData.address" style=" width: 400px; height:100px;" class="field__input" type="address" id="address" placeholder="Enter address"/>
                    </label>
                    <div class="fields field p-3">
                        <label>
                          <router-Link to="/gallery"><button id="btnAlert" type="submit" class="btn btn-primary mb-1 mt">Submit</button></router-Link> 
                        </label>
                    </div>        
			</form>
		</div>
	</div>
</template>

<script>
import ShippingService from '@/ShippingService';

export default {

  data() {
   
    return{
      ShippingData : {
      "first_name" : null,
      "last_name"  : null,
      "phone_number" : null,
      "city" : null,
      "email" : null,
      "postal_code" : null,
      "address" : null,
      },
      succcess : false
   }
 },
  methods : {
  inputShipping(){
    let data = this.ShippingData;
    ShippingService.create(data)
      .then(response => {
          console.log(response.data);
          //this.success = true;
      })
      .catch(e => {
          console.log(e);
      });
  },
  // cekInput() {
  //   console.log(this.shippingData)
  // }

 }
}

</script>

<style>

</style>
