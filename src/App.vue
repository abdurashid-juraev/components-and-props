<template>
  <div>
    <app-header> {{ name }} {{ lastname }} </app-header>
    <div class="container">
      <profileContent
        :userName="name"
        :userLastName="lastname"
        :userAge="age"
        :userParents="parents"
        @upDateName="name = $event"
        :updateLastname="updateLastname"
      />
      <compFriend />
      <compHabilities>
        <div>
          <a href="#!">See more about this user</a>
        </div>
        <ul slot="main_habilities">
          <li v-for="(habilitie, index) in habilities" :key="index">
            {{ habilitie }}
          </li>
        </ul>
        <div slot="notes">
          <p>The use also knows PHP</p>
        </div>
        <div>
          <a href="#!">See more about this user</a>
        </div>
        <div :slot="slotName">other content</div>
      </compHabilities>
    </div>

    <compFooter />
  </div>
</template>

<script>
import compFooter from "./components/header_footer/footer";
import profileContent from "./components/user/profile";
import compFriend from "./components/user/friends";
import compHabilities from "./components/user/habilities";

export default {
  data() {
    return {
      name: "Fransic",
      lastname: "Jones",
      age: 25,
      parents: {
        mother: "Martha",
        father: "Jackson",
      },
      habilities: ["JS", "CSS", "HTML"],
      slotName: "",
    };
  },
  methods: {
    updateLastname(value) {
      this.lastname = value;
    },
  },
  components: {
    compFooter,
    profileContent,
    compFriend,
    compHabilities,
  },
  created() {
    setTimeout(() => {
      this.slotName = "other";
    }, 2000);
  },
};
</script>

<style>
body {
  background: lightgrey;
}
</style>
