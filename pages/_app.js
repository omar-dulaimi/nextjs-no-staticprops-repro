import "../styles/index.css";
import App from "next/app";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../store/reducers/root-reducer";
import { userLogin } from "../store/actions/actions";
import withRedux from "next-redux-wrapper";

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState);
};

class MyApp extends App {
  constructor(props) {
    super(props);
    if (typeof window !== "undefined") {
      let user = { id: "1", name: "test" };
      let token = "hello";
      if (user && token) {
        props.store.dispatch(userLogin(user, token));
      }
    }
  }
  static async getInitialProps({ Component, ctx }) {
    if (typeof window === "undefined") {
      ctx.store.dispatch(userLogin({ id: "1", name: "test" }, "hello"));
    }
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
