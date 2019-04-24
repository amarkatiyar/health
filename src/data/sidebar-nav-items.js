export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Blog Posts",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Post",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      // title: "Message",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "setting",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Billing",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/billing",
    },
    {
      title: "Message",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/message",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
   
  ];
}
