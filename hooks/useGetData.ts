import { useEffect, useState } from "react"
import axios from "axios";
import { setItem, getItem } from '../utils/AsyncStorage';
import { SWAPI_FILMS, SWAPI_PEOPLE, SWAPI_VEHICLES } from "./urls";
import { FILTER } from "@/shared/filters";

const useGetData = () => {
  const [loading, setLoading] = useState(false);

  const urls = [SWAPI_FILMS, SWAPI_PEOPLE, SWAPI_VEHICLES]

  const getData = async () => {
    try {
      setLoading(true);
      const responses = await Promise.all(urls.map(url => axios.get(url)));
      const data = responses.map(response => response.data.results);
      setItem(FILTER.FILMS, data[0]);
      setItem(FILTER.PEOPLE, data[1]);
      setItem(FILTER.VEHICLES, data[2]);
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getData()
  }, [])

  return { loading }
}

export { useGetData };