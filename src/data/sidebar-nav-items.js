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
      title: "Home",
      htmlBefore: '<i class="fas fa-home"></i>',
      to: "/blog-posts",
    },


    {
      title: "Patient",
      htmlBefore: '<i class="fas fa-user"></i>',
      to: "/add-new-post",
    },
    {
      title: "Health Record",
      htmlBefore: '<i class="fas fa-list"></i>',
      to: "/components-overview",
    },
    // {
    //   title: "Tables",
    //   // title: "Message",
    //   htmlBefore: '<i class="material-icons">table_chart</i>',
    //   to: "/tables",
    // },
    
    {
      title: "setting",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Billings",
      htmlBefore: '<i class="fas fa-credit-card"></i>',
      to: "/billings",
    },
    {
      title: "Message",
      htmlBefore: '<i class="fas fa-envelope"></i>',
      to: "/message",
    },
  ];
}
