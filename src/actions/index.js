import { getData } from "../defaultData";

export const setAllData = formData => {
  const datas = getData();
  if (formData) {
    const { scrip, price, quantity, invested_amount } = formData;
    const elementsIndex = datas.findIndex(
      element => element["scrip"] === scrip
    );
    datas[elementsIndex] = {
      ...datas[elementsIndex],
      scrip,
      price,
      quantity,
      invested_amount
    };
  }
  const payload = datas.map(data => {
    const { quantity, price, invested_amount } = data;
    const avg_cost = (invested_amount / quantity).toFixed(2);
    const market_value = price * quantity;
    const percent_portfolio_value = 0;
    const unrealized_PL = (market_value - invested_amount).toFixed(2);
    const preturn = ((unrealized_PL * 100) / invested_amount).toFixed(2);
    return {
      ...data,
      avg_cost,
      market_value,
      percent_portfolio_value,
      unrealized_PL,
      preturn
    };
  });
  return { type: "SET_ALL_DATA", payload };
};

export const setChartData = () => (dispatch, getState) => {
  const datas = getState()["data"];
  const mf = datas.filter(data => data.type === "MF");
  const etf = datas.filter(data => data.type === "ETF");
  const totalInvestedAmt = datas.reduce((a, c) => a + c["invested_amount"], 0);
  const totalInvestedAmtinMF = mf.reduce((a, c) => {
    return a + c["invested_amount"];
  }, 0);
  const totalInvestedAmtinETF = etf.reduce((a, c) => {
    return a + c["invested_amount"];
  }, 0);

  const precent_mf_invest = (
    (totalInvestedAmtinMF / totalInvestedAmt) *
    100
  ).toFixed(1);
  const precent_etf_invest = (
    (totalInvestedAmtinETF / totalInvestedAmt) *
    100
  ).toFixed(1);
  console.log(precent_mf_invest, precent_etf_invest);
  const payload = {
    mfPercent: precent_mf_invest,
    etfPercent: precent_etf_invest
  };
  dispatch({ type: "SET_CHART_DATA", payload });
};
