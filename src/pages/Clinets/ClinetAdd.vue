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
      <v-row style="width: 100%; display: flex; justify-content: space-between">
        <v-col cols="lg-6">
          <v-text-field label="الاسم" width="100%"> </v-text-field>
        </v-col>
        <v-col cols="lg-6">
          <v-text-field type="tel" label="الهاتف"></v-text-field>
        </v-col>
      </v-row>
      <v-row style="width: 100%; display: flex; justify-content: space-between">
        <v-col cols="lg-6">
          <v-text-field label="البريد الإلكتروني" width="100%" type="email">
          </v-text-field>
        </v-col>
        <v-col cols="lg-6">
          <v-text-field label="كلمة المرور" type="password"></v-text-field>
        </v-col>
      </v-row>
      <v-radio-group>
        <v-row
          style="width: 100%; display: flex; justify-content: space-between"
        >
          <v-col cols="lg-6">
            <v-radio label="حظر" value="1"></v-radio>
          </v-col>
          <v-col cols="lg-6">
            <v-radio label="مفعل" value="2"></v-radio>
          </v-col>
          <v-col cols="lg-12">
            <v-textarea label="سبب الحظر "></v-textarea>
          </v-col>
        </v-row>
      </v-radio-group>

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
input[type="submit"] {
  background-color: var(--main-color);
  color: white;
  border-radius: 20px;
  padding: 10px;
  width: 150px;
  font-weight: bold;
}
.v-field {
  border-radius: 0 !important;
}
</style>
