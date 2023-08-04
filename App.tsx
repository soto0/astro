import { FC } from "react";
import { LogBox } from "react-native";
import MainProvider from "./app/store/provider";
import Navigation from "./app/navigation";

const App: FC = () => {
  return (
    <MainProvider>
      <Navigation />
    </MainProvider>
  );
};

LogBox.ignoreAllLogs();

export default App;