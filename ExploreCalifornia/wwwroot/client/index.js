// Whoa?!? What is this?
// Thanks to the style-loader and css-loader, webpack allows us import css,
// and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!

import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './store'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Main } from './components'

ReactDOM.render(<Main />, document.getElementById('container'))
