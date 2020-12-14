import useSWR from "swr";
import axios from "axios";

import Table from "./table";
import { githubData } from "../../data/stats";

const GithubStats = () => {
  const { data, error } = useSWR("/api/github", axios.get);

  const dataToDisplay = Object.keys(githubData).map((key) => {
    let value;
    let link = "";
    if (error) {
      value = "Error loading data";
    } else {
      value = data ? data.data[key] : "Loading...";
      link = data && data.data[`${key}Url`];
    }

    return {
      label: githubData[key].label,
      value,
      link,
    };
  });

  return (
    <>
      <h3>Some Github stats</h3>
      <Table
        data={Object.keys(dataToDisplay).map((key) => dataToDisplay[key])}
      />
    </>
  );
};

export default GithubStats;
