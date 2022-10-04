<script setup>
import SignUpForm from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const router = useRouter();

const enterChat = () => {
	router.push('/chatroom')
};

const showForm = ref(false);
</script>

<template>
	<div class="welcome container">
		<p>Welcome</p>
		<div v-if="showForm">
			<h2>Sign up</h2>
			<SignUpForm @successSignup="enterChat"/>
			<p>
				Already registered?
				<span @click="showForm = false">Login</span> instead.
			</p>
		</div>
		<div v-else>
			<h2>Login</h2>
			<Login @successLogin="enterChat" />
			<p>
				No account yet?
				<span @click="showForm = true">Signup</span> instead.
			</p>
		</div>
	</div>
</template>

<style>
.welcome {
	text-align: center;
	padding: 20px 0;
}
.welcome form {
	width: 300px;
	margin: 20px auto;
}
.welcome label {
	display: block;
	margin: 20px 0 10px;
}
.welcome input {
	width: 100%;
	padding: 10px;
	border-radius: 20px;
	border: 1px solid #c4c4c4;
	outline: none;
	color: #999;
	margin: 10px auto;
}
.welcome span {
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}
.welcome button {
	margin: 20px auto;
}
</style> 