jQuery(function ($) {
    $("button[type='submit']").click(
        function (e) {
            e.preventDefault();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var phoneReg = /^[0-9]+$/;
            var email = $("input[name='email']").val();
            var subject = $("input[name='subject']").val();
            var message = $("textarea[name='message']").val();
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
                var data = { email, phone, subject, message }
                $.ajax({
                    type: "POST",
                    url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/contact-us",
                    data: data
                }).done(function (data) {
                    alert("Your query have been Submitted");
                }).fail(function (jqXHR, textStatus) {
                     alert(JSON.stringify(jqXHR.responseJSON));
                });
            }


        });
});