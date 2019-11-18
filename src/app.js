// app code here
import React from 'react';
import "./sass/style.scss";
import ReactDOM from 'react-dom';


class App extends React.Component {
  render(){
    return(
      <h1> App rendered </h1>
    )
  }
}

export default App;

ReactDOM.render(<App/>,document.querySelector('#app'));
