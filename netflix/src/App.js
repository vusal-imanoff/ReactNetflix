import logo from './logo.svg';
import './App.css';
import Header from './HeaderComponent/Header';
import FirstComponent from './FirstComponent/First'
import Second from './SecondComponent/Second'
import Third from './ThirdComponent/Third'

function App() {
  return (
    <div className="App">
     <Header/>
     <FirstComponent/>
     <Second/>
     <Third/>
    </div>
  );
}

export default App;
