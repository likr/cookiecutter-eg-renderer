import '@webcomponents/custom-elements'
import 'eg-renderer'
import 'eg-renderer-ogdf'

const renderer = document.getElementById('renderer')
window.customElements.whenDefined('eg-renderer-ogdf').then(() => {
  renderer.width = window.innerWidth
  renderer.height = window.innerHeight

  window.addEventListener('resize', () => {
    renderer.width = window.innerWidth
    renderer.height = window.innerHeight
  })
})
