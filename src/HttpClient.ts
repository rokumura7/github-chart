import axios from 'axios'
import conf from './MyConfig'

const headers = {
  Authorization: `bearer ${conf.token}`
}

const req = (data: {}) => axios({
  url: 'https://api.github.com/graphql',
  method: 'POST',
  headers,
  data
})

export default req
