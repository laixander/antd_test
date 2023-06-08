<template>
    <a-breadcrumb>
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
        <a-breadcrumb-item>An Application</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- <div style="text-transform: capitalize;">
        {{ currentPage() }}
    </div> -->
</template>

<script>
export default {
  data() {
    return {};
  },
//   methods: {
//     currentPage() {
//       const currentURL = window.location,
//             pathname = currentURL.pathname.split('/').slice(1).toLocaleString();
//       return pathname;
//     }
//   },
};
</script>