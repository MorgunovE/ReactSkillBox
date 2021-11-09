import React from "react";
import {hot} from "react-hot-loader/root";
import {starWars, uniqueNamesGenerator} from "unique-names-generator";
const styles = require("./starWarsNameClass.less");

interface StarWarsNameFunctionState {
  name: string;
  count: number;
}

function StarWarsNameFunction() {
  const randomName = () => uniqueNamesGenerator({dictionaries:[starWars], length: 1})
  // 1 way
  // const [name, setName] = React.useState(randomName);
  // const [count, setCount] = React.useState(0);
  // const handleClick = () => {
  //   setName(randomName)
  //   setCount((prevCount)=>prevCount + 1)
  // }
  // console.log('>>', count)
  //
  // 2 way
  const [state, setState] = React.useState<StarWarsNameFunctionState>({name: randomName(), count: 0})
  const handleClick  = () => {
    // setState((prevState)=>({name: randomName(), count:prevState.count + 1})) // 2 fields changed
    setState((prevState)=>({...prevState, name: randomName()})) // 1 field changed
    setState((prevState)=>({...prevState, count:prevState.count + 1})) // 1 field changed
  }
  console.log('>>', state.count)
  //
  return (
    <section className={styles.container}>
      <span className={styles.name}>{state.name}</span>
      <div className={styles.gap}/>
      <button className={styles.button} onClick={handleClick}>I need name! = Count: {state.count}</button>
    </section>
  )
}
export const StarWarsNameFunctionComponent = hot(StarWarsNameFunction)