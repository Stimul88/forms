import Tooltip from "../Tooltip";

const tooltip = new Tooltip()



const  tooltipText = {
  title: "Popover title",
  message: "And here's some amazing content. It's very engaging. Right?",
}

/**
 * @jest-environment jsdom
 */

test('create DOM test', () => {
  document.body.innerHTML = '<div class="container"></div>div>'

  const btn = document.querySelector(".btn");

  tooltip.showTooltip(tooltipText.title, tooltipText.message, btn)

  const popover = document.querySelector('.popover')

  expect(popover.innerHTML).not.toBeNull();
});



test('use jsdom in this test file', () => {

  document.body.innerHTML = '<div class="container"></div>div>'
  const container = document.querySelector('.container');
  expect(container).not.toBeNull();
});



