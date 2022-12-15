import { render, screen } from "@testing-library/react";
import {
  RewardsContext,
  DEFAULT_LABELS,
} from "../../RewardsContext/RewardsContext";
import { Rewards } from "../Rewards";
import { dummyData } from "../__data__/dummyData";

test("should render the rewards data onto UI correctly", () => {
  render(
    <RewardsContext.Provider
      value={{ rewardsData: dummyData, labels: DEFAULT_LABELS }}
    >
      <Rewards />
    </RewardsContext.Provider>
  );
  const element = screen.getByTestId("rewards-data");
  expect(element).toHaveTextContent(dummyData[0].userId);
  expect(element).toHaveTextContent(dummyData[0].firstName);
  expect(element).toHaveTextContent(dummyData[0].lastName);
  expect(element).toHaveTextContent(dummyData[0].noOftransactions);
  expect(element).toHaveTextContent(dummyData[0].rewardsEarned);
  expect(element).toHaveTextContent("December : 90");
});
