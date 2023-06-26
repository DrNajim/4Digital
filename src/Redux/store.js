import {configureStore} from "@reduxjs/toolkit"
import Studentreducer from "./Reducer/Studentreducer"

const Store = configureStore({
    reducer : {
        ListTasks : Studentreducer, 
    }
})

export default Store