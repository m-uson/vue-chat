import { ref } from 'vue'
import { firestore } from '../firebase/config'
import { collection, addDoc, getDocs, orderBy, query, onSnapshot } from 'firebase/firestore'

const useCollection = () => {
	const addDocument = async (newDocument) => {
		const error = ref(null)
		try {
			const collectionRef = collection(firestore, 'messages')
			await addDoc(collectionRef, newDocument)

			error.value = null
		} catch (err) {
			error.value = err.message
		}

		return { error }
	}

	const getCollection = async () => {
		const documents = ref([])
		const error = ref(null)

		try {
			const collectionRef = query(collection(firestore, 'messages'), orderBy('createdAt', 'asc'))

			onSnapshot(collectionRef, (response) => {
				documents.value = response.docs.map((doc) => {
					return { ...doc.data(), id: doc.id }
				})
				error.value = null
			},
      (err) => {
        console.log(err)
      })
		} catch (err) {
			error.value = err.message
		}

		return { documents, error }
	}

	return { addDocument, getCollection }
}

export default useCollection
