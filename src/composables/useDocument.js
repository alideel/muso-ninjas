import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const useDocument = (collection , id) => {
    const error = ref(null)
    const pending = ref(false)
    let docRef = projectFirestore.collection(collection).doc(id)

    const deleteDoc = async () => {
        error.value = null
        pending.value = true 
        try {
            const res = await docRef.delete()
            pending.value = false 
            return res 
        } 
        catch(err) {
            console.log(err.message)
            pending.value = false
            error.value = 'there is an error you can not delete this playlist'
        }
    }

    const updateDoc = async (updates) => {
        error.value = null
        pending.value = true 
        try {
            const res = await docRef.update(updates)
            pending.value = false 
            return res 
        } 
        catch(err) {
            console.log(err.message)
            pending.value = false
            error.value = 'you could not update this document'
        }
    }
    return {error , pending , deleteDoc , updateDoc}
}
export default useDocument