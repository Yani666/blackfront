import {Switch,Route} from "react-router-dom";
import {Auth, Dashboard, Home, SidebarWithHeader} from "../views";
import {Layout, SuggestionCard, Uproducts} from '../components'


const Router = () => (
  
<Layout>
<Switch>
       
        <Route path="/store/dashboard" component={Dashboard}/>
        <Route path="/store/uploadprod" component={Uproducts}/>
        <Route path="/store/suggestions" component={SuggestionCard}/>
        
        
    </Switch>
    </Layout>

)

export default Router;