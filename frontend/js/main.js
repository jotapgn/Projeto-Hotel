$(document).ready(function () {
    $("#dataInicio").datepicker({
        dateFormat: "yy-mm-dd",
        minDate: new Date(),
        onClose: function( selectedDate ) {
            $("#dataFinal").datepicker( "option", "minDate", selectedDate );
          }
    });
})
$(document).ready(function () {
    $("#dataFinal").datepicker({
        dateFormat: "yy-mm-dd",
    })
    });
