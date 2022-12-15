import React from "react";
import { useRewardsContext } from "../../hooks/useRewardsContext.js";

export const Rewards = () => {
  const { labels, rewardsData } = useRewardsContext();

  return (
    <>
      <table >
        <thead>
          <tr>
            <td>{labels.userId}</td>
            <td>{labels.firstName}</td>
            <td>{labels.lastName}</td>
            <td>{labels.noOftransactions}</td>
            <td>{labels.rewardsPointsEarned}</td>
            <td>{labels.monthlyData}</td>
          </tr>
        </thead>
        <tbody data-testid="rewards-data">
          {rewardsData.length > 0 &&
            rewardsData.map((data, index) => {
              return (
                <tr key={data.userId}>
                  <td>{data.userId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.noOftransactions}</td>
                  <td>{data.rewardsEarned}</td>
                  <td>
                  {Object.keys(data.monthlyData).map((key) => {
                    if(data.monthlyData[key]) {
                      return (<p key={`${data.userId}${key}`}>{`${key} : ${data.monthlyData[key]}`}</p>)
                    }
                    return null;
                  })}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
