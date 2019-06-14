let handleLogin = function(options){
    if(options){
        if(options.login){
            $('#loginForm').on('submit', function(e){
                e.preventDefault();

                let data = $(this).getFormData();
                console.log(data);
            });
        }
    }
};