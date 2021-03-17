import React, { createContext } from "react";

const UserContext = createContext(
  "this is a Default Value, this is optional, if this is there, there is no need for Provider"
);

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
