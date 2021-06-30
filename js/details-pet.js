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
                <div class="mb-5 name">
                    <h4>Name: <strong>${element.title}</strong></h4>
                    <ul class="petdetails">
                        <li>Owner: <strong>${element.name}</strong></li>
                        <li>Age: <strong>${element.age}</strong></li>
                        <li>Gender: <strong>${element.gender}</strong></li>
                        <li>Size: <strong>${element.size}</strong></li>
                        <li>Color: <strong>${element.color}</strong></li>
                        <li>Breed: <strong>${element.breed}</strong></li>
                    </ul>
                </div>
            
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p style="color: #777777">
                    ${element.description}
                </p>
                <div class="default-form adopt-form">
                    <div class="form-box">
                        <form id="adoptform">
                            <div class="form-group ">
                                <input type="text" class="form-control" name="name" value="" placeholder="Name"
                                    style="border-color: #cecece !important;" >
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" name="phone" value="" placeholder="phone"
                                    style="border-color: #cecece !important;" >
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" value="" placeholder="email"
                                    style="border-color: #cecece !important;" >
                            </div>
                            <input type="number" name="animal_id" value="${element.id}" style="display:none;" required>
                            <div class="form-group">
                                <button id="adopt-btn" type="submit" class="theme-btn btn-style-two">Adopt</button>
                            </div>
                        </form>
                    </div>
                </div>
            
            </div>
            `)
            }
        });
        $("button[type='submit']").click(
            function (e) {
                e.preventDefault();
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                var name = $("input[name='name']").val();
                var email = $("input[name='email']").val();
                var phone = $("input[name='phone']").val();
                var animal_id = $("input[name='animal_id']").val();
                console.log(typeof parseInt(animal_id))
                if ((!emailReg.test(email)) || (email == "")) {
                    $("input[name='email']").addClass("is-invalid");
                    $("input[name='email']").focus();
                } else {
                    data = {
                        name, email, phone, animal_id: parseInt(animal_id)
                    }
                    $.ajax({
                        type: "POST",
                        url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/submit-query",
                        data: data,
                    }).done(function (data) {
                        alert("Your request for adoption has been submitted, our team will contact you shortly");
                    }).fail(function (jqXHR, textStatus) {
                         alert(JSON.stringify(jqXHR.responseJSON));
                    });
                }


            });
    }).fail(function (jqXHR, textStatus) {
         alert(JSON.stringify(jqXHR.responseJSON));
    });
});