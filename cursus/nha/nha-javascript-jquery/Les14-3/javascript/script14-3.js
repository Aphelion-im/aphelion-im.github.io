"use strict";

$(document).ready(function () {

  $("#dialog").dialog({
    autoOpen: false,
    resizable: false,
    modal: true,
    height: 400,
    width: 600,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "explode",
      duration: 1000
    }
  });

  $("#opener").on("click", function () {
    $("#dialog").dialog("open");
  });

});