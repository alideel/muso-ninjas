import  { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const useCollection = (collection) => {
    const error = ref(null)
    const pending = ref(false)

    const addDoc = async (doc) => {
        error.value = null 
        pending.value = true
        try {
            const res = await projectFirestore.collection(collection).add(doc)
            pending.value = false
            return res 
        }
        catch(err) {
            console.log(err.message)
            error.value = err.message
            pending.value = false
        }
    }
    return {error , addDoc , pending}
}
export default useCollection