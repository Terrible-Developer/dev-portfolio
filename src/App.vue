<template>
  <div id="bar">
    <Topbar :isTranslated="globalTranslation" v-on:change-language="changeLanguage($event)"></Topbar>
  </div>
  <router-view :globalTranslation="globalTranslation" v-on:change-language="changeLanguage($event)"/>
</template>

<script>
import Topbar from './components/Topbar.vue';
export default{
    components: {
        Topbar
    },
    data(){
        return {
            globalTranslation: false
        }
    },
    methods: {
        changeLanguage(){
            this.globalTranslation = !this.globalTranslation;
        }
    },
    mounted(){

    }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap')

$sourceSans: 'Source Sans Pro', sans-serif

body
  background-color: #2b2b2b
  font-family: $sourceSans

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#bar
  color: #bfbfbf

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

</style>
