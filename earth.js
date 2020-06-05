// var nasaImages = $("#nasa-images");
// var solInput = $("#sol");
// var pageInput = $("#page")

// $("form button").click(function (e) {
//     e.preventDefault();
    
//     let sol = solInput.val();
//     let page = pageInput.val();
//     console.log(sol, page);
    
//     if( sol === "" || page === "") {
//         alert("Please fill the field");
//         return;
//     }

//     var url = "https://api.nasa.gov/planetary/earth/imagery?lon=" + sol+  "&lat="+ page+ "&date=2014-02-01&api_key=EEqBjWydf58x1wZVULc2PDnmXakgov3dawEUaKxc";
    
//     $.get(url, function (data) {
//         // let image = data.image;
        
//         console.log(data);
//         // $("#nasa-images img").remove();

//         // for (let photo of photos) {
//         //     console.log(photo);;
        
//         //     console.log("hell", photo.img_src, photo.id);
//         //     nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
//         // }
//     });

// });
// $(document).ready(function(){
//     $(document).ajaxStart(function(){
//       $("#wait").css("display", "block");
//     });
//     $(document).ajaxComplete(function(){
//       $("#wait").css("display", "none");
//     });
//     $("button").click(function(){
//       $("#txt").load(url);
//     });
//   });


// "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=DEMO_KEY"

// "https://api.nasa.gov/planetary/earth/imagery?lon=" + sol+  "&lat="+ page+ "&date=2019-02-01&api_key=EEqBjWydf58x1wZVULc2PDnmXakgov3dawEUaKxc"

// EEqBjWydf58x1wZVULc2PDnmXakgov3dawEUaKxc






function displayImage(data){
    $('<img>',{
        src:data.hdurl,
        height:'50vh',
        width:'50vw'
    }).appendTo('#nasa-images')
}

$.ajax({
    url:'',
    method:"GET",
    success:displayImage
    // data:{
    //     api_key:`DEMO_KEY`,
        
    //     date:`2018-06-17`
   // }
});