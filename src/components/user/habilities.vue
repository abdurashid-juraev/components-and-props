<template>
  <div class="user_profile">
    <h3>User profile:</h3>
    <div>
      <hr />
      <slot name="other">Loading...</slot>
      <hr />
      <slot name="main_habilities"></slot>
    </div>
    <hr />
    <div>
      <slot name="notes"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habilities: ["JS", "CSS", "HTML"],
      
    };
  },
};
</script>
<style scoped>
li {
  color: red;
}
.user_profile {
  border: 1px solid blue;
  padding: 10px 20px;
}
</style>