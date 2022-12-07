import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import useMediaQuery from "hooks/useMediaQuery";

function Chart1() {
  const isBellow400px = useMediaQuery("(max-width : 400px)");

  const data = [
    {
      type: "Team Allocation 8%",
      value: 20,
    },
    {
      type: "CEX 18.5%",
      value: 25,
    },
    {
      type: "NFT MONTHLY HOLDERS 2%",
      value: 18,
    },
    {
      type: "ADVISORS 3%",
      value: 15,
    },
    {
      type: "LIQUIDITY 10%",
      value: 10,
    },
    {
      type: "ALL TOKEN SALES 28.45%",
      value: 40,
    },
    {
      type: "STAKING  15%",
      value: 10,
    },
    {
      type: "GAME REWARDS 12%",
      value: 10,
    },
    {
      type: "MARKETING 5 %",
      value: 10,
    },
  ];
  const config = {
    appendPadding: 0,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    fill: "red",
    className: "w-[100%]",
    pieStyle: {
      fill: "rgba(255, 255, 255, 0.05) ",
      stroke: "#D8B8FF",
    },
    label: {
      //   type: "inner",
      offset: "-40%",
      content: ({ type }: any) => type,
      style: {
        textAlign: "center",
        fill: "#D8B8FF",
        fontSize: isBellow400px ? 8 : 10,
      },
    },
  };
  return <Pie {...config} legend={false} tooltip={false} />;
}

export default Chart1;
