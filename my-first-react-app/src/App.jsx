import DemoButton from "./demo-button";
import Hello from "./Hello";
import RandomComp from "./RandomComponent";





function App() {
  return <div>
    <h1>
      This is a Sample Button
    </h1>
    <DemoButton></DemoButton>
    <DemoButton></DemoButton>
    <Hello></Hello>
    <RandomComp></RandomComp>
    <RandomComp></RandomComp>
    <RandomComp></RandomComp>
    <RandomComp></RandomComp>
    <RandomComp></RandomComp>



  </div>;

}

export default App;
//its very necessary to export a component before importing

//there are two types of componet-->prefer functional componet always
//functional component-> simply JavaScript functions that return React elements.
//className component-> className components are ES6 classNamees that extend from React.Component and can have state and lifecycle methods.

//component or funciton names alawys starts from Capitalism;

//2.12.41