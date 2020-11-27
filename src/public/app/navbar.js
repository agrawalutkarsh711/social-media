let navlinks = $('.navbar-nav .nav-link')

navlinks.click((event)=>{
    let component = `/components/${$(event.target).attr('data-component')}.html`
    $('#content').load(component)
})