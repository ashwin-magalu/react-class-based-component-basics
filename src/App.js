import React from "react";
import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import Parent from "./components/Parent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import LifeCycleA from "./components/LifeCycleA";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorBoundaryMain from "./components/ErrorBoundaryMain";
import ClickCounter from "./HOC/ClickCounter";
import HoverCounter from "./HOC/HoverCounter";
import ClickCounter2 from "./RenderProps/ClickCounter2";
import HoverCounter2 from "./RenderProps/HoverCounter2";
import User from "./RenderProps/User";
import ComponentC from "./Context/ComponentC";
import { UserProvider } from "./Context/userContext";
import PostList from "./HTTP/PostList";
import PostForm from "./HTTP/PostForm";
//import Counter from "./RenderProps/Counter";

function App() {
  return (
    <div className="App">
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* <FunctionClick /> */}
      {/* <EventBind /> */}
      {/* <Parent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <LifeCycleA /> */}
      {/* <ErrorBoundaryMain>
        <ErrorBoundary heroName="Batman" />
      </ErrorBoundaryMain>
      <ErrorBoundaryMain>
        <ErrorBoundary heroName="Superman" />
      </ErrorBoundaryMain>
      <ErrorBoundaryMain>
        <ErrorBoundary heroName="Joker" />
      </ErrorBoundaryMain> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}

      {/* <ClickCounter name="Ashwin" />
      <HoverCounter /> */}

      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "Ashwin" : "Guest")} /> */}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* <UserProvider value={"Ashwin"}>
        <ComponentC />
      </UserProvider> */}

      {/* <PostList /> */}
      <PostForm />
    </div>
  );
}

export default App;
