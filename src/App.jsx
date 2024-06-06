
import './App.css'
import BodyCompont from './components/Body/BodyOneComponent';
import HeaderCompont from './components/Header/HeaderComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import TwoBody from './components/Body/TwoBodyComponent';
import BodyThreComponent from './components/Body/PartThreBody';
import BodyFour from './components/Body/Bodyfour';
function App(){
  return (
    <section>
      <HeaderCompont/>
      <BodyCompont/>
      <TwoBody/>
      <BodyThreComponent/>
      <BodyFour/>
    </section>
  )
}

export default App
