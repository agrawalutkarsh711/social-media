loadposts();

function loadposts(){
    $.get('/api/posts',(posts)=>{
        for(let post of posts){
            $('#posts-container').append(
                $(`
                    <div class="col-4">
                        <div class="card" style="width: 18rem ,height:10rem;">
                            <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${post.user.username}</h6>
                            <p class="card-text">${post.body.substr(0,200)}...
                            <a href="#">read More</a>
                            </p>
                            <a href="#" class="card-link comment" id="${post.id}">Comment</a>
                            <a href="#" class="card-link">Like</a>
                            </div>
                        </div>
                    </div>
                `)
            )
        }
        $('.card .comment').click((event)=>{
            window.postid = $(event.target).attr('id')
            $('#content').load('/components/comments.html')
        })
    })
}
