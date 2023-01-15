import useSWR from "swr"

const options = {
  // mode: "no-cors",
}

const fetcher = async (url) => {
  const res = await fetch(url, options)
  return res.json()
}

function useTitlesAPI(url) {
  const { data, error } = useSWR(url, fetcher)
  // console.log({ data, error })
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export default useTitlesAPI
