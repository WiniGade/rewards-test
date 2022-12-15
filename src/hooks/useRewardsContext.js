import { useContext } from "react";
import { RewardsContext } from "../Components/RewardsContext/RewardsContext";

export const useRewardsContext = () => {
  const data = useContext(RewardsContext);

  if (!data) {
    console.log("Rewards Conext is not availbe or null");
  }

  return data;
};
