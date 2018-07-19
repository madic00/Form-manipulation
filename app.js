 //handling select box
    $('select[name="choose"]').change(function() {
      $('#genderSpan').html($(this).val());
    });

    //handling radio buttons
    $("input[type='radio']").change(function() {
      if($(this).prop('checked')) {
        $("#speciesSpan").html($(this).val());
      }
    });

    //handling checkboxes
    var allChecked = [];

    $('input:checkbox').change(function() {
      var value = $(this).val();
      if ($(this).prop('checked')) {
        allChecked.push(value);
      } else { //unchecking element
        var index = allChecked.indexOf(value);
        if (index != -1) {
          allChecked.splice(index, 1);
        } 
      }

      $('#featureSpan').html('');
      for (let i = 0; i < allChecked.length; i++) {
        $("#featureSpan").append(allChecked[i]);
        if (i < allChecked.length - 1) {
          $('#featureSpan').append(', ');
        } else {
          $('featureSpan').append(' ');
        }
      }
    });