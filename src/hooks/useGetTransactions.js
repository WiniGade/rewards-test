import { fetch } from "../data/mockData"; // mock data
import { useEffect, useState } from "react";

export const useGetTransactions = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("transactions").then((data) => {
      setData(data);
    });
  }, []);
  return { data };
};
