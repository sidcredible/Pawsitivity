jQuery(function ($) {
    $(".custom-file-input").on("change", function () {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });

    $("input[type='submit'][value='Submit Pet']").click(
        function (e) {
            e.preventDefault();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var phoneReg = /^[0-9]+$/;
            var email = $("input[name='email']").val();
            var title = $("input[name='title']").val();
            var name = $("input[name='pet_name']").val();
            var description = $("textarea[id='description']").val();
            var age = $("input[name='age']").val();
            var size = $("input[name='pet-size']").val();
            var weight = $("input[name='weight']").val();
            var color = $("input[name='color']").val();
            var is_vaccinated = $("input[name='is_vaccinated']").val();
            var gender = $("input[name='gender']").val();
            var type = $("select[name='type']").children("option:selected").val();;
            var breed = $("select[name='breed']").children("option:selected").val();
            var files = $("input[name='pet-image']")[0].files;
            var phone = $("input[name='phone']").val();
            if ((!emailReg.test(email)) || (email == "")) {
                $("input[name='email']").addClass("is-invalid");
                $("input[name='email']").focus();
            }
            else if ((!phoneReg.test(phone)) || (phone == "")) {
                $("input[name='phone']").addClass("is-invalid");
                $("input[name='phone']").focus();
            }
            else {

                var fd = new FormData();
                if (files.length > 0) {
                    fd.append('image', files[0]);
                }
                fd.append('email', email)
                fd.append('title', title)
                fd.append('name', name)
                fd.append('description', description)
                fd.append('age', age)
                fd.append('size', size)
                fd.append('weight', weight)
                fd.append('color', color)
                fd.append('is_vaccinated', is_vaccinated)
                fd.append('gender', gender)
                fd.append('type', type)
                fd.append('breed', breed)
                fd.append('phone', phone)

                $.ajax({
                    type: "POST",
                    url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/animals",
                    data: fd,
                    contentType: false,
                    processData: false,
                }).done(function (data) {
                    alert(JSON.stringify(data));
                }).fail(function (jqXHR, textStatus) {
                    alert(jqXHR.responseJSON.message);
                });
            }


        });
});