var stepHtml=1
setHtmlStepClass(1)
function setHtmlStepClass(vax) {
    let str=''
    switch (vax) {
        case 1:
            str=' <div id="oneHtml" class="item one c1">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 1')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('When the download is complete, run the program')+'</div>\n' +
                ' </div>\n' +
                ' <div id="towHtml" class="item tow c2 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 2')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('The program will run on the tray')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please wait patiently for the installation to complete')+'</div>\n' +
                ' </div>\n' +
                ' <div id="threeHtml" class="item three c4 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 3')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('After installation')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please complete the relevant configuration in the pop-up page')+'</div>\n' +
                ' </div>'
                $('.info_msg .my_x_t1').html(_mx('Thank! Download in progress'))
                $('.info_msg .my_x_t2').html(_mx('Do not close this page'))
                $('.info_msg .my_x_t2').show()
                $('.info_msg .item_btn').show()
                $('.info_progress_wk').hide()
                $('#configBtn').hide()
        break
        case 2:
            str='<div id="oneHtml" class="item one c3 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 1')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('When the download is complete, run the program')+'</div>\n' +
                '        </div>\n' +
                '        <div id="towHtml" class="item tow c1">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 2')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('The program will run on the tray')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please wait patiently for the installation to complete')+'</div>\n' +
                '        </div>\n' +
                '        <div id="threeHtml" class="item three c4 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 3')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('After installation')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please complete the relevant configuration in the pop-up page')+'</div>\n' +
                '        </div>'
            $('.info_msg .my_x_t1').html(_mx('Thank! Download in progress'))
            $('.info_msg .my_x_t2').html(_mx('Do not close this page'))
            $('.info_msg .my_x_t2').show()
            $('.info_msg .item_btn').show()
            $('.info_progress_wk').show()
            $('#configBtn').hide()
        break
        case 3:
            str='<div id="oneHtml" class="item one c3 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 1')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('When the download is complete, run the program')+'</div>\n' +
                '        </div>\n' +
                '        <div id="towHtml" class="item tow c2 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 2')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('The program will run on the tray')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please wait patiently for the installation to complete')+'</div>\n' +
                '        </div>\n' +
                '        <div id="threeHtml" class="item three c5">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 3')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('After installation')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please complete the relevant configuration in the pop-up page')+'</div>\n' +
                '        </div>'
            $('.info_msg .my_x_t1').html(_mx('Thank you for your installation'))
            $('.info_msg .my_x_t2').html(_mx('Please complete the final configuration before starting'))
            $('.info_msg .my_x_t2').show()
            $('.info_msg .item_btn').hide()
            $('.info_progress_wk').hide()
            $('.set_info_ip_wk').show()
            $('#configBtn').hide()
        break
        case 4:
            str='<div id="oneHtml" class="item one c3 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 1')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('When the download is complete, run the program')+'</div>\n' +
                '        </div>\n' +
                '        <div id="towHtml" class="item tow c2 txx">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 2')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('The program will run on the tray')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please wait patiently for the installation to complete')+'</div>\n' +
                '        </div>\n' +
                '        <div id="threeHtml" class="item three c5">\n' +
                '     <div class="icon_x"></div>\n' +
                '     <div class="icon_t1">'+_mx('Step 3')+'</div>\n' +
                '     <div class="icon_t2">'+_mx('After installation')+'</div>\n' +
                '     <div class="icon_t3">'+_mx('Please complete the relevant configuration in the pop-up page')+'</div>\n' +
                '        </div>'
            $('.info_msg .my_x_t1').html(_mx('Thank you for your installation'))
            $('.info_msg .my_x_t2').html(_mx('Please complete the final configuration before starting'))
            $('.info_msg .my_x_t2').hide()
            $('.info_msg .item_btn').hide()
            $('.info_progress_wk').hide()
            $('.set_info_ip_wk').hide()
            $('#configBtn').show()
        break
    }
    $('#stepHtml').html(str)
}