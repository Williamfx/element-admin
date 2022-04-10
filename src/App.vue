<template>
<router-view></router-view>
<Welcome  msg="jack"/>
</template>

<script>
import Welcome from "./components/Welcome.vue";
  export default {
    name: "app",
    components: { Welcome }
}

</script>

<style>


</style>
