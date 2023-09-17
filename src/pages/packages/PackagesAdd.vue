<template>
  <div class="mainfilter">
    <v-breadcrumbs :items="items" divider="-"> </v-breadcrumbs>
  </div>
  <div class="filter_add">
    <h3>إضافة جديد</h3>
    <v-row style="width: 100%; display: flex; justify-content: space-between">
      <v-col cols="lg-6">
        <v-text-field label="العنوان (عربي)" width="100%"> </v-text-field>
      </v-col>
      <v-col cols="lg-6">
        <v-text-field label="العنوان (إنجليزي)"></v-text-field>
      </v-col>
    </v-row>
    <v-row style="width: 100%; display: flex; justify-content: space-between">
      <v-col cols="lg-6">
        <v-textarea label="المحتوى (عربي)"></v-textarea>
      </v-col>
      <v-col cols="lg-6">
        <v-textarea label="المحتوى (انجليزي)"></v-textarea>
      </v-col>
      <v-col cols="lg-6">
        <v-text-field label="عدد الاعلانات" width="100%" type="number">
        </v-text-field>
      </v-col>
      <v-col cols="lg-6">
        <v-text-field label=" السعر" width="100%" type="number"> </v-text-field>
      </v-col>
      <v-col cols="lg-12">
        <v-text-field label=" المدة" width="100%" type="number"> </v-text-field>
      </v-col>
    </v-row>
    <input type="submit" value="حفظ" />
  </div>
</template>

<script>
export default {
  data: () => ({
    imgSrc: null,
    items: [
      {
        title: " إضافة تصنيف",
        disabled: false,
        href: "mainFilters/add",
      },
      {
        title: "تصنيفات الرئيسية",
        disabled: false,
        href: "/mainFilters",
      },
      {
        title: "الصفحة الرئيسية",
        disabled: false,
        href: "/",
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

<style>
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
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
}
.v-locale--is-ltr {
  direction: rtl !important;
  width: 100%;
}
</style>
