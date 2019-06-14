(function($){
    // U ovom prostoru kreirate sve custom jQuery funkcije.

    $.fn.getFormData = function(){
        let data = {};
        let dataArray = $(this).serializeArray();

        for(let i=0; i < dataArray.length; i++){
            data[dataArray[i].name] = dataArray[i].value;
        }

        return data;
    }

}) (jQuery);