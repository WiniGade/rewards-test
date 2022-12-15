import React from "react";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useUserData } from "../../hooks/useUserData";
import { Rewards } from "../Rewards/Rewards";
import { RewardsContextController } from "../RewardsContext/RewardsContext";

export const RewardsInformation = () => {
  const { data } = useGetTransactions();
  const { userData } = useUserData(data);

  return (
    <RewardsContextController data={data} userData={userData}>
      <Rewards />
    </RewardsContextController>
  );
};
