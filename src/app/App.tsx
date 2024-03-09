import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type react from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@/app/providers/StoreProvider/config/store";
import RootRouter from "@/app/RootRouter";

import { myTheme } from "./theme";

const App: react.FC = () => {
  return (
    <Provider store={store}>
      <MantineProvider theme={myTheme}>
        <BrowserRouter>
          <MantineProvider defaultColorScheme='light'>
            <Notifications position='top-right' />
            <RootRouter />
          </MantineProvider>
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
