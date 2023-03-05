import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Votabler'
	}
});

export default app;