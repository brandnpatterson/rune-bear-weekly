/*
  Webpack entry point
*/

import '../scss/style.scss';

import './hamburger.js';
import './log-in.js';
import './register.js';
import './table-of-contents.js';
import './about.js';

import { $ } from './modules/bling';
import typeAhead from './modules/typeAhead';

typeAhead( $('.search') );
