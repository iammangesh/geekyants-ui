// app code here
import React from 'react';
import "./sass/style.scss";
import ReactDOM from 'react-dom';
import Layout from './components/Layout';


class App extends React.Component {
  render(){
    return(<Layout/>);
  }
}

export default App;

ReactDOM.render(<App/>,document.querySelector('#app'));
