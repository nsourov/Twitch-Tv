$("#channels").addClass("hide");
$("#all").click(function() {
  $("#channels").removeClass("hide");
  $("#channels").addClass("animated zoomIn");
  $("#1").html("");
  $("#2").html("");
  $("#3").html("");
  $("#4").html("");
});

$("#online").click(function() {
  $("#channels").removeClass("hide");
  $("#channels").addClass("animated zoomIn");
  var url1 =
    "http://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?";
  $.getJSON(url1, function(d1) {
    if (d1.stream != null) {
      $("#1").html("Online").css({ color: "#2ecc71" });
    } else {
      $("#1").html("");
    }
  });

  var url2 = "http://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?";

  $.getJSON(url2, function(d2) {
    if (d2.stream != null) {
      $("#2").html("Online").css({ color: "#2ecc71" });
    } else {
      $("#2").html("");
    }
  });

  var url3 =
    "http://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas?callback=?";
  $.getJSON(url3, function(d3) {
    if (d3.stream != null) {
      $("#3").html("Online").css({ color: "#2ecc71" });
    } else {
      $("#3").html("");
    }
  });

  var url4 =
    "http://wind-bow.glitch.me/twitch-api/streams/OgamingSC2?callback=?";
  $.getJSON(url4, function(d4) {
    if (d4.stream != null) {
      $("#4").html("Online").css({ color: "#2ecc71" });
    } else {
      $("#4").html("");
    }
  });
});

$("#offline").click(function() {
  $("#channels").removeClass("hide");
  $("#channels").addClass("animated zoomIn");
  var url1 =
    "http://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?";
  $.getJSON(url1, function(d1) {
    if (d1.stream === null) {
      $("#1").html("Offline").css({ color: "#c0392b" });
    } else {
      $("#1").html("");
    }
  });

  var url2 = "http://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?";

  $.getJSON(url2, function(d2) {
    if (d2.stream === null) {
      $("#2").html("Offline").css({ color: "#c0392b" });
    } else {
      $("#2").html("");
    }
  });

  var url3 =
    "http://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas?callback=?";
  $.getJSON(url3, function(d3) {
    if (d3.stream === null) {
      $("#3").html("Offline").css({ color: "#c0392b" });
    } else {
      $("#3").html("");
    }
  });

  var url4 =
    "http://wind-bow.glitch.me/twitch-api/streams/OgamingSC2?callback=?";
  $.getJSON(url4, function(d4) {
    if (d4.stream === null) {
      $("#4").replace("Offline").css({ color: "#c0392b" });
    } else {
      $("#4").html("");
    }
  });
});
