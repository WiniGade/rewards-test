import { fetch } from "../data/mockData"; // mock data
import { useEffect, useState, useMemo } from "react";

export const useUserData = (transactionData) => {
  const [userData, setUserData] = useState({});

  const uniqueUserIds = useMemo(
    () => [...new Set([...transactionData.map((data) => data.userId)])],
    [transactionData]
  );
  useEffect(() => {
    Promise.all(
      uniqueUserIds.map((id) => {
        return fetch(`userData/${id}`);
      })
    ).then((res) => {
      let data = Object.assign(
        {},
        ...res.map((userData) => ({ [userData.userId]: { ...userData } }))
      );
      setUserData(data);
    });
  }, [uniqueUserIds]);
  return { userData };
};
