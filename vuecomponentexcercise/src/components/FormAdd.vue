<template>
   <div>
    <div>
        <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" alt="" id="Logo" width="100%" height="170px">
    </div>
    <div class="d-flex flex-row justify-content-center">
        <form class="border   border-primary rounded my-3 p-5" style="width: 800px;" @submit.prevent="inputAddForm" v-show="!success">
        <h2 class="text-center mb-3 p-2" v-show="!success">Add Student</h2>
  <div class="form-row text-left mb-1">
    <div class="form-group col-md-6">
      <label  for="inputEmail4" >Student Name</label>
      <input v-model="studentData.student_name" type="text" class="form-control" id="inputStudentName" placeholder="Enter name" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Soft Skills</label>
      <input v-model="studentData.shoft_skill" type="text" class="form-control" id="inputy" placeholder="Enter soft skills" required/>
    </div>
  </div>
  <div class="form-row text-left mb-1">
    <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Student Age</label>
      <input v-model="studentData.student_age" type="number" class="form-control" id="inputCity" placeholder="Enter Age" required/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputState">Gender</label>
      <select v-model="studentData.gender" id="inputState" class="form-control" required>
        <option selected></option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
    <div class="form-group col-md-6 ">
      <label for="inputPassword4">Hard Skills</label>
      <input v-model="studentData.hard_skill" type="Text" class="form-control" id="inputPassword4" placeholder="Enter hard skills" required/>
    </div>
  </div>
</div>
  <div class="form-row text-left mb-1">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Student Email</label>
      <input v-model="studentData.student_email" type="email" class="form-control" id="inputEmail4" placeholder="Enter email" required/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Interest</label>
      <select v-model="studentData.interest" id="inputState" class="form-control" required>
        <option selected></option>
        <option>Data Science</option>
        <option>Network</option>
        <option>Web Fronted</option>
        <option>Web Backend</option>
        <option>Mobile Apps</option>
      </select>
    </div>
  </div>
  <div class="form-group text-left mb-1">
    <label for="inputAddress">Self Description</label>
    <input v-model="studentData.self_description" type="text" class="form-control" id="inputAddress" required/>
  </div>
  <button type="submit" class="btn btn-success">{{ buttonValue }}</button>
</form>
  <SuccessForm v-show="success"></SuccessForm>

    </div>
   </div>
</template>

<script>
import FormService from '@/FormService';
import SuccessForm from './SuccessForm.vue';

export default {

  data() {
   
    return{
      studentData : {
      "student_name" : null,
      "shoft_skill"  : null,
      "student_age" : null,
      "gender" : null,
      "hard_skill" : null,
      "student_email" : null,
      "interest" : null,
      "self_description" : null,
      },
      success : false,
      buttonValue : "Submit"
   }
 },
  methods : {
  inputAddForm(){
    let data = this.studentData;

    FormService.insert(data)
      .then(response => {
          console.log(response.data);
          this.success = true;
      })
      .catch(e => {
          console.log(e);
      });
  },
  

 },
 components : {
    SuccessForm
  },
}

</script>

<style>

</style>