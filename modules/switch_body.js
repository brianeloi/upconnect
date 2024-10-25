export const switchBody = ({ header, body }) => {
  if(typeof(newBody) == 'function') {
    const page = document.getElementById('fullscreen')
    page.innerHTML = ''

    main_page = header + body
    $('#fullscreen').append(main_page)
    dispatchEvent(new Event('load'));
  }
}