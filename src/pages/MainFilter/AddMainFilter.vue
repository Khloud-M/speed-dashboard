<template>
  <div class="mainfilter">
    <v-breadcrumbs :items="items" divider="-"> </v-breadcrumbs>
  </div>
  <div class="filter_add">
    <h3>إضافة جديد</h3>
    <form class="container_add">
      <div class="image" style="position: relative; z-index: 1">
        <div
          class="edit"
          style="
            background-color: var(--gray-color);
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
          "
        >
          <img v-if="imgSrc" :src="imgSrc" style="width: 100%" />
          <label
            for="file"
            v-else
            style="position: absolute; top: 50%; left: 40px; color: white"
            >Main Image</label
          >
          <label
            for="file"
            style="
              position: absolute;
              bottom: -20%;
              z-index: 9999;
              left: 50px;
              color: black;
              background-color: white;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              text-align: center;
              line-height: 40px;
              cursor: pointer;
            "
            ><v-icon> mdi-file-edit-outline</v-icon></label
          >
          <input
            type="file"
            id="file"
            accept="image/gif, image/jpeg, image/png"
            style="display: none"
            @change="(e) => onFileSelected(e)"
          />
        </div>
      </div>
      <v-text-field label="الإسم (عربي)" variant="outlined"/>

      <v-text-field label="الإسم (إنجليزي)" color="red"/>


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
  width: 60%;
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
input[type="submit"] {
  background-color: var(--main-color);
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  font-weight: bold;
}
.v-field--variant-filled .v-field__overlay {
    background-color: transparent !important;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    border: 3px solid red;
    border-radius: 30px;
}
/* .v-field--center-affix .v-label.v-field-label {
    top: 50%;
    transform: translateY(-50%);
    color: var(--main-color) !important;
    /* font-size: 1px; */
/* }  */
</style>
