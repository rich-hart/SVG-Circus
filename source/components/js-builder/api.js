var APILibrary = {

    postActor: function(actor) {
        debugger;
//curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header: VMYzenbF64OX3vdYoupHfoD8lIxaawZxPWSzIG61bDMYhu9YcRuaizXxOM6WyG0A' -d '{  "x": "3","y": "3" }' 'http://127.0.0.1:8999/api/positions/'
        $.ajax({

//          url: 'http://172.17.177.12:8999/positions/',
          url: 'http://127.0.0.1:8999/api/positions/',
          type: 'POST',
          dataType: 'json',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'X-CSRFToken': 'TS2Ld79cl32fHyvGBofZlQl5M70cTHIcN2WLHq4yqC0gVxrGpLkso1FufbzYhRJf'
          },
          contentType: 'application/json',
          data: {
            "x" : "0",
            "y" : "0"
          }
        }).done(function(msg) {
          alert('Data Saved: ' + msg);
        }).fail(function(xmlHttpRequest, statusText, errorThrown) {
          alert(
            'Your form submission failed.\n\n'
              + 'XML Http Request: ' + JSON.stringify(xmlHttpRequest)
              + ',\nStatus Text: ' + statusText
              + ',\nError Thrown: ' + errorThrown);
        });
    }
    
}


