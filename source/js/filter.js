
import './vendor/nouislider.js';

const slider = document.querySelector('#slider');
const minInput = document.querySelector('.field--min');
const maxInput = document.querySelector('.field--max');
const resetButton = document.querySelector('.button--reset');

const createSlider = () => {
  noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    step: 10,
    range: {
      'min': 0,
      'max': 1000
    },
    cssPrefix: '',
    cssClasses: {
      target: 'range',
      base: 'range__base',
      origin: 'range__origin',
      handle: 'range__handle',
      horizontal: 'range--horizontal',
      textDirectionLtr: 'range--txt-dir-ltr',
      handleLower: 'range__handle--lower',
      ltr: 'range--ltr',
      handleUpper: 'range__handle--upper',
      touchArea: 'range__touch-area',
      connect: 'range__connect',
      connects: 'range__connects',
      drag: 'range--state-drag',
      tap: 'state-tap',
      active: 'range__handle--active',
      tooltip: 'tooltip',
    },
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
};

const setValues = () => {
  minInput.value = slider.noUiSlider.get()[0];
  maxInput.value = slider.noUiSlider.get()[1];
};

const getValues = () => {
  slider.noUiSlider.set([minInput.value, maxInput.value])
};

function onLevelSliderUpdate() {
  setValues();
}

function onChangeInputs() {
  getValues();
}

function onClickResetButton() {
  slider.noUiSlider.reset();
}

const activateNoUiSlider = () => {
  if (slider) {
    createSlider();

    slider.noUiSlider.on('update', onLevelSliderUpdate);
    minInput.addEventListener('input', onChangeInputs);
    maxInput.addEventListener('input', onChangeInputs);
    resetButton.addEventListener('click', onClickResetButton);
  }
};

export { activateNoUiSlider };
