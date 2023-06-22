import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import NavigationBar from './screens/navigationBar/NavigationBar.jsx';
// import Particles from './components/config/Particles.jsx';
import Background from './components/config/Background.jsx';
// 

function App() {

  return (
    <>
      <div className='App'>
          <div className="app-nav">
            <NavigationBar />
            </div>
            {/* <Particles /> */}
            <Background />
          

      </div>
    </>
  )
}

export default App;
