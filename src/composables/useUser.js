import { ref } from 'vue'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

export const user = ref(auth.currentUser);

onAuthStateChanged(auth, (_user) => {
  user.value = _user
})