import http from "./http-common";

class FormService {
    insert(data) {
        return http.post("/insert", data);
    }

    getAll() {
        return http.get("/getAll");
    }

    deleteStudent(id) {
        return http.delete(`/delete/${id}`);
    }
    
    updateStudent(id, data) {
        return http.put(`/update/${id}`, data);
    }

    getStudent(id) {
        return http.get(`/getStudent/${id}`);
    }
}

export default new FormService();