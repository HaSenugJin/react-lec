export const login = () => ({ type: "LOGIN" });
export const logout = () => ({ type: "LOGOUT" });

const initState = {
  isLogin: false,
};

// 함수형 (Side Effect)
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isLogin: true };
    case "LOGOUT":
      return { isLogin: false };
    default:
      return state;
  }
};

export default reducer;