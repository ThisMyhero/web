$("[data-src]").on('click',function () {
    let vSrc=$(this).attr('data-src')

    let str='<div style="z-index: 888888888;color: #fff;background-color: #2861ce;width: 20px;height: 20px;border-radius: 10px;position: absolute;right: 2px;top: 4px;cursor: pointer" title="close" id="closeIcon">×</div>' +
        '<video width="100%" height="650" controls="controls" autoplay="autoplay" poster="">\n' +
    '        <source src="'+vSrc+'" type="video/mp4" />\n' +
    '</video>'

    $('#vide-x').html(str)
    $('#vide-x').show()
    $('#zzcx').show()
    $('#closeIcon').click(function (e) {
        $('#vide-x').hide()
        $('#vide-x').html('')
        $('#zzcx').hide()
    })
})
// $(document).click(function (e) {
//     let mx=e.target
//     if(!$(mx).is("#vide-x *")){
//         $('#vide-x').hide()
//         $('#vide-x video source').attr('src','')
//         $('#zzcx').hide()
//     }
// })
