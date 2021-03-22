import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logged from "./logged";
import Addproduct from "./Addproduct";
import toggle from "./Toggle";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Addedproducts"],
};

const allReducers = combineReducers({
  isloggedIn: logged,
  Addedproducts: Addproduct,
  toggleData: toggle,
});

export default persistReducer(persistConfig, allReducers);
