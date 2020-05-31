import { useStoreContext } from "../StoreContext";

const useUserState = () => {
  const storeContext = useStoreContext();
  return storeContext.state.user;
};

export default useUserState;
