import axios from "axios"
import useSWR from "swr"

const axiosInstance = axios.create({
  baseURL: "https://streaming-titles-api.up.railway.app",
  timeout: 10000,
  headers: {
    access_token: "whattodowhenlifegivesyoulemons",
  },
})

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)

function useStreamingTitlesAPI(relativeUrl) {
  const { data, error } = useSWR(relativeUrl, fetcher)
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useStreamingTitlesAPI
