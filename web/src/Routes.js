// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

/**
 *  the routes should have been mane and cacao
 */
const Routes = () => {
  return (
    <Router>
      <Route path="/mañana" page={MaAnaPage} name="mañana" />
      <Route path="/mané" page={ManPage} name="mané" />
      <Route path="/cação" page={CaOPage} name="cação" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
