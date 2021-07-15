<template>
  <div>
    <div class="infoSection">
      <h2>{{sectionTitle}}</h2>
      <p>{{sectionContent}}</p>
    </div>
    <br/>
  </div>
</template>

<script>
export default{
    name: 'Infoblock',
    props: [ "sectionTitle", "sectionContent" ]
}
</script>

<style>

</style>
