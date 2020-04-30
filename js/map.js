ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [53.902512, 27.561481],
        zoom: 7
    }, {
        searchControlProvider: 'yandex#search'
    }),

    myPlacemark1 = new ymaps.Placemark([53.902512, 27.561481], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
        iconImageOffset: [27, -28]
    });

    myPlacemark2 = new ymaps.Placemark([55.183672, 30.204791], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });        

    myPlacemark3 = new ymaps.Placemark([54.510741, 30.429586], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark4 = new ymaps.Placemark([53.894548, 30.330654], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark5 = new ymaps.Placemark([52.424160, 31.014272], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark6 = new ymaps.Placemark([52.371551, 30.386557], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark7 = new ymaps.Placemark([52.892256, 30.037813], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark8 = new ymaps.Placemark([52.633051, 29.748483], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark9 = new ymaps.Placemark([53.145592, 29.225538], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });


    myPlacemark10 = new ymaps.Placemark([54.224069, 28.511755], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark11 = new ymaps.Placemark([54.094370, 28.321572], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark12 = new ymaps.Placemark([52.792919, 27.543739], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark13 = new ymaps.Placemark([53.027639, 27.552102], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark14 = new ymaps.Placemark([54.307332, 26.838930], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark15 = new ymaps.Placemark([53.132341, 26.017609], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark16 = new ymaps.Placemark([53.891662, 25.302245], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark17 = new ymaps.Placemark([53.162947, 24.463991], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark18 = new ymaps.Placemark([53.677834, 23.829529], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3)
    .add(myPlacemark4)
    .add(myPlacemark5)
    .add(myPlacemark6)
    .add(myPlacemark7)
    .add(myPlacemark8)
    .add(myPlacemark9)
    .add(myPlacemark10)
    .add(myPlacemark11)
    .add(myPlacemark12)
    .add(myPlacemark13)
    .add(myPlacemark14)
    .add(myPlacemark16)
    .add(myPlacemark17)
    .add(myPlacemark18);
});