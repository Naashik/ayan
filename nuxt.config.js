export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Cappa Luxury Hotel',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel : 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      
      { rel :'preconnect', href: 'https://fonts.googleapis.com/css2?family=Barlow&amp;family=Barlow+Condensed&amp;family=Gilda+Display&amp;display=swap'},
      { rel :'stylesheet', href: '/css/plugins.css' },
      { rel :'stylesheet', href: '/css/style.css' }

   
    ],
    script: [
      {
        src:'/js/jquery-3.6.0.min.js'
      },
      {
        src:'/js/jquery-migrate-3.0.0.min.js'
      },
      {
        src:'/js/modernizr-2.6.2.min.js'
      },
      {
        src:'/js/imagesloaded.pkgd.min.js'
      },
      {
        src:'/js/jquery.isotope.v3.0.2.js'
      },
      {
        src:'/js/pace.js'
      },
      {
        src:'/js/popper.min.js'
      },
      {
        src:'/js/bootstrap.min.js'
      },
      {
        src:'/js/scrollIt.min.js'
      },
      {
        src:'/js/jquery.waypoints.min.js'
      },
      {
        src:'/js/owl.carousel.min.js'
      },
      {
        src:'/js/jquery.stellar.min.js'
      },
      {
        src:'/js/jquery.magnific-popup.js'
      },
      {
        src:'/js/YouTubePopUp.js'
      },
      {
        src:'/js/select2.js'
      },
      {
        src:'/js/datepicker.js'
      },
      {
        src:'/js/smooth-scroll.min.js'
      },
      {
        src:'/js/custom.js'
      },
      {
        src:'https://www.googletagmanager.com/gtag/js?id=UA-144098545-1'
      }

    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'
  ],
  

  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
