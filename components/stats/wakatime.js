import useSWR from "swr";
import axios from "axios";

import Table from "./table";
import { wakaData } from "../../data/stats";

const WakatimeStats = () => {
  const { data, error } = useSWR("/api/wakatime", axios.get);

  const remap = category => {
    if (data && data.data && category in data.data) {
      return data.data[category];
    }

    return wakaData[category].map(({label, value}) => {
      return {
        label,
        value: error ? "Error loading data" : value,
        link: ""
      };
    })
  }

  return (
    <>
      <h3>This Week I Spent My Time On</h3>
      {Object.keys(wakaData).map((category) => {
        return (
          <div key={category}>
            <h4>{category}</h4>
            <Table data={remap(category)} />
          </div>
        )
      })}
    </>
  );
};

export default WakatimeStats;
