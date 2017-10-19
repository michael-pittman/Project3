export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      title: true,
      name: 'UI elements',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
      {
          name: 'Charts',
          url: '/charts',
          icon: 'icon-pie-chart'
      },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      // badge: {
      //   variant: 'info',
      //   text: 'NEW'
      // }
    },
    {
      divider: true
    }
  ]
};