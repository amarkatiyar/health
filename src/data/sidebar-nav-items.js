export default function() {
  return [

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
      htmlBefore: '<i class=" p-2 text-danger fas fa-list"></i>',
      to: "/components-overview",
    },

    {
      title: "Calender",
      htmlBefore: '<i class="text-warning far fa-calendar-alt p-2"></i>',
      to: "/Calender",
    },

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
   
  ];
}
