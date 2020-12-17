import axios from 'axios'


const instance  =  axios.create({
    baseURL : 'https://burget-react-test.firebaseio.com/'
})

export default instance;