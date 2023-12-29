import './App.css';
import Nav from './components/Nav'
import Content from './components/Content';
import './index.css'
import './font.css'

function App() {
  return (
    <div className='flex flex-col'>
        <Nav></Nav>
        <Content></Content>
    </div>
  );
}

export default App;
