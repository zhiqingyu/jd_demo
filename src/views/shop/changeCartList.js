import { useStore } from "vuex";
export const useChangeCartListEffect = () => {
    const store = useStore();
    const changeCartList = (shopId, productId, productInfo, num) => {
      store.commit("changeCartList", {
        shopId,
        productId,
        productInfo,
        num,
      });
    };
    return {
      changeCartList,
    };
  };