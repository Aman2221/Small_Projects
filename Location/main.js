       const successCallback = (possition) => {
           console.log(possition);
       };

       const errorCallback = (error) => {
           alert('Please allow location to get list of nearby service centers');
       }

       navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
       // $('#get_Location').click(function(){

        //     if(navigator.geolocation)
        //     navigator.geolocation.getCurrentPosition(function(position){
        //         console.log(position);
        //         $.get(  "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude +"&sensor=false", function(data) {
        //             console.log(data);
        //         })

        //         var img = new Image();
        //         img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" +  position.coords.latitude + "," + position.coords.longitude +"&zoom=13&size=800x400&sensor=false";
        //         $('#output').html(img);
        //          });
        //     else
        //         console.log('errorOutputhereirh');
        // });

