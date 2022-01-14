import * as React from "react";
import { Suspense } from "react";
import { hot } from "react-hot-loader";
import RocketList from "./RocketList";
import { RelayEnvironmentProvider } from "./RelayEnvironmentProvider";

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RelayEnvironmentProvider>
        <RocketList />
      </RelayEnvironmentProvider>
    </Suspense>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
