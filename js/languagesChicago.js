function mostSpokenNonEnglish(neighborhood) {
    var url = "https://data.cityofchicago.org/resource/a2fk-ec6q.json?community_area_name=" + encodeURIComponent(neighborhood);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var respo = JSON.parse(xmlhttp.responseText);
            handleResponse(respo);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function handleResponse(resp) {
        
        if (resp == "") {
            alert("Neighborhood not recognized");
        }
        else {
            alert(resp[0].predominant_non_english_language_);
        }
    }
}