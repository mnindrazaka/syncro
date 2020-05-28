import { useStoreContext } from "../StoreContext";

const usePostState = () => {
  const storeContext = useStoreContext();
  return storeContext.state.post;
};

export default usePostState();
