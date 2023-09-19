<template>
  <v-row class="login">
    <v-col class="content" cols="lg-6">
      <div>
        <img src="@/assets/image/logo.svg" alt="logo" />
        <h2>تسجيل الدخول</h2>
        <h2>تسجيل دخول ع لوحة تحكم</h2>
      </div>
      <form>
        <v-text-field
          label="البريد الإلكترونيي"
          type="email"
          v-model="email"
        ></v-text-field>
        <v-text-field
          label=" كلمة المرور"
          type="password"
          v-model="password"
        ></v-text-field>
        <input type="submit" value="تسجيل الدخول" />
      </form>
    </v-col>
    <v-col class="image" cols="lg-6">
      <img src="@/assets/image/login_img.jpg" alt="image" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.image img {
  width: 100%;
  height: 100%;
}
.content {
  text-align: center;
}
h2 {
  padding: 3px 0;
}
form {
  margin: 20px 0;
}
</style>
