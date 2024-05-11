import axios from "axios"

export const getCardInfo = async()=>{
    const url = 'https://app1.crazzyhub.com/api/product-list-by-main-category-list/';
    const header = {
        Authorization : "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
    }
    return axios.get(url, {headers: header})
    .then((res)=>{
        return Promise.resolve(res.data.data[0].product_deatils)
    })
    .catch((err)=>{
       Promise.reject(err)
    })
}

export const getItemInfo = async(id, varientId)=>{
    const url = `https://app1.crazzyhub.com/api/product-details-api/?product_id=${id}&variant_id=${varientId}`;
    const header = {
        Authorization : "7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"
    }
    return axios.get(url, {headers: header})
    .then((res)=>{
        return Promise.resolve(res)
    })
    .catch((err)=>{
       Promise.reject(err)
    })
}