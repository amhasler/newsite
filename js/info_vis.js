$(function(){
    var combined = $('#Jobs > *').add('#years > *');


    $(combined).click(function(){
        var id = $(this).attr('id');


        if ($(this).parent().attr("id")=="years") {
            document.getElementById("header_place").innerHTML="Year";
            $.getJSON('js/data.json', function(data) {
                var output = "<ul>";
                for (var i in data.years) {
                    if (data.years[i].year_id==id) {
                        document.getElementById("title_place").style.fontSize="3em";
                        document.getElementById("title_place").innerHTML=data.years[i].year_num;
                        for (var j=0; j < data.years[i].info.length; j++) {
                            output+="<li>" + data.years[i].info[j] + "</li>"
                        };
                        output += "</ul>";
                        document.getElementById("info").innerHTML=output;
                    };
                };
            });       
        }

        else if ($(this).parent().attr("id")=="Jobs") {
            document.getElementById("header_place").innerHTML="Job";
            $.getJSON('js/data.json', function(data) {
                var output = "<ul>";
                for (var i in data.jobs) {
                    if (data.jobs[i].job_id==id) {
                        document.getElementById("title_place").style.fontSize="2.5em";
                        document.getElementById("title_place").innerHTML=data.jobs[i].job_name;
                        for (var j=0; j < data.jobs[i].info.length; j++) {
                            output+="<li>" + data.jobs[i].info[j] + "</li>"
                        };
                        output += "</ul>";
                        document.getElementById("info").innerHTML=output;
                    };
                };
            });
        };

        

    });
});