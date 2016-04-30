$( ".submit" ).click(function() {

  //GO THROUGH EACH ANSWER AND +1 THE CORRECT VALUE
  if ($(".fresh").is(':checked')) {
    colors[2].count++;
    // wireframes[0].count++;
    wireframes[4].count++;
  };

  if ($(".friendly").is(':checked')) {
    colors[2].count++;
  };













  //  MAX VALUES FROM EACH SECTION
  var maxColor = _.max(colors, function(x){ return x.count; });
  var maxWireframe = _.max(wireframes, function(x){ return x.count; });

  console.log(maxColor);
  console.log(maxWireframe);


  // PUSH THE WINNERS TO THE RESULTS ARRAY

});
