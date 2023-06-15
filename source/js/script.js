import { removeClassNoJs } from './remove-class-no-js.js';
import { initButtonMenuActions } from './mobile-menu.js';
import { undoDefaultActions } from './undo-default-actions.js';
import { initSwiperActions } from './swiper.js';

removeClassNoJs();
undoDefaultActions();
initButtonMenuActions();
initSwiperActions();
