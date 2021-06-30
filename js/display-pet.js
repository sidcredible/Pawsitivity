jQuery(function ($) {

    $.ajax({
        type: "GET",
        url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/animals",
    }).done(function (data) {
        data.data.forEach(element => {
            $("#pets-box").after(`<div class="pet-block col-md-4 col-sm-6 col-xs-12">
            <div class="inner-box">
                <div class="image">
                    <img src="${element.image_url}" alt="" />
                    <!--Overlay Box-->
                    <div class="overlay-box">
                        <div class="overlay-inner">
                            <div class="content">
                                <ul>
                                    <li><a href="pet-detail.html?id=${element.id}">view profile</a></li>
    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lower-content">
                    <h3><a href="pet-detail.html">${element.title}</a></h3>
                    <ul>
                        <li>${element.gender} ${element.age}</li>
                        <li>${element.breed}</li>
                    </ul>
                    <a href="pet-detail.html?id=${element.id}" class="theme-btn btn-style-eight">adopt me</a>
                </div>
            </div>
        </div>`)
        });


    }).fail(function (jqXHR, textStatus) {
        alert(jqXHR.responseJSON);
    });

});