$('.form-check-input').on('click', function(){
    if($(this).val() == 'in'){
        $('#reasonContainer').hide()
    }else{
        $('#reasonContainer').show()
    }
})

