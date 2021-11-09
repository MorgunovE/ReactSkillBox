import React from "react";
import {starWars, uniqueNamesGenerator} from "unique-names-generator";
const styles = require("./starWarsNameClass.less");

interface IStarWarsNameClassState {
  name:string;
  count:number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
  state: Readonly<IStarWarsNameClassState> = {name: this.randomName(), count: 0}
  // constructor(props: {}) {
  //   super(props);
  //   this.state = {name: '123'}
  // }
  public render() {
    console.log('>>', this.state.count)
    return (
      <section className={styles.container}>
        <span className={styles.name}>{this.state.name}</span>
        <div className={styles.gap}/>
        <button className={styles.button} onClick={this.handleClick}>I need name!</button>
      </section>
    )
  }
  private handleClick = () => {
    this.setState({name: this.randomName()})
    this.setState((state, props) => ({count: state.count + 1}))
  }
  
  private randomName():string {
    // this.state.name = '1231';
    return uniqueNamesGenerator({
      dictionaries: [starWars],
      length: 1
    });
  }
}
