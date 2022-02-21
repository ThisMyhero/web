const listImg=$('img')
const obj={
    toolbar:false,
    title:false,
    navbar:false
}
$.each(listImg,function (i,it) {
    let img=new Viewer(it,obj)
})