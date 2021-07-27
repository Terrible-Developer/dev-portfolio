<template>
<div id="bar">
  <div class="leftItems">
    <h3 class="navBar nameTag">Victor's Anime Madhouse</h3>
    |
    <router-link class="navItem" to="/">{{!isTranslated ? "Início" : "Home"}}</router-link>
    |
    <router-link class="navItem" to="/projects">{{!isTranslated ? "Projetos" : "Projects"}}</router-link>
    |
    <router-link class="navItem" to="/about">{{!isTranslated ? "Sobre" : "About"}}</router-link>
    |
  </div>
  <div class="rightItems">
    <div>
      <p class="navBar">Placeholder</p>
    </div>
    <p>{{!isTranslated ? "Linguagem:" : "Language:"}}</p>
    <label id="langToggle" class="navBar">
      <input type="checkbox" v-on:click="changeLanguageOnClick()">
      <span class="slider round"></span>
    </label>
  </div>
</div>
</template>

<script>
export default{
    name:'Topbar',
    data(){
        return {
            isTranslated: false
        }
    },
    methods: {
        changeLanguageOnClick(){
            this.$emit('change-language');
        }
    }
}
</script>

<style lang="sass">
#bar
  width: 100%
  background-color: gray
  border-radius: 25px
  display: flex
  flex-direction: row
  align-items: baseline
  justify-content: space-between

.leftItems
  display: flex
  flex-direction: row
  align-items: baseline
  a
    color: white
    text-decoration: none

  .navItem
    margin-left: 3px
    margin-right: 3px

.rightItems
  display: flex
  flex-direction: row

.navBar
  margin-left: 5px
  margin-right: 5px

.nameTag
  color: white

#languageButton
  color: white
  background-color: #00b0b0
  border-radius: 25px

#langToggle
  position: relative
  display: inline-block
  width: 60px
  height: 34px
  margin-top: 8px

  input:
    opacity: 0
    width: 0
    height: 0

.slider
  position: absolute
  cursor: pointer
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: #ccc
  -webkit-transition: .4s
  transition: .4s

  &:before
    position: absolute
    content: ""
    height: 26px
    width: 26px
    left: 4px
    bottom: 4px
    background-image: url("../assets/brflag.jpg")
    background-size: contain
    background-repeat: no-repeat
    background-size: 27px 27px
    background-color: white
    -webkit-transition: .4s
    transition: .4s

  &.round
    border-radius: 34px
    &:before
      border-radius: 50%
    &:after
      border-radius: 50%

input
  &:checked + .slider
    background-color: #2196F3
    &:before
      position: absolute
      content: ""
      height: 26px
      width: 26px
      left: 4px
      bottom: 4px
      background-image: url("../assets/usflag.png")
      background-size: contain
      background-repeat: no-repeat
      background-size: 27px 27px
  &:focus + .slider
    box-shadow: 0 0 1px #2196F3
  &:checked + .slider:before
    -webkit-transform: translateX(26px)
    -ms-transform: translateX(26px)
    transform: translateX(26px)
</style>
