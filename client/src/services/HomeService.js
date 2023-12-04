import axios from 'axios'

export default {
  async getHomeProducts() {
    try {
      let res = await axios.get('http://localhost:3000')
      return res.data
    } catch (e) {
      console.log(e)
    }
  },
  async getTrendingProducts() {
    let res = await axios.get('http://localhost:3000')
    return res.data.trendings
  },
  async getChairProducts() {
    let res = await axios.get('http://localhost:3000')
    return res.data.chairs
  },
  async getAccessoriesProducts() {
    let res = await axios.get('http://localhost:3000')
    return res.data.accessories
  }
}
