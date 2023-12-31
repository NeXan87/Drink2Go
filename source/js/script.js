import { removeClassNoJs } from './remove-class-no-js.js';
import { initButtonMenuActions } from './mobile-menu.js';
import { undoDefaultActions } from './undo-default-actions.js';
import { activateSwiper } from './swiper.js';
import { activateNoUiSlider } from './filter.js';
import { activateLeaflet } from './map.js';

removeClassNoJs();
undoDefaultActions();
initButtonMenuActions();
activateSwiper();
activateNoUiSlider();
activateLeaflet();
