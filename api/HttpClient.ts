import axios from 'axios'
import conf from './MyConfig'

const headers = {
  Authorization: `bearer ${conf.token}`
}

export const client = axios.create({ baseURL: 'https://api.github.com', timeout: 3000 })

const req = <T>(data: {}) => client.post<T>('/graphql', data, { headers })

export default req
