export const fetch = (api) => {
  if (api === "transactions") {
    return Promise.resolve([
      {
        userId: 1,
        transactionAmount: 120,
        transactionDate: "12-11-2022",
      },
      {
        userId: 2,
        transactionAmount: 66,
        transactionDate: "11-12-2022",
      },
      {
        userId: 3,
        transactionAmount: 194,
        transactionDate: "10-10-2022",
      },
      {
        userId: 4,
        transactionAmount: 100,
        transactionDate: "11-11-2022",
      },
      {
        userId: 5,
        transactionAmount: 275,
        transactionDate: "10-10-2022",
      },
      {
        userId: 1,
        transactionAmount: 100,
        transactionDate: "12-11-2022",
      },
      {
        userId: 2,
        transactionAmount: 616,
        transactionDate: "12-11-2022",
      },
      {
        userId: 3,
        transactionAmount: 14,
        transactionDate: "10-11-2022",
      },
      {
        userId: 4,

        transactionAmount: 10,
        transactionDate: "10-10-2022",
      },
      {
        userId: 5,
        transactionAmount: 271,
        transactionDate: "11-10-2022",
      },
      {
        userId: 1,
        transactionAmount: 111,
        transactionDate: "12-11-2022",
      },
      {
        userId: 2,
        transactionAmount: 166,
        transactionDate: "11-11-2022",
      },
      {
        userId: 3,
        transactionAmount: 64,
        transactionDate: "10-11-2022",
      },
      {
        userId: 4,
        transactionAmount: 110,
        transactionDate: "11-12-2022",
      },
      {
        userId: 5,
        transactionAmount: 27,
        transactionDate: "10-11-2022",
      },
      {
        userId: 1,
        transactionAmount: 11,
        transactionDate: "12-10-2022",
      },
      {
        userId: 2,

        transactionAmount: 66,
        transactionDate: "12-12-2022",
      },
      {
        userId: 3,
        transactionAmount: 194,
        transactionDate: "11-10-2022",
      },
      {
        userId: 4,
        transactionAmount: 110,
        transactionDate: "10-12-2022",
      },
      {
        userId: 5,
        transactionAmount: 215,
        transactionDate: "11-11-2022",
      },
    ]);
  } else if (api === "userData/1") {
    return Promise.resolve({
      userId: 1,
      firstName: "Ashwini Gade",
      lastName: "King",
    });
  } else if (api === "userData/2") {
    return Promise.resolve({
      userId: 2,
      firstName: "Ram",
      lastName: "Junior",
    });
  } else if (api === "userData/3") {
    return Promise.resolve({
      userId: 3,
      firstName: "Josh",
      lastName: "Jr",
    });
  } else if (api === "userData/4") {
    return Promise.resolve({
      userId: 4,
      firstName: "Joesph",
      lastName: "R",
    });
  } else if (api === "userData/5") {
    return Promise.resolve({
      userId: 5,
      firstName: "Jack",
      lastName: "King",
    });
  }
};
