import { render, screen } from "@testing-library/react";
import { Rewards } from "../../Rewards/Rewards";
import { RewardsContextController } from "../RewardsContext";
import { dummyData } from "../../Rewards/__data__/dummyData";
import { dummyTransactionData, dummyUserData } from "../__data__/dummyData";

test("rewards context controller should provider proper data", () => {
  render(
    <RewardsContextController
      data={dummyTransactionData}
      userData={dummyUserData}
    >
      <Rewards />
    </RewardsContextController>
  );
  const element = screen.getByTestId("rewards-data");
  expect(element).toHaveTextContent(dummyData[0].userId);
  expect(element).toHaveTextContent(dummyData[0].firstName);
  expect(element).toHaveTextContent(dummyData[0].lastName);
  expect(element).toHaveTextContent(dummyData[0].noOftransactions);
  expect(element).toHaveTextContent(dummyData[0].rewardsEarned);
  expect(element).toHaveTextContent("December : 90");
});
