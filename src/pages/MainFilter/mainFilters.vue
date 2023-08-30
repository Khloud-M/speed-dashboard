<template>
  <div class="mainfilter">
    <v-breadcrumbs :items="items" divider=">>"></v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "الصفحة الرئيسية",
        disabled: false,
        href: "/",
      },
      {
        title: "تصنيفات الرئيسية",
        disabled: false,
        href: "/mainFilters",
      },
      {
        title: " إضافة تصنيف",
        disabled: false,
        href: "mainFilters/add",
      },
    ],
  }),
};
</script>

<style>
/* .v-breadcrumbs-item--link {
  background-color: aqua !important;
} */
.mainfilter {
  /* width: 95%; */
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  align-items: center !important;
  border-radius: 15px;
  background-color: white;
  box-shadow: var(--main_box_shadow);
}
</style>
