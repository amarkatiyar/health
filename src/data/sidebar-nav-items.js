export default function() {
  return [
    // {
    //   title: "Blog Dashboard",
    //   to: "/blog-overview",
    //   htmlBefore: '<i class="material-icons">edit</i>',
    //   htmlAfter: ""
    // },
    // {
    //   title: "Home",
    //   htmlBefore: '<i class="fas fa-home"></i>',
    //   to: "/blog-posts",
    // },

    {
     title:"Home",
      htmlBefore: '<i class="p-2  text-danger fas fa-home"></i>',
      to: "/blog-posts",
    },


    {
      title: "Patient",
      htmlBefore: '<i class=" p-2 text-primary fas fa-user"></i>',
      to: "/add-new-post",
    },
    {
      title: "Health Record",
      htmlBefore: '<i class=" p-2 text-warning fas fa-list"></i>',
      to: "/components-overview",
    },
    // {
    //   title: "Tables",
    //   // title: "Message",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    
    {
      title: "Billing",
      htmlBefore: '<i class="p-2 text-info fa fa-credit-card"></i>',
      to: "/billing",
    },
    {
      title: "Message",
      htmlBefore: '<i class=" p-2 text-success fas fa-envelope"></i>',
      to: "/message",
    },
    {
      title: "Setting",
      htmlBefore: '<i class="p-2 text-dark fas fa-cog"></i>',
      to: "/user-profile-lite",
    },
    // {
    //   title: "Errors",
    //   htmlBefore: '<i class="material-icons">error</i>',
    //   to: "/errors",
    // }
   
  ];
}
