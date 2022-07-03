<script context="module">
import { writable } from 'svelte/store';

export const mobileMenuStore = (() => {
  const { subscribe, set, update} = writable(false);

  return {
    subscribe,
    //define ur store specific methods
    menuToggle: () => update(props => props = !props),
  }
})();

export const readMoreStore = (() => {
  const {subscribe, set, update} = writable(false);
  return {
    subscribe,
    readMoreToggle: () => update(props => props = !props)
  }
})();

export const clients = (() => {
  const { subscribe, set, update}  = writable([]);
  return {
    subscribe,
    updateClients: () => update(props => props = props)
  }
})();
</script>
