$(function(){
$('.dragItem').on('dragstart',function(e){

e.originalEvent.dataTransfer.setData('ulvi',$(this).attr('id'))
})
$('.dropFields').on('dragover',function(e){
    e.preventDefault();
})
$('.dropFields').on('drop',function(e){
    e.preventDefault();
    var dragElement=$('#'+e.originalEvent.dataTransfer.getData('ulvi'))

    $(this).append(dragElement)
})

})