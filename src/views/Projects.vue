<template>
  <div id="page">
    <h2>{{!globalTranslation ? "Aqui é onde eu colocaria meus projetos... SE EU TIVESSE ALGUM" : "This is where I'd put my projects... IF I HAD ANY"}}</h2>
    <img src="https://memegenerator.net/img/images/5724553.jpg" alt="DINKLEBERRY, YOU'LL PAY">
  </div>
</template>

<script>
  export default {
      name: 'Projects',
      props: [ "globalTranslation" ],
      
  }
</script>

<style lang="sass">

</style>
