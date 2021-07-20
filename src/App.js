import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route component={Home} path='/' exact/> 
        </Switch>
    </BrowserRouter>
    
  )

}

export default App;
