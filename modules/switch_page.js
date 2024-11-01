export const switchPage = ({ header, body }) => {
  if(typeof(newPage) == 'function') {
    const page = document.getElementById('fullscreen')
    page.innerHTML = ''

    const main_page = header + body
    $('#fullscreen').append(main_page)
    dispatchEvent(new Event('load'));
  }
}