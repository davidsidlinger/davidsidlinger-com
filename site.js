$(document).ready(function(){
    var returnedData = tumblr_api_read;
    $.each(returnedData.posts, function(i, item){
      var activityId = "activity-" + item.id;
      var activitySelector = "#" + activityId;
      $("<p/>").attr("id", activityId).appendTo("#activity");
      switch(item.type) {
        case "link":
          $(activitySelector).text("link → ").addClass("activity-link");
          $("<a/>").attr("href", item["link-url"]).text(item["link-text"]).appendTo(activitySelector);
          if(item["link-description"] !== "") {
            $("<p class=\"commentary\">" + item["link-description"] + "</p>").appendTo(activitySelector);
          }
      }
    });
});