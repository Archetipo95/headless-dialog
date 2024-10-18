export const useFocus = () => {
  const focusedElement = ref(null)

  // Funzione per ottenere l'elemento attualmente in focus
  const getFocusedElement = () => {
    focusedElement.value = document.activeElement;
  }

  // Aggiunge un listener per monitorare i cambi di focus
  onMounted(() => {
    window.addEventListener('focusin', getFocusedElement)
  })

  // Rimuove il listener quando il componente viene distrutto
  onUnmounted(() => {
    window.removeEventListener('focusin', getFocusedElement)
  })

  return {
    focusedElement,
  }
}
