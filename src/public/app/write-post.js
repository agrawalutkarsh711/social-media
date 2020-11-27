function writenewPost(){
    $.post('/api/posts',{
        userId : JSON.parse(localStorage.user).id,
        title : $('#title').val(),
        body : $('#body').val()
    },()=>{
        window.alert('Post Added')
    })
}

$('#btnAdd').click(writenewPost)