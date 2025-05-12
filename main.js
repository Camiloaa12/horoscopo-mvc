import HoroscopoController from './controller/horoscopoController.js';
import HoroscopoModel from './model/horoscopoModel.js';
import HoroscopoView from './view/horoscopoView.js';

const model = new HoroscopoModel();
const view = new HoroscopoView();
const controller = new HoroscopoController(model, view);
