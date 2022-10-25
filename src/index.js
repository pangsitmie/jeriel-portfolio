import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.querySelector("#root"))

// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll('[data-content]')

// tabs.forEachtab(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target)

//         tabContents.forEach(tabContent => {
//             tabContent.classList.remove('qualification__active')
//         })
//         target.classList.add('qualification__Active')

//         tab.forEach(tab => {
//             tab.classList.remove('qualification__active')
//         })
//         tab.classList.add('qualification__active')
//     })
// })