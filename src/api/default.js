import axios from "axios"
import { Service } from "axios-middleware"
import route, { makeLoginRedirect } from "@/router"
import Swal from "sweetalert2"

export const baseURL = `${process.env.VUE_APP_API_SERVER_HOST}/${process.env.VUE_APP_API_VERSION}`

const HTTP = axios.create({
  baseURL: baseURL,
  withCredentials: true,
})

const s = new Service(HTTP)
s.register({
  onResponseError(error) {
    const response = error.response
    if (!response) {
      console.error("no response")
      return {}
    }
    const request = response.config
    const status = response.status
    if (status < 400) {
      return
    }
    const bugData = {
      error: JSON.stringify(response?.data),
      // eslint-disable-next-line @typescript-eslint/camelcase
      request_url: request.url,
      // eslint-disable-next-line @typescript-eslint/camelcase
      request_param: request.data,
      // eslint-disable-next-line @typescript-eslint/camelcase
      happens_at: new Date(),
    }
    switch (status) {
      case 400:
        console.log("bad request")
        break
      case 401:
        {
          const pathname = document.location.pathname
          if (/login/.test(pathname)) {
            // 지금 위치가 login이면 무시
            return
          }

          route.replace(makeLoginRedirect(pathname)).then()
        }
        break
      case 403:
        Swal.fire("need authority")
        console.log("authority required")
        break
      case 404:
        // 각 페이지에서 처리
        console.error("not found")
        break
      case 409: // 각 페이지에서 처리
        console.log("duplicated")
        break
      default:
        HTTP.post(`/bugs`, bugData).then(({ data }) => {
          console.log(data)
        })
        Swal.fire("error")
        break
    }
    throw error
  },
})

export default HTTP
