// var red = data.colors.red;
//
//
// $( ".submit" ).click(function() {
//
//   //var value = $("form input[type='checkbox']:checked").val();
//
//   if ($(".fresh").is(':checked')) {
//     console.log("fresh is checked");
//
//     red++;
//     console.log(red);
//
//   };
//
//
//   if ($(".friendly").is(':checked')) {
//     console.log("friendly is checked");
//
//     red++;
//
//     console.log(red);
//
//   };
//
// });

$.each(colors, function(key, value) {
    console.log(key + ' ' + value.description);
});
