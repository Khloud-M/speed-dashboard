<template>
  <div class="mainfilter">
    <v-breadcrumbs :items="items" divider=">>"> </v-breadcrumbs>
  </div>
  <div class="filter_add">
    <h3>إضافة جديد</h3>
    <form style="margin: 30px 0">
      <v-row class="container_add">
        <v-col cols="lg-5">
          <v-text-field label="السؤال (عربي)"> </v-text-field>
        </v-col>
        <v-col cols="lg-5">
          <v-text-field label="السؤال (إنجليزي)"> </v-text-field>
        </v-col>
        <v-col cols="lg-5">
          <v-textarea label="ألمحتوى (عربي)"></v-textarea>
        </v-col>
        <v-col cols="lg-5">
          <v-textarea label="ألمحتوى (إنجليزي)"></v-textarea>
        </v-col>
      </v-row>

      <input type="submit" value="حفظ" />
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgSrc: null,
    items: [
      {
        title: "الصفحة الرئيسية",
        disabled: false,
        href: "/status/add",
      },
      {
        title: "تصنيفات فرعية",
        disabled: false,
        href: "/status",
      },
      {
        title: " إضافة تصنيف",
        disabled: false,
        href: "/supFilters/add",
      },
    ],
  }),
  methods: {
    onFileSelected(event) {
      const file = event.target.files[0];
      this.imgSrc = URL.createObjectURL(file);
      console.log(this.imgSrc);
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
  border-radius: 10px;
  background-color: white;
  box-shadow: var(--main_box_shadow);
}
.filter_add {
  background-color: white;
  box-shadow: var(--main_box_shadow);
  border-radius: 10px;
  padding: 15px;
}
.container_add {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  column-gap: 15px;
  flex-direction: row;
  align-items: center;
  row-gap: 30px;
}
.v-locale--is-ltr {
  direction: rtl !important;
  width: 100%;
}
input[type="submit"] {
  background-color: var(--main-color);
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  font-weight: bold;
  display: block;
  margin: auto;
}
.v-field--variant-outlined .v-field__outline {
  border-radius: 0 !important;
}
</style>
