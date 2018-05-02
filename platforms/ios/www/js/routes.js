routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/historia/',
    url: './pages/historia.html',
  },
  {
    path: '/bodegas/',
    url: './pages/bodegas.html',
  },
  {
    path: '/dormir/',
    url: './pages/dormir.html',
  },
  {
    path: '/chefs/',
    url: './pages/chefs.html',
  },
  {
    path: '/vinos/',
    url: './pages/vinos.html',
  },
  {
    path: '/gastro/',
    url: './pages/gastro.html',
  },
  {
    path: '/programa/',
    url: './pages/programa.html',
  },
  {
    path: '/faq/',
    url: './pages/faq.html',
  },
  {
    path: '/llegar/',
    componentUrl: './pages/llegar.html',
  },
  {
    path: '/tren/',
    componentUrl: './pages/tren.html',
  },
  {
    path: '/autobus/',
    componentUrl: './pages/autobus.html',
  },
  {
    path: '/coche/',
    componentUrl: './pages/coche.html',
  },
  {
    path: '/avion/',
    componentUrl: './pages/avion.html',
  },
  {
    path: '/settings/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // Simulate Ajax Request
      app.request.get('http://cata.emesa.com/index.php?option=com_cata&task=bodegas.ajaxObtenerBodegas', function (data) {

         // Hide Preloader
        app.preloader.hide();

        console.log(JSON.parse(data));
        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/ocupacion.html',
          },
          {
            context: {
              bodegas: JSON.parse(data),
            }
          }
        );
      });
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
