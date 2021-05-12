'use strict';

const options = {
  delay: 2500, // delay for slide switching
  root: "#slider", // root element selector
  width: 750, // width of the slider(without any adaptive)
  slides: [
    // list of slides
    {
      color: "#c62828", // slide color in hex
      text: "RED" // slide text
    },
    {
      color: "#ad1457",
      text: "PINK"
    },
    {
      color: "#6a1b9a",
      text: "PURPLE"
    },
    {
      color: "#4527a0",
      text: "DEEP_PURPLE"
    },
    {
      color: "#283593",
      text: "INDIGO"
    },
    {
      color: "#1565c0",
      text: "BLUE"
    },
    {
      color: "#0277bd",
      text: "LIGHT_BLUE"
    },
    {
      color: "#00838f",
      text: "CYAN"
    },
    {
      color: "#00695c",
      text: "TEAL"
    },
    {
      color: "#2e7d32",
      text: "GREEN"
    },
    {
      color: "#558b2f",
      text: "LIGHT_GREEN"
    },
    {
      color: "#827717",
      text: "LIME"
    },
    {
      color: "#ef6c00",
      text: "ORANGE"
    },
    {
      color: "#d84315",
      text: "DEEP_ORANGE"
    },
    {
      color: "#4e342e",
      text: "BROWN"
    }
  ]
};

const setupSlider = function (options) {
  const root = document.querySelector(options["root"]);
  const el = document.createElement("div");
  el.classList.add("slider");
  root.appendChild(el);

  const slider = document.querySelector(".slider");
  const carousel = document.createElement("div");

  carousel.classList.add("slider_carousel");
  slider.appendChild(carousel);

  const items = options["slides"];
  const sl_car = document.querySelector(".slider_carousel");

  for (let i = 0; i < items.length; i++) {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.style.background = items[i]["color"];
    slide.innerHTML = items[i]["text"];
    sl_car.appendChild(slide);
  }

  let i = 0;

  const interval = function () {
    sl_car.style.transform = "translate(" + -750 * i++ + "px)";

    if (i >= items.length) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(interval, options["delay"]);
};

setupSlider(options);
