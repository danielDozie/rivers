<script context='module'>

import {mobileMenuStore} from '$lib/store'
	
export const toggleMenu = () => {
		mobileMenuStore.menuToggle()
	};

</script>