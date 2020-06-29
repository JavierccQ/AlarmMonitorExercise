import axios from 'axios';
import endPoints from './endPoints'

export default class Api {


    getAll() {
        const headers = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        return new Promise((resolve,reject) => {
            const url = endPoints.base_url+endPoints.characters;

            axios.get(url,headers).then(function(resp) {
                resolve(resp)
            }).catch(function(error) {
                if(error.response) {
                    reject(error.response);
                }
                reject(error)
            })
        })
    }

    login(data) {
        const url = endPoints.base_url+endPoints.login
        return new Promise((resolve,reject) => {
            axios.post(url, data).then(function(resp) {
                resolve(resp);
            }).catch(function (error) {
                if (error.response) {
                    reject(error.response)
                  }
                reject(error)
              })
        })
    }

    registry(data) {
        const url = endPoints.base_url+endPoints.registry
        return new Promise((resolve,reject) => {
            axios.post(url, data).then(function(resp) {
                resolve(resp);
            }).catch(function (error) {
                if (error.response) {
                    reject(error.response)
                  }
                reject(error)
              })
        })
    } 
}
