<template>
<div class="card">
  <div class="leftSide">
    <h2>Placeholder</h2>
  </div>
  <div class="rightSide">
    <p>{{!isTranslated ? "Nome:" : "Name:"}} Victor Bruno Paro</p> <br/>
    <p>{{!isTranslated ? "Data de Nascimento:" : "Birthday: "}} 29/04/1998 ({{!isTranslated ? "Idade:" : "Age:"}}{{currentAge}})</p> <br />
    <p>Email: victorbparo@gmail.com</p>
    <p>{{!isTranslated ? "Umuarama - Paraná, Brasil" : "Umuarama - Paraná, Brazil"}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: "Infocard",
    props: [ "isTranslated" ],
    data(){
      return {
        currentAge: this.getCurrentAge()
      }
    },
    methods: {
      getCurrentAge(){
        const currentDate = new Date()
        let ageYear = 0;
        if(currentDate.getMonth() > 3)
          ageYear = 1998;
        else if(currentDate.getMonth() < 3
                || currentDate.getMonth() === 3 && currentDate.getDate() < 29)
          ageYear = 1997;

        return currentDate.getFullYear() - ageYear;
      }
    }
}
</script>

<style lang="sass">
.card
  display: flex
  flex-direction: row
  justify-content: space-between
  width: 40%
  margin-left: 30%
  border-style: solid
  border-width: 2px
  background-color: #7e7d8a
</style>
