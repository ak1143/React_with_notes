# Context API
- Managing state is an essential part of developing applications in React. A common way to manage state is by passing props. Passing props means sending data from one component to another. It's a good way to make sure that data gets to the right place in a React application.
- But it can be annoying to pass props when you have to send the same data to lots of components or when components are far away from each other. This can make an application slower and harder to work with.
- Fortunately, React provides a built-in feature known as the **context API** that helps  “teleport” data to the components that need it without passing props.

## Prop drilling in react
![image](https://github.com/yghugardare/React-learn/assets/117991996/a8fc93ef-2b2f-4d3b-9d91-9ae58867e370)
- From the above diagram, to pass data down to the component "Child B", we need to pass it down through all the intermediate components, even if those components don't actually use the data themselves. This is what is referred to as "prop drilling."

- Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.

- This is where the Context API comes in. With Context API, you can store data at the top level of the component tree and make it available to all(**global**) to other components that need it without passing props.
![image](https://github.com/yghugardare/React-learn/assets/117991996/233933ff-d399-43f4-8356-d30288494a23)

- For example, let’s say you have a shopping app with a component that shows a user’s shopping cart, and another component that shows the user’s order history.

- With Context API, you can create a “context” that holds the user’s shopping information, like their cart and order history. Then, you can use that context in both the shopping cart and the order history component, without having to pass the information down through props.

- It’s like having a big box that holds all the things you need for your shopping trip. You can take things out of the box when you need them, and put them back in when you’re done.

## ContextApi components - 
- Context API consists of two main components: 
    1. the context provider 
    2. the context consumer. 
- The provider is responsible for creating and managing the context, which holds the data to be shared between components. On the other hand, the consumer is used to access the context and its data from within a component.
- In the example given, the provider will create the context that holds the user's shopping information, while the consumer components (shopping cart and order history) will access that context to retrieve the data they need. This avoids the need to pass the information down through props, making your code more efficient and easier to manage.

## Steps to use context Api
1. Create a context- a centralised store
```bash
touch ./src/context/UserContext.js
```
```javascript
import {createContext} from 'react';
const UserContext = createContext();
export default UserContext;
```
2. Create a context provider - ensures that components are aware that there is a context available,sort of a wrapper
```bash
touch ./src/context/UserContextProvider.jsx
```
```javascript
import React, { useState } from 'react'
import UserContext from './userContext';

function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
    return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
```
3. Consume the context wherever you want.To consume we add wrapper to the parent of the component, to which we want to send data.
```bash
cd ./src/App
```
Set up a boilerplate, for prviding the context 
```javascript
import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let { setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();

    if (userName === "" || password === "") {
      alert("Please fill all fields");
    } else {
      setUser({ userName, password });
    }
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-slate-700 text-white grid gap-5 place-content-center p-4"
    >
      <h1 className="text-center text-xl">Login</h1>
      <div>
        <label htmlFor="user">Enter Username: </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          id="user"
          type="text"
          className="p-2 bg-slate-300 text-black"
          placeholder="enter user name"
          value={userName}
        />
      </div>
      <div>
        <label htmlFor="Pass">Enter Password: </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="Pass"
          type="pasword"
          className="p-2 bg-slate-300 text-black"
          placeholder="enter Password"
        />
      </div>
      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2">
        Submit
      </button>
    </form>
  );
}

export default Login;

```
Now consume the `user` and `setUser` in Login and User components.
```bash
./src/components/Login.jsx
```
```javascript
function App() {
  return (
    <UserContextProvider >
      <Login/>
      <User/>
    </UserContextProvider>
  );
}
```
And then in user as well
```bash
./src/components/User.jsx
```
```javascript
import React, { useContext } from 'react'
import UserContext from '../context/userContext'
function User() {
    let {user} = useContext(UserContext);
  return (
    <div className='bg-slate-900 text-white  h-[70vh] p-4'>
        <h1>User Details</h1>
        <p>UserName: {user?.userName}</p>
        <p>Password: {user?.password}</p>   
    </div>
  )
}
```

## `useContext` in React
- useContext is a React Hook that lets you read and subscribe to context from your component.
- Basically allows you to consume the context in other component
```javascript
let value = useContext(someContext);
```
- it returns context value for the calling component. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree. If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context. The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.
- `someContext` -  The context that you’ve previously created with createContext. The context itself does not hold the information, it only represents the kind of information you can provide or read from components.