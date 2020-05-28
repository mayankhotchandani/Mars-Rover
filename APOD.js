

function displayImage(data){
    $('<img>',{
        src:data.hdurl,
        height:'80vh',
        width:'80vw'
    }).appendTo('#image-container')
}

$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method:"GET",
    success:displayImage,
    data:{
        api_key:`DEMO_KEY`,
        
        date:`2018-06-17`
    }
});