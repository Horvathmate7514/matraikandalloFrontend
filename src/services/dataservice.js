import Axios from 'axios';
Axios.defaults.baseURL = 'http://127.0.0.1:8000/api';

export default {
    getAllImages(){
        return Axios.get('/images')
            .then(resp => {
              
                return resp.data;
            })
            .catch(err =>{
                return Promise.reject(err);
            })
    
    
        },
    
    postSendEmail(data){
        return Axios.post('/send', data)
        .then(resp => {
            return resp.data;
        })
        .catch(err =>{
            console.log(err);
            
            return Promise.reject(err)
        })
    }
    
}