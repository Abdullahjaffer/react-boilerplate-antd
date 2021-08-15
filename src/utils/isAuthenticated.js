import { store } from "../redux/store";

const isAuthenticated = () => store.getState()?.userSlice?.isAuthenticated;

export const hasRole = (roles) =>
  roles.includes("*") ||
  roles.includes(store.getState()?.userSlice?.user?.role);

export default isAuthenticated;
