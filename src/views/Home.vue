<template>
  <div class="home container-fluid-sm banana">
    <h1>Welcome to Neighborly</h1>
    <div class="img1 mt-5">
      <img src="https://wp.zillowstatic.com/trulia/wp-content/uploads/sites/1/2017/04/Home-Prices-HERO.jpg">
    </div>
  </div>
</template>
<script>
  // @ is an alias to /src


  export default {
    name: 'home',
    components: {

    }
  }
</script>

<style>
  body {
    background-color: lightgrey;
  }

  .img1 {
    position: relative;
    max-width: 100%;
  }

  .banana {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
</style>