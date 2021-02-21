import axios from 'axios'
import Constants from 'expo-constants'

const { manifest } = Constants

const API_URL =
  (typeof manifest.packagerOpts === 'object') && manifest.packagerOpts.dev
    ? manifest.debuggerHost.split(':').shift().concat(':5000')
    : 'localhost:5000'


export default axios.create({
  baseURL: `http://${API_URL}`
})

