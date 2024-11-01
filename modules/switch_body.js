export const switchBody = ({ headerFunction, bodyFunction, switchBodyFunctions }) => {
  if(typeof(bodyFunction) == 'function' && typeof(headerFunction) == 'function') {
    const page = document.getElementById('fullscreen')
    page.innerHTML = ''

    main_page = headerFunction(switchBodyFunctions) + bodyFunction(switchBodyFunctions)
    $('#fullscreen').append(main_page)
    dispatchEvent(new Event('load'));
  }
}