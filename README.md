## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Fundamental concept of useContext or Reducer

<p>UseContext</p>
<p>UseReducer</p>

### Use Context

### Step-1:

First of all, We need create a Context Folder. 'context' -> UserContext.js

### step-2:

import { createContext } from "react";

export const UserContext = createContext();

### step-3:

Go To 'App.js' componenet and then->

import { UserContext } from "./context/UserContext";

<UserContext.Provider value={[user]}>
<Home user={user} />
</UserContext.Provider>

### Make sure before you must import children's components to the app components "Home.js".

### step-4:

import { userContext } from "../context/userContext";

const Home = () => {

const [user] = useContext(userContext);

return (<p>{user}<p>);
};

export default Home;
