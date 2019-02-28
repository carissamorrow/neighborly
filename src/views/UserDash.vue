<template>
  <div class="userdash container-fluid-sm">
    <i class="fas fa-home fa-7x"></i>
    <h1 class="bottom banana">Welcome to your Dashboard</h1>
    <div class="row">
      <div class="col-12 mt-5">
        <h3>My Items I've Posted</h3>
      </div>
      <div class="col-12 mt-5">
        <h3>Items I've Borrowed</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'userdash',
    data() {
      return {

      }
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  .banana {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    color: rgb(26, 105, 158);
  }

  .fas {
    margin-right: 800px;
  }
</style>