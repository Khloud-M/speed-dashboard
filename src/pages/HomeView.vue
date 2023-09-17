<template>
  <div>
    <SideBar />
    <div style="width: 90%; margin: auto;">
      <TheNav />
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/layout/SideBar.vue";
import TheNav from "@/components/HomeNav/TheNav.vue";
export default {
  components: {
    SideBar,
    TheNav,
  },
};
</script>
<style>
</style>
