document.querySelector('#speedbump').remove()


let updateTitle = () => {
  let counter    = document.querySelector('#tltbt .Vl')
  let title      = document.title.replace(/(\s\(\d+\))?$/gi, '')
  let count      = counter.textContent
  let newTitle   = `${title} (${count})`
  document.title = newTitle
}

let ready = () => {
  document.querySelector('#tltbt').addEventListener('DOMSubtreeModified', () => {
    updateTitle()
  }, false)
}

setTimeout(() => {
  updateTitle()
  ready()
}, 2000)
