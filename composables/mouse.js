export const useMouseX = () => {
  const x = useState('x', () => 0)
  const Update = (event) => {
    x.value = event.pageX
  }
  onMounted(() => window.addEventListener('mousemove', Update))
  onUnmounted(() => window.removeEventListener('mousemove', Update))
  return { x }
}

export const useMouseY = () => {
  const y = useState('y', () => 0)
  const Update = (event) => {
    y.value = event.pageY
  }
  onMounted(() => window.addEventListener('mousemove', Update))
  onUnmounted(() => window.removeEventListener('mousemove', Update))
  return { y }
}
