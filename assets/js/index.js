


$('#add_user').submit(function(event){
    alert("Data Inserted Successfully!")
})

$('#update_user').submit(function(event){
    event.preventDefault()

    var unindexed_array = $(this).serializeArray()

    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    console.log(data)

    var request = {
        'url': `http://localhost:3000/api/users/${data.id}`,
        'method': 'PUT',
        'data': data
    }

    $.ajax(request).done(function(response){
        alert('Data updated successfully!')
    })
})

if(window.location.pathname == '/'){
    $ondelete = $('.table tbody td a.delete')
    $ondelete.click(function(){
        var id = $(this).attr('data-id')

        var request = {
            'url': `http://localhost:3000/api/users/${id}`,
            'method': 'DELETE'
        }

        if(confirm('Do you want to delete this record?')){
            $.ajax(request).done(function(response){
                alert('Data Deleted Successfully!')
                location.reload()
            })
        }
    })
}


// $(document).ready(function() {
//     $(".next").click(function() {
//       $(".pagination")
//         .find(".pageNumber.active")
//         .next()
//         .addClass("active");
//       $(".pagination")
//         .find(".pageNumber.active")
//         .prev()
//         .removeClass("active");
//     });
//     $(".prev").click(function() {
//       $(".pagination")
//         .find(".pageNumber.active")
//         .prev()
//         .addClass("active");
//       $(".pagination")
//         .find(".pageNumber.active")
//         .next()
//         .removeClass("active");
//     });
//   });

$(document).on('click', '.prev', function () {
    const first = $(this).siblings().first();
    if (!first.hasClass('active')) {    
        const active = $(this).siblings('.active');    
        const prevItem = active.prev();    
        const link = prevItem.children('a').prop('href');    
        active.removeClass('active');
        prevItem.addClass('active');    
        window.location.href = link;
    }
});

$(document).on('click', '.next', function () {
    const last = $(this).siblings().last();
    if (!last.hasClass('active')) {
        const active = $(this).siblings('.active');
        const nextItem = active.next();
        const link = nextItem.children('a').prop('href');
        active.removeClass('active');
        nextItem.addClass('active');
        window.location.href = link;
    }
});