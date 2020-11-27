$(function(){
    loadComments();
    $('#btnCreate').click(function(){
        createComment() 
    })
})

function loadComments(){
    $.get('api/posts/comments',{
        postId : window.postid
    },(comments)=>{
        for(comment of comments){
            $('#comments-container').append(`
                <li>
                    ${comment.title}-
                    <p>${comment.body}</p>
                    <p class="text-secondary"> by-${comment.user.username}</p>
                </li>
            `)
        }
    })
}
function createComment(){
    $.post('api/posts/comments',{
        userId:window.JSON.parse(localStorage.user).id,
        postId:window.postid,
        title:$('#title').val(),
        body:$('#body').val()
    },function(){
        $('#title').val('')
        $('#body').val('')
        window.alert('Your comment has been recorded \n Thank You' + JSON.parse(localStorage.user).username)
        $('#comments-container').empty()
        loadComments();
    })
}
