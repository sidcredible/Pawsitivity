jQuery(function ($) {
    var id = GetParameterValues('id');
    function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
                return urlparam[1];
            }
        }
    }
    $.ajax({
        type: "GET",
        url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/animals",
    }).done(function (data) {
        data.data.forEach(element => {
            if (element.id == id) {
                $("#image").attr("src", element.image_url);
                $("#pets-box").after(`<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                <div class="name">
                    <h4>Name: <strong>${element.name}</strong></h4>
                    <ul class="petdetails">
                        <li>Age: <strong>${element.age}</strong></li>
                        <li>Gender: <strong>${element.gender}</strong></li>
                        <li>Size: <strong>${element.size}</strong></li>
                        <li>Weight: <strong>${element.weight}</strong></li>
                        <li>Color: <strong>${element.color}</strong></li>
                        <li>Breed: <strong>${element.breed}</strong></li>
                    </ul>
                </div>
            </div>`)
            }
        });

    }).fail(function (jqXHR, textStatus) {
        alert(textStatus);
    });

});