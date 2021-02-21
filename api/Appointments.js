import axios from './axios'

export class Appointments {
  getAll() {
    return axios.get('/appointments').then(res => res.data)
  }
}