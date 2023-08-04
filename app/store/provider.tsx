import { FC } from "react";
import { store } from ".";
import { Provider } from "react-redux";

const MainProvider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default MainProvider;