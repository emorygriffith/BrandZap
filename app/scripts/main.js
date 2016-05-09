
//-------Backbone Start History------//
Backbone.history.start();
//-------Logic------//

$(".submit").click(function() {

  console.log('clicked');


  //QUESTION 1
  if ($(".kids").is(':checked')) {
    colors[2].count++;

    wireframes[0].count++;
    wireframes[2].count++;

    fonts[1].count++;
    fonts[5].count++;

    copy[2].count++;
    copy[3].count++;

    logo[0].count++;
  };
  if ($(".teens").is(':checked')) {
    colors[0].count++;
    colors[2].count++;

    wireframes[0].count++;
    wireframes[2].count++;

    fonts[1].count++;
    fonts[3].count++;

    copy[2].count++;
    copy[3].count++;
    copy[4].count++;

    logo[0].count++;
    logo[2].count++;
  };
  if ($(".millenials").is(':checked')) {
    colors[0].count++;
    colors[2].count++;

    wireframes[0].count++;
    wireframes[1].count++;
    wireframes[2].count++;

    fonts[0].count++;
    fonts[1].count++;
    fonts[3].count++;
    fonts[5].count++;

    copy[2].count++;
    copy[3].count++;

    logo[0].count++;
    logo[1].count++;
    logo[2].count++;
    logo[3].count++;
  };
  if ($(".parents").is(':checked')) {
    colors[0].count++;
    colors[1].count++;

    wireframes[1].count++;
    wireframes[2].count++;
    wireframes[3].count++;
    wireframes[4].count++;

    fonts[0].count++;
    fonts[1].count++;
    fonts[2].count++;
    fonts[4].count++;

    copy[0].count++;
    copy[1].count++;
    copy[2].count++;

    logo[0].count++;
    logo[2].count++;
  };
  if ($(".grandparents").is(':checked')) {
    colors[3].count++;

    wireframes[4].count++;

    fonts[0].count++;
    fonts[1].count++;
    fonts[4].count++;

    copy[0].count++;
    copy[1].count++;

    logo[0].count++;
    logo[2].count++;
    logo[3].count++;
  };

//QUESTION 2
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

//QUESTION 3
if ($(".cleanAndSimple").is(':checked')) {
  colors[0].count++;
  colors[1].count++;

  wireframes[0].count++;

  fonts[1].count++;
  fonts[4].count++;

  copy[2].count++;

  logo[1].count++;
};

if ($(".wellOrgWithLotsOfInfo").is(':checked')) {
  colors[0].count++;
  colors[1].count++;

  wireframes[0].count++;
  wireframes[3].count++;

  fonts[1].count++;
  fonts[2].count++;

  logo[0].count++;
  logo[1].count++;
};

if ($(".sophisticated").is(':checked')) {
  colors[0].count++;
  colors[2].count++;

  wireframes[4].count++;

  fonts[0].count++;
  fonts[4].count++;

  copy[0].count++;

  logo[1].count++;
};

if ($(".powerful").is(':checked')) {
  colors[0].count++;

  fonts[4].count++;

  copy[3].count++;
  copy[4].count++;

  logo[1].count++;
};

if ($(".boldAndElectric").is(':checked')) {
  colors[0].count++;
  colors[2].count++;

  wireframes[0].count++;

  fonts[4].count++;

  copy[3].count++;
  copy[4].count++;

  logo[2].count++;
};



//QUESTION 4
if ($(".luxury").is(':checked')) {
  colors[0].count++;
  colors[2].count++;

  wireframes[4].count++;

  fonts[0].count++;
  fonts[4].count++;

  copy[0].count++;

  logo[1].count++;
  logo[3].count++;
};

if ($(".peerToPeer").is(':checked')) {

  fonts[1].count++;

  copy[2].count++;

  logo[2].count++;
};

if ($(".neighborhood").is(':checked')) {
  colors[3].count++;

  wireframes[4].count++;

  fonts[5].count++;
  fonts[0].count++;

  copy[2].count++;

  logo[0].count++;
  logo[2].count++;
  logo[3].count++;

};

if ($(".informationalBlogSite").is(':checked')) {
  colors[0].count++;

  fonts[1].count++;
  fonts[2].count++;

  copy[1].count++;
  copy[2].count++;

  logo[0].count++;
};

if ($(".creativeService").is(':checked')) {
  colors[0].count++;

  wireframes[0].count++;

  fonts[0].count++;
  fonts[3].count++;
  fonts[4].count++;

  copy[1].count++;
  copy[2].count++;

  logo[0].count++;
  logo[2].count++;
};



//QUESTION 5
if ($(".application").is(':checked')) {
  colors[2].count++;

  wireframes[0].count++;

  fonts[1].count++;
  fonts[2].count++;

  copy[1].count++;
  copy[2].count++;

  logo[1].count++;
  logo[2].count++;

};

if ($(".restaurant").is(':checked')) {
  colors[1].count++;
  colors[3].count++;

  wireframes[4].count++;

  fonts[0].count++;
  fonts[4].count++;
  fonts[5].count++;

  copy[1].count++;
  copy[2].count++;

  logo[0].count++;
  logo[3].count++;
};
if ($(".website").is(':checked')) {
  colors[0].count++;
  colors[1].count++;

  wireframes[1].count++;
  wireframes[3].count++;

  fonts[1].count++;
  fonts[2].count++;

  copy[1].count++;
  copy[2].count++;

  logo[0].count++;
  logo[2].count++;
};
if ($(".eCommerce").is(':checked')) {
  colors[1].count++;

  wireframes[3].count++;

  fonts[1].count++;
  fonts[2].count++;

  copy[1].count++;

  logo[0].count++;
  logo[1].count++;
  logo[2].count++;

};
if ($(".brickAndMortar").is(':checked')) {
  colors[2].count++;
  colors[3].count++;

  wireframes[1].count++;

  fonts[2].count++;
  fonts[5].count++;

  copy[2].count++;
  copy[1].count++;

  logo[0].count++;
};
if ($(".professionalServices").is(':checked')) {
  colors[1].count++;

  wireframes[1].count++;
  wireframes[3].count++;

  fonts[2].count++;

  copy[1].count++;

  logo[2].count++;
  logo[0].count++;
};





  //  MAX VALUES FROM EACH SECTION
  var maxColor = _.max(colors, function(x){ return x.count; });
  var maxWireframe = _.max(wireframes, function(x){ return x.count; });
  var maxFont = _.max(fonts, function(x){ return x.count; });
  var maxCopy = _.max(copy, function(x){ return x.count; });
  var maxLogo = _.max(logo, function(x){ return x.count; });

  console.log("Color: " + maxColor.name + " " + maxColor.count);
  console.log("Wireframe: " + maxWireframe.name + " " + maxWireframe.count);
  console.log("Font: " + maxFont.name + " " + maxFont.count);
  console.log("Copy: " + maxCopy.name + " " + maxCopy.count);
  console.log("Logo: " + maxLogo.name + " " + maxLogo.count);


  // PUSH THE WINNERS TO THE RESULTS ARRAY


});
