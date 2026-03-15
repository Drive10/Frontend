
import axios from "axios"

export const api=axios.create({
 baseURL:"http://localhost:8080"
})

export async function createOrder(){

 return {
  orderId:"ORD123",
  amount:499
 }

}
