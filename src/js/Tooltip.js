export default class Tooltip {
  constructor() {
  }

  showTooltip(title, message, element) {
    const tooltipElement = document.createElement('div')
    tooltipElement.classList.add(('popover'))

    const titleTag = document.createElement('div');
    titleTag.classList.add(('popover-title'))

    const messageTag = document.createElement('div');
    messageTag.classList.add(('popover-content'))


    const {right, top} = element.getBoundingClientRect()

    tooltipElement.style.left = right - 270 + 'px';
    tooltipElement.style.top = top - 110 +'px';

    titleTag.textContent = title
    messageTag.textContent = message

    tooltipElement.appendChild(titleTag)
    tooltipElement.appendChild(messageTag)

    document.body.appendChild(tooltipElement)
  }
}
