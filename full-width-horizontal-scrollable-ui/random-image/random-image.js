import { sizes } from './sizes.js'

const randomIndexes = Array.from({ length: sizes.length }, (_, i) => i).sort(
  () => Math.random() - 0.5
)

let currentIndex = 0

const getRandomImage = () => {
  const index = randomIndexes[currentIndex] ?? 0
  currentIndex = (currentIndex + 1) % randomIndexes.length
  const fileName = `${index}`.padStart(3, '0') + '.webp'
  const url = './random-image/images/' + fileName
  const [width, height] = sizes[index]
  return { url, width, height }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.dispatchEvent(new CustomEvent('inview', { bubbles: false }))
      observer.unobserve(entry.target)
    }
  })
})

class RandomImage extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const { url, width, height } = getRandomImage()
    this.shadow.innerHTML = `<style>
      :host {
        display: block;
        position: relative;
        aspect-ratio: ${width} / ${height};
        width: auto;
        height: 100%;
        background-color: #000;
        overflow: hidden;
      }

      button {
        all: unset;
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        width: 1.3em;
        height: 1.3em;
        display: grid;
        place-content: center;
        background: #000;
        opacity: 0.7;
        color: #fff;
        cursor: pointer;
        &:hover{
          opacity: 1;
        }
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        scale: 1.5;
        opacity: 0;
        &[data-loaded="true"] {
          transition: 0.3s ease-in-out;
          scale: 1;
          opacity: 1;
        }
      }
    </style>
    `

    // const removeButton = document.createElement('button')
    // removeButton.textContent = '×'
    // removeButton.addEventListener('click', () => {
    //   this.remove()
    // })
    // this.shadow.appendChild(removeButton)

    const img = document.createElement('img')
    img.alt = 'Random Image'

    img.addEventListener(
      'inview',
      () => {
        img.src = url
      },
      { once: true }
    )

    img.addEventListener(
      'load',
      () => {
        img.dataset.loaded = 'true'
      },
      {
        once: true,
      }
    )

    observer.observe(img)

    this.shadow.appendChild(img)
  }
}

customElements.define('random-image', RandomImage)
