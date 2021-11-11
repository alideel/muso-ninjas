import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)
const pending = ref(false)
const login = async (email , password) => {
    error.value = null
    pending.value = true
    try {
        const res = await projectAuth.signInWithEmailAndPassword(email,password)
        pending.value = false
        console.log(res)
        error.value = null
        return res
    }
    catch(err) {
        pending.value = false
        console.log(err.message)
        error.value = err.message 
    }
    
}

const useLogin = () => {
    return {error , login , pending}
}

export default useLogin