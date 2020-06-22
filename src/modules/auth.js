import JtockAuth from "j-tockauth";

let jtockURL;
if (process.env.NODE_ENV === "production") {
  jtockURL = process.env.REACT_APP_HEROKUURL;
} else if (process.env.NODE_ENV === "development") {
  jtockURL = process.env.REACT_APP_LOCALURL;
}

const auth = new JtockAuth({
  host: jtockURL,
  debug: false,
});

const persistLogin = async (dispatch) => {
  if (localStorage.hasOwnProperty("J-tockAuth-Storage")) {
    const tokenParams = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));
    try {
      const response = await auth.validateToken(tokenParams);

      dispatch({
        type: "SET_AUTHENTICATED",
        payload: {
          authenticated: response.success,
          uid: response.data.uid,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
};

export { auth, persistLogin };
