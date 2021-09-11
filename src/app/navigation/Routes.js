import {Switch,Route} from "react-router-dom";
import {Car, Dashboard, Suggestion} from "../views";
import {Layout, Profile, SuggestionCard, Uproducts} from '../components'



const Router = () => (
  
<Layout>
<Switch>
       
        <Route path="/store/dashboard" component={Dashboard}/>
        <Route path="/store/uploadprod" component={Uproducts}/>
        <Route path="/store/suggestions" component={Suggestion}/>
        <Route path="/store/carrito" component={Car}/>
        <Route path="/store/profile" component={Profile}/>
        
        
        
    </Switch>
    </Layout>

)

export default Router;