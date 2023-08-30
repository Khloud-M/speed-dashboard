<template>
  <setion class="StatisticeView">
    <v-breadcrumbs :items="items" divider="-"> </v-breadcrumbs>
  </setion>
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
    ],
  }),
};
</script>
<style>
.v-breadcrumbs-item--link:hover {
  text-decoration: none !important;
  color: var(--main-color);
}
a:active,
a:hover {
  outline-width: 0;
  color: var(--main-color) !important;
}
</style>

<style>
.StatisticeView {
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  align-items: center !important;
  border-radius: 15px;
  background-color: white;
  box-shadow: 10px 10px 10px 10px var(--main_bg_clr);
  box-shadow: var(--main_box_shadow);
}
</style>
