$(document).ready(function() {
  console.log('ready');
  var url =
    "http://wind-bow.glitch.me/twitch-api/streams/freecodecamp?callback=?";
  $.getJSON(url, function(d) {
   // console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-1").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/freecodecamp?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-1").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-1").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/freecodecamp?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-1")
          .html('<a target="_blank" href="' + u.url + '">Watch Live!</a>')
          .css({ color: "#16a085" });
      });
    }
  });

  var url = "http://wind-bow.glitch.me/twitch-api/streams/ESL_SC2?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-2").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/ESL_SC2?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-2").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-2").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/ESL_SC2?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-2").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url =
    "http://wind-bow.glitch.me/twitch-api/streams/OgamingSC2?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-3").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/OgamingSC2?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-3").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-3").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/OgamingSC2?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-3").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url = "http://wind-bow.glitch.me/twitch-api/streams/cretetion?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-4").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/cretetion?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-4").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-4").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/cretetion?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-4").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url = "http://wind-bow.glitch.me/twitch-api/streams/storbeck?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-5").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/storbeck?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-5").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-5").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/storbeck?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-5").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url = "http://wind-bow.glitch.me/twitch-api/streams/habathcx?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-6").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/habathcx?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-6").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-6").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/habathcx?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-6").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url =
    "http://wind-bow.glitch.me/twitch-api/streams/RobotCaleb?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-7").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/RobotCaleb?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-7").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-7").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/RobotCaleb?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-7").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });

  var url =
    "http://wind-bow.glitch.me/twitch-api/streams/noobs2ninjas?callback=?";
  $.getJSON(url, function(d) {
    //console.log(d);
    if (d.stream === null) {
      // console.log('offline');
      $("#status-8").html("Offline").css({ color: "red" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/noobs2ninjas?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-8").html(
          '<a target="_blank" href="' + u.url + '/videos/all">Watch Videos</a>'
        );
      });
    } else {
      //console.log('online')
      $("#status-8").html("Online!").css({ color: "#16a085" });
      var linkUrl =
        "http://wind-bow.glitch.me/twitch-api/channels/noobs2ninjas?callback=?";
      $.getJSON(linkUrl, function(u) {
        // alert(u.url);
        $("#watch-8").html(
          '<a target="_blank" href="' + u.url + '">Watch Live!</a>'
        );
      });
    }
  });
});
