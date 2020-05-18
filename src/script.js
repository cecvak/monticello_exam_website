

// click submit button to check form input, submit and hide form, show new text
$(document).ready(function() {
  // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  // $('.form-span').hide();
    $('.form-span').css('visibility', 'hidden');
    console.log('hide span');
  
  
  // let text1 = `<p>*Please fill in your name.<p>`
  

  $('.button__submit').click(function() {
    // document.getElementsByClassName('form-span').style.color = 'red';
    $('.form-span').css('color', 'red');
    let name = $('#name').val();
    let email = $('#email').val();
    if ( name === '') {
      // $('#name').next().show();
      $('.span-name').css('visibility', 'visible');
      console.log('checking name');
      return false;
      // $('span').text("Please fill in your name.").show();
      // $('span').append(text1);
      // return;
    }

    if (email === '') {
      // $('span').text("Please enter an email address.").show();
      // $('#email').next().show();
      $('#enterEmail').css('visibility', 'visible');
      console.log('checking for email');
      return false;
    }

   if (isEmail(email) == false) {
      // $('#invalid').show();
      $('#invalid').css('visibility', 'visible');
      console.log('checking valid email');
      return false;
      // $('span').text("Email address is not in a valid format.").show();
      // return;
    }
  
  // else if  
  //   ( email.includes('@')== false) {
  //   $('span').text("Email address is not in a valid format.").show();
  // }

  // else {
    // $.post("",$('.form').serialize(), function(response) {
      $('form').hide();
      $('.form--thanks:hidden').show();
    // });
   
  // let thanks = `<p>Thank you! We will be in touch.</p>`;
  // $('.form--container').append(thanks);
   
  // }
  
});
return false;
});

// check if email is valid
function isEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}


// smooth scroll on links in menu and arrow
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// slider in header
$(document).ready(function(){
    $('.header-slider').slick({
      dots: true,
      arrows: false,
      // autoplay: true,
      
    });
});
      
// slider in news section
$(document).ready(function(){
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });
});

// map
let monticello = {lat: 40.678177, lng: -73.944160}
let icon = {
  url: '/images/pin.png',
  scaledSize : new google.maps.Size(70,70),
}

let map;
  map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: 40.678177, lng: -73.944160},
    center: monticello,
    zoom: 13,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
    
  });

  let marker = new google.maps.Marker({
    position: monticello,
    map: map,
    title: 'Monticello Office Location',
    icon: icon,
  })