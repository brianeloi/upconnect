import { generatePdf } from './modules/jspdf.js'
import { mainPage } from './js/initial_page/main_page.js'
//import { ExcelToJSON } from './modules/xlsx_to_json.js'
import { mainTable } from './db/main_table2.js'
import { callCss } from './modules/call_css.js'

callCss('main_page')
callCss('form_content')
callCss('header_page')
callCss('faq_page')

mainPage()

//xls_json = ExcelToJSON()
//$('#fullscreen').append('<strong>Holla</strong>')
/*const table = mainTable
generatePdf({ table, answers })*/

/*
var waitForEl = function(selector, callback, time = 100) {
    if (jQuery(selector).length) {
        callback();
    } else {
        setTimeout(function() {
            waitForEl(selector, callback);
        }, time);
    }
};*/
//waitForEl('#fullscreen', function() {
//})

//window.addEventListener('load', function () {
//    $('#fullscreen').append('<strong>Hello</strong>')
//})

/*
localStorage.setItem('myCat', JSON.stringfy({my: 'object'})); => undefined
myObject = JSON.parse(localStorage.getItem('myCat')); => {my: 'object'}
*/


