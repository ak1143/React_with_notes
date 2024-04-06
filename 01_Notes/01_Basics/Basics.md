# Basics of React

## What is react?

- It is a JS based UI library for building Web and Native(mobile) applications.
- React is in two parts
  1. ReactDom -> built for web applications
  2. ReactNative -> built for mobile applications

## what is component in React ?

- React applications are built from isolated pieces of UI called components. A React component is a JavaScript function that you can sprinkle with markup. Components can be as small as a button, or as large as an entire page.

## What is JSX ? what are rules of JSX?

- JSX (JavaScript XML) is an extension syntax used in React for writing the structure and logic of components in a more expressive and intuitive manner. It allows you to write HTML-like code directly within JavaScript, making it easier to create and manipulate user interfaces.
- Rules -
  1. Return a single root element
  2. To return multiple elements from a component, **wrap them with a single parent tag.**This empty tag is called a _[Fragment.](https://react.dev/reference/react/Fragment)_ Fragments let you group things without leaving any trace in the browser HTML tree. `<>` <br>`Code here` <br>`</>`
  3. Close all tags - if self closing using <img /> use this
  4. Camel Case most things -
     - Use **`className`** instead of **`class`** for applying CSS classes.
     - Use **`htmlFor`** instead of **`for`** for associating labels with form inputs.
  5. First letter of the component inside JSX must be capital. Eg)<Component/>

## what are curly braces in react?

- Within JSX, you can embed JavaScript expressions using curly braces {}. This allows you to include dynamic values, variables, and function calls.
- There primary purpose is to evaluate JS and not Run it. So do not if-else inside it.
- Double Curly braces - {{ and }} is not special syntax, it’s a JavaScript object tucked inside JSX curly braces.
- You can tuck in style , object,arr whatever you want.
- we can also give, function references inside it. If function needs to passed in with an argument we can give reference using a **callback**.
- Examples)
  ```javascript
  function App() {
    let name = "Abhishek";
    return (
      <div style={{ backgroundColor: "red" }}>
        {name}
        <button onClick={() => changeColor("red")}>Add</button>
        <button onClick={functionRef}>Increase value</button>
      </div>
    );
  }
  ```

## what are props in react

- React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props.
- props meaning properties, just like we have html attributes like src,href,etc.
- Props are passed from parent to child components.
- They cannot be changed by the child component.
- If any changes need to be made then they should be done at the parent level.
- They internally work as an object.

### how to pass prop to child component

```javascript
export default function Profile() {
  return (
    <Avatar person={{ name: "Abhishek", age: 21 }} size={100} job="developer" />
  );
}
```

### reading props inside a child component

- If someone else is working in your codebase, he may forget to pass in one or more prop, in that case we use **default prop**

```javascript
function Avatar({ person, size = 100, job }) {
  <>
    <h3>{person.name}</h3>
    <p>{person.age}</p>
    <p>{job}</p>
    <img src="img.png" width={size} height={size} />
  </>;
}
```

## Passing JSX as children

- When you nest content inside a JSX tag, the parent component will receive that content in a prop called children. For example, the Card component below will receive a children prop set to <Avatar /> and render it in a wrapper div:
- components are usually in this format `<Component/>`.
- But when a component has a component inside it , it becomes like this `<Component><Child/></Component>` , then in this case we require children as prop.

```javascript
function Card({ children }) {
  return <div className="card">{children}</div>;
}
export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
```

## Conditional Rendering in react

- Rendering -> Rendering is React's process of calling your component for converting components logic and data into a User Interface(UI) that users can see and interact with on screen.
- Conditional rendering is used when you want your component to show/display something based on some condition(s).
- Three ways to do it ->
  1. Using if else
  2. Using ternary operator `condition?true:false`
  3. Short circuiting `&&` or `||`

```javascript
if (isPacked) {
  return <li className="item">{name} ✔</li>;
}
return <li className="item">{name}</li>;
{
  isPacked ? name + " ✔" : name;
}
{
  isPacked && "✔";
}
```

## List rendering in react

- It refers to process of rendering list of elements dynamically.
- Instead of creating each element individually, we can map over a list of elements and generate react elements dynamically.
- This is a common pattern when dealing with dynamic data, such as a list of items fetched from an API or received as props.
- List rendering is mainly done using two array methods -
  1. map() - which transforms elements and stores them in a new array,
     **we use it to iterate through an array of data and create React components for each item.**
  2. filter() -**for filtering and rendering subsets of data based on specific criteria. For example -Price Filtering**, it also returns array based on the condition specified.
- Know more about array methods - <a href="https://yash-ghugardare-blogs.hashnode.dev/simplifying-javascript-with-useful-array-methods" target="_blank">Click</a>
- key prop tell React which array item each component corresponds to, so that it can match them up later.
- A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.

```javascript
function ShowProducts() {
  // filter products for specific pricing range
  const data = products.filter((product) => {
    return product.price <= 400 && product.discount >= 30;
  });
  return (
    <div className="flex flex-wrap items-center justify-evenly ">
      // mapping over filtered products to display them
      {data.map((product) => (
        <ShopingCart
          key={product.id}
          productName={product.productName}
          price={product.price}
          actualPrice={product.actualPrice}
          discount={product.discount}
        />
      ))}
    </div>
  );
}
```

## render and createRoot in react

```javascript
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- render is used to convert jsx to tree like structure for react to process the code and send it to browser for displaying jsx
- this process is transcompiling, in which jsx code is converted to old js code for backward JS
  engine to understand it. Done using `babel`
- The use of `React.StrictMode` is a wrapper that enables additional checks and warnings for your components. It helps you catch common mistakes and make your code more robust.
- `ReactDOM.createRoot(document.getElementById('root'))`: This part creates a root element where your React application will be mounted. It selects the HTML element with 
the id 'root' and creates a root instance using createRoot.
- behind the scene `createRoot` is using react fibre.To know more <a href="https://yash-ghugardare-blogs.hashnode.dev/understanding-core-concepts-in-react" target="_blank">Click Here</a>

## What are hooks in react?
- hooks are functions that allow you to use state and other React features in functional components. Prior to the introduction of hooks in React 16.8, state and lifecycle 
methods were only available in class components.

## what is useState? counter app, bgChnager,Crud using uaseState
- The React useState hook is used to track state in a function component.
- State refers to the various variables that store some kind of data needed for our application.
- When you use the useState hook in React, you can create variables called state variables and set their initial values. These state variables are 
special because React remembers their values even when the component re-renders. React also provides functions that allow you to update these state variables.
- The useState hook returns an array having two elements, the first one is the state variable and the second is the function that modifies the state variable.
- we can even pass both of them as a prop to other component
- `const [stateVariable, setStateFunction] = useState(initialValue);`
- initial value is optional if not provided then by default it will be null or undefined.
- when you update the state variable with new values, the whole component re renders.
- `setStateFunction` updates the state variable but does not trigger a rerender 
unless there is an object or array passed into it.
```javascript
function App() {
  const [bgColor,setBgColor] = useState('black');

  return (
    <div style={{backgroundColor:bgColor}}>
      <h1>Store</h1>
      <ShowProducts/>
      <BgButton setBgColor={setBgColor}/>
    </div>
  );
}
```
- BgButton component

```javascript
function hoverColor() {}
  return (
    <div>
      {colors.map((clr) => (
        <button
          onClick={() => setBgColor(`${clr.color}`)}
          key={clr.id}
          style={{ backgroundColor: clr.color }}
        >
          {clr.color}
        </button>
      ))}
    </div>
  );
}
```
## useState interview question on counter

![image](https://github.com/yghugardare/React-learn/assets/117991996/c8ba1ec4-8eee-479f-9778-7c22c28d6ab3)

- useState sends setfuncs in batches , becoz of the fibre diffing aslgorithm, because of which in this case, the fibre see's all
  setCounters as one thing repeated multiple time's , it sends only one setCounter instead of sending all in a batch for optimization purpose.
- So here the function calls will be sent in batches. So, react will see them as the same operation and perform it only once. So, the counter
  will increase by only 1 count.

![image](https://github.com/yghugardare/React-learn/assets/117991996/f6a71a97-2042-49f9-8ef9-f52b40fb5ed8)

- it will send another batch in second render only if it sees different types of operation being performed on the same setCounter.
- To increase it by four counts, use the callback which the setCounter accepts and increase it one by one. So, the first function will be called first, the callback will be executed and the next function call will be executed.
- you can apply this similar concept to toggle between values like true false for each click,Example-
```javascript
const [subscribed,setSubscribed] = useState(false);
function App(){
  return (
    <>
      <p>{subscribed?"✅":"❌"}</p>
      <button
      onClick={()=>setSubcribe((prev)=>!prev)}
      >Subscribe</button>
    </>
  )
}
```

## onClick

- this rquires a function reference , but what if on click i want that function to have some parameter ?
- to solve it we use callback
- ```javascript
  <button onClick={() => changeColor("red")}>Red btn</button>
  ```