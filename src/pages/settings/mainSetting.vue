<template>
  <div class="filter_add">
    <div class="setting">
      <div>
        <router-link to="/mainSetting"> من نحن</router-link>
      </div>
      <div>
        <router-link to="/mainSetting/condition"> الشروط والأحكام</router-link>
      </div>
      <div>
        <router-link to="/mainSetting/privacy"> سياسة الخصوصية</router-link>
      </div>
      <div>
        <router-link to="/mainSetting/contactUs"> اتصل بنا </router-link>
      </div>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
hr {
  display: block;
  margin: 20px 0;
  border: 1px dashed black;
}
.filter_add {
  background-color: white;
  box-shadow: var(--main_box_shadow);
  border-radius: 10px;
  padding: 30px 15px;
}
.setting {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}
.setting div {
  background-color: var(--main-color);
  border-radius: 2px 13px 4px 15px;
  padding: 7px 15px;
}
.setting div a {
  color: white;
  font-size: 20px;
}
.setting div a:hover {
  color: black !important;
}
.active {
  color: black !important;
}

.v-locale--is-ltr {
  direction: rtl !important;
  width: 100%;
}
</style>
