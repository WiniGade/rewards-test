import { render, screen } from "@testing-library/react";
import { RewardsInformation } from "../RewardsInformation";
import * as getTransactions from "../../../hooks/useGetTransactions";
import * as getUserData from "../../../hooks/useUserData";
import { dummyData } from "../../Rewards/__data__/dummyData";
import {
  dummyTransactionData,
  dummyUserData,
} from "../../RewardsContext/__data__/dummyData";

test("should fetch and render data", () => {
  jest.spyOn(getTransactions, "useGetTransactions").mockImplementation(() => ({
    data: dummyTransactionData,
  }));
  jest
    .spyOn(getUserData, "useUserData")
    .mockImplementation(() => ({ userData: dummyUserData }));
  render(<RewardsInformation />);
  const element = screen.getByTestId("rewards-data");
  expect(element).toHaveTextContent(dummyData[0].userId);
  expect(element).toHaveTextContent(dummyData[0].firstName);
  expect(element).toHaveTextContent(dummyData[0].lastName);
  expect(element).toHaveTextContent(dummyData[0].noOftransactions);
  expect(element).toHaveTextContent(dummyData[0].rewardsEarned);
  expect(element).toHaveTextContent("December : 90");
});
