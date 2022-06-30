<script constext='module'>

import {mobileMenuStore} from '$lib/store.svelte'
	
export const toggleMenu = () => {
		mobileMenuStore.menuToggle()
	};
</script>