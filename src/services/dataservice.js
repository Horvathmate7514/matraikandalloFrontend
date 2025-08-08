import Axios from 'axios';
Axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default {
getAllImages() {
    return Axios.get(`/images`)
        .then(resp => {
            return resp.data.data; // Visszaadjuk az összes képet
        })
        .catch(err => {
            return Promise.reject(err);
        })
},
    postSendEmail(data) {
        return Axios.post('/send', data)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);

                return Promise.reject(err)
            })
    },
    login(data) {
        return Axios.post('/login', data)
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);

                return Promise.reject(err)
            })
    },
 upload(data,category, token) {
        let formData = new FormData()
        formData.append('image', data)
        formData.append('category', category)
        return Axios.post('/upload', formData,  { headers: { 'Authorization': `Bearer ${token}` } })
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);

                return Promise.reject(err)
            })
    },
    deleteImg(data, token) {
        return Axios.delete('/delete', { headers: { 'Authorization': `Bearer ${token}` }, data: data })
        
            .then(resp => {
                return resp.data;
            })
            .catch(err => {
                console.log(err);

                return Promise.reject(err)
            })
    },



}