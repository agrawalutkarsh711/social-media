$(function(){
    $('#navbar').load('/components/navbar.html',loginusername)
    $('#footer').load('/components/footer.html')
    $('#content').load('/components/all-posts.html')
})
function loginusername(){
    window.currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(!currentUser){
        $.post('/api/users',{},function(user){
            if(user){
                window.alert(`Registered as ${user.username}`)
                window.localStorage.user = JSON.stringify(user)
                currentUser = user
                $('#nav-username').text(currentUser.username)
            }
        })
    }
    else{
        $('#nav-username').text(currentUser.username)
    }
}