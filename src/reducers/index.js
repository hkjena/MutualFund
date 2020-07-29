import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import chartReducer from "./chartReducer";

export default combineReducers({ data: dataReducer, chartData: chartReducer });
