import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

function App() {
  const divStyle = {
    'border': '1px solid red'
  }
  return (
    <div style={divStyle}>
      <h1>Hello</h1>
      <Car name={'Ford'} year={2018}>
        <p style={{color: 'red'}}>Test</p>
      </Car>
      <Car name="BMW" year={2020} />
    </div>
  );
}

export default App;
