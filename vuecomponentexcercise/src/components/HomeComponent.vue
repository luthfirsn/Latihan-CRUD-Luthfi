<template>
    <div>
    <div>
        <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" alt="" id="Logo" width="100%" height="170px">
    </div>
    <br>
    <div >
        <router-Link to="/add" class="btn btn-primary mb-1 mt" style=" width: 150px;" v-show="!success">Add data jos</router-Link>
    </div>

    <div class="row" v-show="!success">
            <div v-for="item in studentData" :key="item.id" class="p-3 col-4">
                <div class="card text-left">
                <div class="card-body">    
                    <h3>{{ item.student_name + "," + " " + item.student_age + "years old" }},</h3>
                    <h5>{{item.self_description}}</h5>
                    <br>
                    <table>
                        <tr>
                            <td>Student Email</td>
                            <td>: {{item.student_email}}</td>
                        </tr>
                        <tr>
                            <td>Soft Skills </td>
                            <td>: {{item.shoft_skill}}</td>
                        </tr>
                        <tr>
                            <td>Hard Skills</td>
                            <td>: {{item.hard_skill}}</td>
                        </tr>
                        <tr>
                            <td>Interest</td>
                            <td>: {{item.interest}}</td>
                        </tr>
                    </table>
                    <router-Link :to="{path:'/update/'+item.id}" type="submit" class="btn btn-primary mb-1"> Update</router-Link> 
                    <button type="submit" @click="deleteStudentFunc(item.id)" class="btn btn-danger mb-1 ml-3" >Delete</button>
                    <img v-if="item.gender == 'Male'" src="./img/male.png" alt="" style="width: 50px; margin-left: 20px;" >
                    <img v-else-if="item.gender == 'Female'" src="./img/female.png" alt="" style="width: 35px; margin-left: 20px;" >

                </div>
            
            </div>

        </div>
        
        </div>
        <DeleteForm v-show="success"></DeleteForm>
    </div>
    
</template>

<script>
import FormService from '@/FormService.js';
import DeleteForm from "@/components/DeleteForm.vue";

export default {

    name : "HomeBeranda",
    components : {
        DeleteForm,
    },


    data() {
        return {

            studentData : null,
            success : false, 
        };
    },

    methods : {
        viewStudent() {
            FormService.getAll()
               .then(response => {
                 this.studentData = response.data;
                 console.log(this.studentData);
               })
               .catch(e => {
                 console.log(e);
               });
        },

        deleteStudentFunc(id) {
            if (confirm("Anda yakin ingin menghapus data ?")) {
                FormService.deleteStudent(id)
                .then((response) => {
                    console.log(response.data);
                    this.success = true;
                })
                .catch((e) => {
                    console.log(e);
                });
            }else {
                alert("Hapus telah Dibatalkan");
            }
        },
    },
    mounted(){
        this.viewStudent();
    },
}
</script>




<style scope>
#logo {
    width : 1000%;
    height : 250px;
    margin-top: -60px;
}

</style>
