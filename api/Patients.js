import axios from './axios'

export class Patients {
  getAll() {
    return axios.get('/patients')
  }
}