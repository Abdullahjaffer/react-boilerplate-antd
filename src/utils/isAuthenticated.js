import { store } from "../redux/store";

const isAuthenticated = () => store.getState()?.userSlice?.isAuthenticated;
export default isAuthenticated;
