

function getBol(url){
    let str='<div style="" title="close" id="closeIcon">' +
        '<div class="my_icon"></div></div>' +
        '<video width="100%" height="650" loop controls="controls" autoplay="autoplay" poster="">\n' +
        '        <source src="'+url+'" type="video/mp4" />\n' +
        '</video>'

    $('#vide-x').html(str)
    $('#vide-x').show()

    $('#closeIcon').click(function (e) {
        $('#vide-x').hide()
        $('#vide-x').html('')
        $('#zzcx').hide()
    })
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.responseType = 'blob'; // or xhr.responseType = "blob";
    // xhr.send();
    // xhr.onload = function(e) {
    //     if (xhr.status == 200) {
    //         let str='<div style="" title="close" id="closeIcon">' +
    //             '<div class="my_icon"></div></div>' +
    //             '<video width="100%" height="650" loop controls="controls" autoplay="autoplay" poster="">\n' +
    //             '        <source src="'+window.URL.createObjectURL(xhr.response)+'" type="video/mp4" />\n' +
    //             '</video>'
    //
    //         $('#vide-x').html(str)
    //         $('#vide-x').show()
    //
    //         $('#closeIcon').click(function (e) {
    //             $('#vide-x').hide()
    //             $('#vide-x').html('')
    //             $('#zzcx').hide()
    //         })
    //     }
    // };
}

$('#zzcx').on('click',function () {
    $('#vide-x').hide()
    $('#vide-x').html('')
    $('#zzcx').hide()
})

$("[data-src]").on('click',function () {
    $('#zzcx').show()
    let vSrc=$(this).attr('data-src')
    let src=''
    switch (vSrc) {
        case 'bo1':
            getBol('/mp4/1.mp4')
            break
        case 'bo2':
            getBol('/mp4/2.mp4')
            break
        case 'bo3':
            getBol('/mp4/3.mp4')
            break
    }

})
// $(document).click(function (e) {
//     let mx=e.target
//     if(!$(mx).is("#vide-x *")){
//         $('#vide-x').hide()
//         $('#vide-x video source').attr('src','')
//         $('#zzcx').hide()
//     }
// })
