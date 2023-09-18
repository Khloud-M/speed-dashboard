<template>
  <div class="mainfilter">
    <v-breadcrumbs :items="items" divider=">>"></v-breadcrumbs>
  </div>
  <div class="filter_add">
    <h2>
      <router-link to="/cities/add">
        <v-icon size="25"> mdi-plus</v-icon>

        إضافة جديد
      </router-link>
    </h2>
    <v-data-table
      v-model:page="page"
      :headers="headers"
      :items="desserts"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:bottom>
        <div class="text-center pt-2">
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </template>
    </v-data-table>
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
    page: 1,
    itemsPerPage: 5,
    headers: [
      {
        align: "start",
        key: "name",
        sortable: false,
        title: "اسم الدولة (عربي)",
      },
      {
        title: "اسم الدولة (انجليزي)",
        key: "protein",
      },
      {
        title: "اسم المدينة (عربي)",
        key: "calories",
      },
      {
        title: "اسم المدينة (انجليزي)",
        key: "fat",
      },
      { title: "التحكم", key: "carbs" },
    ],
    desserts: [
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: 16,
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: 0,
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: 2,
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: 45,
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: 6,
      },
    ],
  }),
  computed: {
    pageCount() {
      return Math.ceil(this.desserts.length / this.itemsPerPage);
    },
  },
};
</script>

<style scoped>
.mainfilter {
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  align-items: center !important;
  border-radius: 15px;
  background-color: white;
  box-shadow: var(--main_box_shadow);
}
.filter_add {
  background-color: white;
  box-shadow: var(--main_box_shadow);
  border-radius: 10px;
  padding: 30px 15px;
}
h2 {
  margin: 20px 0;
  padding: 10px;
  text-align: left;
}
h2 a,
.v-icon {
  color: var(--main-color);
}
</style>
