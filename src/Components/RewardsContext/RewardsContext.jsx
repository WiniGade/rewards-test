import React, { createContext } from "react";
import reportWebVitals from "../../reportWebVitals";

export const DEFAULT_LABELS = {
  userId: "User Id",
  firstName: "First Name",
  lastName: "Last Name",
  noOftransactions: "No of Transactions",
  rewardsPointsEarned: "Reward Points Earned",
  monthlyData: "Monthly Data",
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const RewardsContext = createContext({
  labels: DEFAULT_LABELS,
  rewardsData: [],
});
export const RewardsContextController = ({
  data,
  userData,
  labels = DEFAULT_LABELS,
  children,
}) => {
  const rewardsData = [];
  data &&
    data.forEach((data) => {
      let rewardsEarned = 0;
      let dataToPush = {};
      if (data.transactionAmount > 50 && data.transactionAmount <= 100) {
        rewardsEarned = data.transactionAmount - 50;
      } else if (data.transactionAmount > 100) {
        rewardsEarned =
          (data.transactionAmount - 100) * 2 +
          (data.transactionAmount - (data.transactionAmount - 50)) * 1;
      }
      let existingData = rewardsData.find((d) => data.userId === d.userId);
      if (!existingData) {
        const monthlyData = Object.assign(
          ...MONTHS.map((month) => ({ [month]: 0 }))
        );
        const transactionMonth = new Date(data.transactionDate).getMonth();
        monthlyData[MONTHS[transactionMonth]] = rewardsEarned;
        dataToPush = {
          userId: data.userId,
          firstName: userData[data.userId]?.firstName,
          lastName: userData[data.userId]?.lastName,
          rewardsEarned,
          monthlyData,
          noOftransactions: 1,
        };
        rewardsData.push(dataToPush);

        return;
      }
      const transactionMonth = new Date(data.transactionDate).getMonth();
      existingData.rewardsEarned = rewardsEarned + existingData.rewardsEarned;
      existingData.monthlyData[MONTHS[transactionMonth]] =
        existingData.monthlyData[MONTHS[transactionMonth]] + rewardsEarned;
      existingData.noOftransactions += 1;
    });

  const values = {
    labels,
    rewardsData: rewardsData,
  };

  return (
    <RewardsContext.Provider value={values}>{children}</RewardsContext.Provider>
  );
};
