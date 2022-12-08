<template>
  <div>
        <center>
            <form class="border border rounded my-1 p-5 " style="width: 1000px;">
            <h1> Success!</h1><br>
            <h3>Student data has been deleted!</h3>
            <button @click="refreshFunc" class="btn btn-primary mb-1 mt"  style="background-color: blue;">Close</button>
        </form>
        </center>
    </div>
</template>

<script>
export default {

    methods : {
        refreshFunc() {
            location.reload();
        },
    },
};
</script>

<style>

</style>