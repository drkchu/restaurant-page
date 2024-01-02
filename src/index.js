/** CSS IMPORTS **/
import './styles/general.css'
import './styles/home.css'
import './styles/contact.css'
import './styles/menu.css'

import home from './pages/home'
import initialSetup from './pages/initialSetup';

initialSetup(); // since I'm using HtmlWebpackPlugin to generate a default index.html file in dist/, I need to add the div#content

// initializes starting at home
home();