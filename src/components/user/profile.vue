<template>
  <div>
    <div class="user_profile">
      <h3>User information:</h3>
      <ul>
        <li><span>Name:</span> {{ userName }}</li>
        <li><span>Lastname:</span> {{ userLastName }}</li>
        <li><span>Age:</span> {{ userAge }}</li>
      </ul>
      <h3>Parents</h3>
      <ul>
        <li v-for="(key, value, index) in userParents" :key="index">
          {{ value }}: {{ key }}
        </li>
      </ul>
    </div>
    <button @click="upDateName">update name</button>
    <button @click="updateLastname('Smith')">update LastName</button>

    <div>
      <input type="text" v-model="friendInput" />
      <button @click="addFriends">Add friend</button>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  data() {
    return {
      friendInput: "",
    };
  },
  props: {
    userName: String,
    userLastName: String,
    userAge: Number,
    userParents: Object,
    updateLastname: Function,
  },
  methods: {
    upDateName() {
      // this.userName = "Fransic Steve";
      this.$emit("upDateName", "Fransic Steve");
    },
    addFriends() {
      bus.$emit("addFriend", this.friendInput);
    },
  },
};
</script>
<style  scoped>
span {
  font-weight: 800;
}
li {
  font-weight: bold;
}
.container {
  margin-top: 25px;
  font-size: 25px;
}
.user_profile {
  border: 1px solid blue;
  padding: 10px 20px;
}
</style>