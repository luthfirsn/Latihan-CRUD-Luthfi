import Home from "./pages/Home.vue";
import Gallery from "./pages/Gallery.vue";
import FormShipping from "./pages/FormShipping.vue";
import DeleteForm from "./pages/FormDelete.vue";
import Update from "./pages/FormUpdate.vue"

export default [
    {
        path : "/",
        component : Home,
    },
    {
        path : "/gallery",
        component : Gallery, 
    },
    {
        path : "/add",
        component : FormShipping, 
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