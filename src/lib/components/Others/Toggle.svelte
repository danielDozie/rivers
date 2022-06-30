<script context='module'>

import {mobileMenuStore} from '$lib/store.svelte'
	
export const toggleMenu = () => {
		mobileMenuStore.menuToggle()
	};

</script>