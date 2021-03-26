import axios from "axios";

const WAKATIME_URL =
  "https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=";


const simplifyListOfObjs = (objList) => {
  return objList.map(({name, text}) => {
    return {label: name, value: text}
  });
}

export async function fetchWakaStats() {
  const url = `${WAKATIME_URL}${process.env.WAKATIME_API_KEY}`;
  const res = await axios.get(url);
  const data = res.data.data;

  const stats = {
    editors: simplifyListOfObjs(data.editors),
    languages: simplifyListOfObjs(data.languages),
    projects: simplifyListOfObjs(data.projects),
    coding_time: data.categories[0].text
  }
  return stats;
}
