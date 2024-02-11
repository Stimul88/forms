import Tooltip from "./Tooltip";

const tooltip = new Tooltip();

const btn = document.querySelector(".btn");

const  tooltipText = {
    title: "Popover title",
    message: "And here's some amazing content. It's very engaging. Right?",
  }

const {title, message} = tooltipText;


btn.addEventListener("click", (event) => {
  event.preventDefault();

  const popover = document.querySelector('.popover')

  if (popover) {
    document.body.removeChild(popover)
  } else {
    tooltip.showTooltip(title,message, btn)
  }
})

