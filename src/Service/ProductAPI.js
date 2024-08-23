// ProductAPI.js
import axios from "axios";
import gsap from "gsap";
import { BrowserRouter } from "react-router-dom";

export const ProductAxios = async () => {
  const AxiosURL = `{}`
  const response = await axios.get(AxiosURL)
  return response
}

export const ProductGsap = async () => {
  const GsapURL = `{}`
  const response = await gsap.get(GsapURL)
  return response
}

export const ProductRouter = async () => {
  const RouterURL = `{}`
  const response = await BrowserRouter.get(RouterURL)
  return response
}