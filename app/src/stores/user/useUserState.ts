import { useStoreContext } from "../StoreContext";

const useUserState = () => {
  const storeContext = useStoreContext();
  return storeContext.state.post;
};

export default useUserState;
