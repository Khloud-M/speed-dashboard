<template>
  <!-- <v-card class="mx-auto" width="300"> -->
  <v-navigation-drawer permanent location="right" style="width: 300px;">
    <template v-slot:prepend>
      <v-list-item max-width="210px" class="my-3 mx-auto">
        <img src="../../assets/image/logo.svg" alt="logo" />
      </v-list-item>
    </template>
    <v-list-item
      style="
        display: flex;
        flex-direction: row;
        justify-content: start;
        padding-right: 35px;
      "
    >
      <v-icon style="padding-left: 5px"> mdi-home </v-icon>
      <router-link to="/">الإحصائيات</router-link>
    </v-list-item>
    <v-list v-model:opened="open">
      <v-list-group value="Users">
        <v-list-group v-for="item in groups">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              style="display: flex; flex-direction: row; justify-content: start"
            >
              <v-icon>{{ item.action }} </v-icon>
              <span v-text="item.title"> </span>
            </v-list-item>
          </template>

          <v-list-item v-for="childIiem in item.items">
            <ul
              style="
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: start;
                list-style: none;
              "
            >
              <li>
                <router-link :to="childIiem.showAll"> عرض الكل</router-link>
              </li>
              <li>
                <router-link :to="childIiem.addNew"> إضافة جديد</router-link>
              </li>
            </ul>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
  <!-- </v-card> -->
</template>

<script>
export default {
  data: () => ({
    open: ["Users"],
    groups: [
      {
        action: "",
        items: [
          {
            showAll: "/mainFilters",
            addNew: "/mainFilters/add",
          },
        ],
        title: "تصنيفات رئيسيه",
      },
      {
        action: "",
        items: [{ showAll: "/supFilters", addNew: "/supFilters/add" }],
        title: "تصنيفات فرعيه",
      },
      {
        action: "mdi-handshake",
        items: [{ showAll: "/sliders", addNew: "/sliders/add" }],
        title: "الاسليدر الرئيسي",
      },
      {
        action: "mdi-account-group",
        items: [{ showAll: "/clients", addNew: "/clients/add" }],
        title: "المستخدمين",
      },
      {
        action: "mdi-earth",
        items: [{ showAll: "/countries", addNew: "/countries/add" }],
        title: "الدول",
      },
      {
        action: "mdi-city",
        items: [{ showAll: "/cities", addNew: "/cities/add" }],
        title: "المدن",
      },
      {
        action: "mdi-powershell",
        items: [{ showAll: "/permissions", addNew: "/permissions/add" }],
        title: "الصلاحيات",
      },
      {
        action: "mdi-google-ads",
        items: [{ showAll: "/ades", addNew: "/ades/add" }],
        title: "المنتجات",
      },
      {
        action: "mdi-image-multiple",
        items: [{ showAll: "/advertisements", addNew: "/advertisements/add" }],
        title: "الاعلانات",
      },
      {
        action: "mdi-database",
        items: [{ showAll: "/packages", addNew: "/packages/add" }],
        title: "الباقات",
      },
      {
        action: "mdi-barcode",
        items: [{ showAll: "/promoCode", addNew: "/promoCode/add" }],
        title: "برومو كود",
      },
      {
        action: "mdi-chart-bar",
        items: [{ showAll: "/status", addNew: "/status/add" }],
        title: "الحالات",
      },
      {
        action: "mdi-truck",
        items: [{ showAll: "/shipping", addNew: "/shipping/add" }],
        title: "طرق الشحن",
      },
      {
        action: "mdi-account-tie-hat",
        items: [{ showAll: "/admins", addNew: "/admins/add" }],
        title: "مديرين اللوحه",
      },
      {
        action: "mdi-atlassian",
        items: [
          { showAll: "/commonQuestions", addNew: "/commonQuestions/add" },
        ],
        title: "الأسئله الشائعه",
      },
    ],
  }),
};
</script>
<style scoped >
li,
a {
  font-size: 20px;
  color: black;
}

span {
  font-size: 20px;
}
.v-list-item.v-list-item--link.v-list-item--density-default.v-list-item--one-line.v-list-item--variant-text.v-list-group__header {
  justify-content: space-between !important;
}
.main_title {
  display: flex;
  /* background-color: red; */
  justify-content: space-between;
  align-items: center;
}
.v-list-item__append > .v-icon {
  display: none !important;
}
.v-list-item__content {
  text-align: end;
}
span {
  margin: 0 10px;
}
</style>
