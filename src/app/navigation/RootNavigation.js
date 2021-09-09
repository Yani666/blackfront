import {Switch,Route} from "react-router-dom";
import {Auth, StoreComponent, Home} from "../views";


const RootNavigation = () => (
  

<Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Auth}/>
        <Route exact path="/signup" component={Auth}/>
        <Route path="/store" component={StoreComponent}/>
        
        
    </Switch>
    

)

export default RootNavigation;