<template>
  <div class="filter_add">
   <div class="setting">
    <div>
      <router-link to="/mainSetting"> من نحن</router-link>
    </div>
    <div>
      <router-link to="/condition">  الشروط والأحكام</router-link>
    </div>
    <div>
      <router-link to="/privacy"> سياسة الخصوصية</router-link>
    </div>
    <div>
      <router-link to="/contactUs"> اتصل بنا </router-link>
    </div>

   </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
};
</script>

<style scoped>

.filter_add {
  background-color: white;
  box-shadow: var(--main_box_shadow);
  border-radius: 10px;
  padding: 15px;
}
.setting{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

.v-locale--is-ltr {
  direction: rtl !important;
  width: 100%;
}
</style>
