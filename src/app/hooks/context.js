import {createContext, useState, useEffect} from "react"
import {getUser, logoutWS} from '../services/ws'
export const Ctx = createContext()

 const AppCtx = (props) =>{


    const  [user,setUser] = useState(null)
    
    const login = (user) => {
        setUser(user)
        localStorage.setItem("USER", JSON.stringify(user))
    }


    const logout = () => {
        setUser(null)
        logoutWS()
        localStorage.removeItem("USER")
    }

    useEffect(()=>{
        async function checkSession(){
            try{
                const myUser = JSON.parse(localStorage.getItem("USER"))
                if(myUser){
                    setUser(myUser)
                }else{
                const {data} = await getUser()
                setUser(data.result._id ? data.result : null)
                if(data.result._id){
                    localStorage.setItem("USER", JSON.stringify(data.result))
                }
                }
                
            }catch(error){
                console.log("error context", error)
                setUser(null)

            }
        }
        checkSession()
    },[])

    const value = {
        user,
        login,
        logout
    }
    return <Ctx.Provider {...props} value={value}/>
}

export default AppCtx