<template>
  <v-app>
    <v-main>
        <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    document.body.dir = "rtl";
  },
};
</script>
<style >
.v-main{
  background-color: var(--main_bg_clr);
  direction: rtl;
}
body , .v-app{
  direction: rtl;
}
</style>
