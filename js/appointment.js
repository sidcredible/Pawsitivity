jQuery(function ($) {
    $("button[type='submit']").click(
        function (e) {
            e.preventDefault();
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var name = $("input[name='name']").val();
            var email = $("input[name='email']").val();
            var phone = $("input[name='phone']").val();
            var datetime = $("input[name='date']").val();
            var category = $("input[name='category']").val();
            var service_type = $("select[name='service']").children("option:selected").val();
            var comments = $("textarea[name='comment']").val();

            if ((!emailReg.test(email)) || (email == "")) {
                $("input[name='email']").addClass("is-invalid");
                $("input[name='email']").focus();
            } else if ((service_type == "")) {
                $("input[name='service']").addClass("is-invalid");
                $("input[name='service']").focus();
            } else if ((comments == "")) {
                $("input[name='comments']").addClass("is-invalid");
                $("input[name='comments']").focus();
            } else {
                data = {
                    name, email, phone, datetime, category, service_type, comments
                }
                $.ajax({
                    type: "POST",
                    url: "http://ec2-34-236-227-232.compute-1.amazonaws.com:3000/appointment",
                    data: data,
                }).done(function (data) {
                    alert(JSON.stringify(data));
                }).fail(function (jqXHR, textStatus) {
                    alert(jqXHR.responseJSON.message);
                });
            }


        });
});