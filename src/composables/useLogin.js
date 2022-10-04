import { ref } from 'vue'
import { auth } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const error = ref(null)

const login = async (email, password) => {

	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
		error.value = null

		return response
	} catch (err) {
		error.value = err.message
	}
}

const useLogin = () => {
	return { error, login }
}

export default useLogin
