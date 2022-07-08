/* eslint-disable no-unused-vars */

import { writable } from 'svelte/store';

export const mobileMenuStore = (() => {
  const { subscribe, update} = writable(false);

  return {
    subscribe,
    //define ur store specific methods
    menuToggle: () => update(props => props = !props),
  }
})();

export const readMoreStore = (() => {
  const {subscribe, update} = writable(false);
  return {
    subscribe,
    readMoreToggle: () => update(props => props = !props)
  }
})();

export const clients = (() => {
  const { subscribe, update}  = writable([]);
  return {
    subscribe,
    updateClients: () => update(props => props)
  }
})();

export const formDialog = (() => {
  const {subscribe, update} = writable(false);
  
  return {
    subscribe,
    showForm: () => update(props => props = !props)
  }
})();


export const formEntries = (() => {
  const { subscribe, set} = writable({});
  return {
    subscribe,
    formData: (props) => set(props)
  }
})();

export const commentData = (() => {
  const {subscribe, update} = writable([])
  return {
    subscribe,
    updateWith: (value) => update(props => props = value)
  }
})()
