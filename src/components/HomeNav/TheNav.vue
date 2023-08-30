<template>
  <setion class="main_nav">
    <p>لوحة تحكم</p>
    <p>Speed4Ever</p>
    <v-icon>mdi-cart-minus </v-icon>

    <v-spacer> </v-spacer>
    <div><v-icon>mdi-bell-outline </v-icon> <v-icon>mdi-logout </v-icon></div>
  </setion>
</template>

<script>
export default {};
</script>

<style>
.main_nav {
  margin: 15px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center !important;
  padding: 15px;
  border-radius: 15px;
  background-color: white;
  box-shadow: var(--main_box_shadow);
}
p:nth-of-type(2) {
  color: var(--main-color);
  font-weight: 500;
  display: inline-block;
  margin: 0 5px;
}
</style>
