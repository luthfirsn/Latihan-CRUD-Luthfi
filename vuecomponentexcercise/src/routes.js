import Home from "./pages/Home.vue";
import FormAdd from "./pages/FormAdd.vue";
import Update from "./pages/FormUpdate.vue";
import DeleteForm from "./pages/FormDelete.vue"

export default [
    {
        path : "/",
        component : Home,
    },
    {
        path : "/add",
        component : FormAdd, 
    },
    {
        path : "/update/:id",
        component : Update, 
    },
    {
        path : "/delete",
        component : DeleteForm, 
    },
];