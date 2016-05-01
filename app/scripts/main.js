$( ".submit" ).click(function() {

  //QUESTION 1
  if ($(".fresh").is(':checked')) {
    colors[2].count++;
    colors[3].count++;

    wireframes[0].count++;
    wireframes[4].count++;

    fonts[0].count++;
    fonts[1].count++;

    copy[2].count++;
  };
  if ($(".friendly").is(':checked')) {
    colors[1].count++;

    wireframes[2].count++;

    fonts[1].count++;
    fonts[2].count++;
    fonts[5].count++;

    copy[2].count++;
    copy[3].count++;

    logo[3].count++;
    logo[1].count++;
  };
  if ($(".localAndCommunity").is(':checked')) {
    colors[1].count++;
    colors[2].count++;
    colors[3].count++;

    wireframes[0].count++;
    wireframes[1].count++;
    wireframes[4].count++;

    fonts[1].count++;
    fonts[2].count++;
    fonts[5].count++;

    copy[2].count++;
  };
  if ($(".funAndQuirky").is(':checked')) {
    colors[2].count++;
    colors[3].count++;

    wireframes[2].count++;
    wireframes[0].count++;
    wireframes[4].count++;

    fonts[1].count++;
    fonts[5].count++;

    copy[2].count++;
    copy[3].count++;

    logo[1].count++;
    logo[2].count++;
  };
  if ($(".classic").is(':checked')) {
    colors[1].count++;

    fonts[0].count++;
    fonts[1].count++;
    fonts[2].count++;
    fonts[4].count++;

    copy[0].count++;
    copy[1].count++;

    logo[0].count++;
    logo[1].count++;
    logo[2].count++;
    logo[3].count++;
  };
  if ($(".approachable").is(':checked')) {
    colors[1].count++;
    colors[2].count++;
    colors[3].count++;

    wireframes[0].count++;
    wireframes[4].count++;

    fonts[1].count++;
    fonts[2].count++;
    fonts[5].count++;

    copy[0].count++;
    copy[1].count++;
    copy[2].count++;
  };
  if ($(".sleek").is(':checked')) {
    colors[0].count++;
    colors[2].count++;

    wireframes[0].count++;
    wireframes[4].count++;

    fonts[0].count++;
    fonts[1].count++;
    fonts[2].count++;
    fonts[3].count++;
    fonts[4].count++;

    copy[1].count++;
    copy[4].count++;


    logo[0].count++;
    logo[1].count++;
  };
  if ($(".powerful").is(':checked')) {
    colors[0].count++;
    colors[1].count++;

    fonts[0].count++;
    fonts[4].count++;

    copy[0].count++;
    copy[1].count++;
    copy[3].count++;
    copy[4].count++;

    logo[0].count++;
    logo[1].count++;
    logo[2].count++;
  };
  if ($(".polishedAndLuxurious").is(':checked')) {
    colors[0].count++;

    wireframes[0].count++;
    wireframes[4].count++;

    fonts[0].count++;
    fonts[4].count++;

    copy[0].count++;
    copy[1].count++;

    logo[1].count++;
    logo[2].count++;
  };
  if ($(".honestAndHardworking").is(':checked')) {
    colors[1].count++;
    colors[3].count++;

    wireframes[1].count++;
    wireframes[2].count++;

    fonts[1].count++;
    fonts[2].count++;
    fonts[5].count++;

    copy[1].count++;
    copy[2].count++;

    logo[0].count++;
    logo[3].count++;
  };
  if ($(".strength").is(':checked')) {
    colors[0].count++;
    colors[1].count++;
    colors[2].count++;

    wireframes[0].count++;
    wireframes[1].count++;

    fonts[0].count++;
    fonts[5].count++;

    copy[3].count++;
    copy[4].count++;

    logo[0].count++;
    logo[1].count++;
    logo[2].count++;
  };
  if ($(".functionalAndNoNonsense").is(':checked')) {
    fonts[2].count++;

    copy[1].count++;

  };
  if ($(".esoteric").is(':checked')) {
    colors[0].count++;
    colors[2].count++;

    fonts[3].count++;

    logo[1].count++;
    logo[2].count++;
  };
  if ($(".attitude").is(':checked')) {
    colors[0].count++;
    colors[].count++;
    colors[].count++;

    fonts[0].count++;
    fonts[1].count++;

    copy[3].count++;
    copy[4].count++;

    logo[1].count++;
    logo[2].count++;
  };
  if ($(".swagger").is(':checked')) {

    colors[0].count++;
    colors[2].count++;

    fonts[0].count++;
    fonts[3].count++;

    copy[2].count++;
    copy[3].count++;

  };





  //  MAX VALUES FROM EACH SECTION
  var maxColor = _.max(colors, function(x){ return x.count; });
  var maxWireframe = _.max(wireframes, function(x){ return x.count; });
  var maxFont = _.max(fonts, function(x){ return x.count; });
  var maxCopy = _.max(copy, function(x){ return x.count; });
  var maxLogo = _.max(logo, function(x){ return x.count; });

  console.log(maxColor);
  console.log(maxWireframe);
  console.log(maxFont);
  console.log(maxCopy);
  console.log(maxLogo);


  // PUSH THE WINNERS TO THE RESULTS ARRAY


});
