import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
import NavigationBar from './screens/navigationBar/NavigationBar.jsx';
import Background from './components/config/Background.jsx';


function App() {

  return (
    <>
      <div className='App'>
          <div className="app-nav">
            <NavigationBar />
            </div>
            <Background />
          {/* <Particles 
            id="tsparticles"
            options={{
              background: {
                color:"#0e3053",
              },
              fullScreen: {
                enable: true,
                zIndex: -1
              },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  // onHover: {
                  //   enable: true,
                  //   mode: "repulse",
                  // },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 200,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffff5f",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1,
                  straight: false,
                },
              },
            }}
      /> */}

      </div>
    </>
  )
}

export default App;
