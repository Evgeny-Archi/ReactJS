import axios from 'axios'

export const getDataFromBase = async (url) => {
    let data
    try {
        const response = await axios.get(url)
        Object.values(response.data).forEach((value) => {
            data = value
        })
        return data
    } catch (e) {
        console.log(e)
    }
}
