<template>
  <div id="page" >
    <div id="introduction" class="intro">
      <Infoblock id="introductionSection" :sectionTitle="introductionSectionText.sectionTitle"
                     :sectionContent="introductionSectionText.sectionContent">
      </Infoblock>
    </div>
    <div class="infoSection">
      <Infoblock id="whatSection" :sectionTitle="whatSectionText.sectionTitle"
                 :sectionContent="whatSectionText.sectionContent"></Infoblock>
      <Infoblock id="whoSection" :sectionTitle="whoSectionText.sectionTitle"
                 :sectionContent="whoSectionText.sectionContent"></Infoblock>
      <Infocard :isTranslated="globalTranslation"></Infocard>
    </div>
    <footer>{{!isTranslated ? "Criado por Victor Paro" : "Created By Victor Paro"}}</footer>
  </div>
</template>

<script>
import { introductionSection, whatSection, whoSection } from '@/page-texts/homeText.json';
import Infoblock from '@/components/Infoblock.vue';
import Infocard from '@/components/Infocard.vue';

export default{
    name: 'Home',
    props: [ "globalTranslation" ],
    components: {
        Infoblock,
        Infocard,
    },
    data(){
        return {
            introductionSectionText: {
                sectionTitle: '',
                sectionContent: ''
            },
            whatSectionText: {
                sectionTitle: '',
                sectionContent: ''
            },
            whoSectionText: {
                sectionTitle: '',
                sectionContent: ''
            },
            isTranslated: this.globalTranslation
        }
    },
    methods: {
        returnTitle(section){
            if(!this.isTranslated)
                return section.titlePT;
            return section.titleEN;
        },
        returnContent(section){
            if(!this.isTranslated)
                return section.contentPT;
            return section.contentEN;
        },
        updateText(){
            this.introductionSectionText.sectionTitle = this.returnTitle(introductionSection);
            this.introductionSectionText.sectionContent = this.returnContent(introductionSection);
            this.whatSectionText.sectionTitle = this.returnTitle(whatSection);
            this.whatSectionText.sectionContent = this.returnContent(whatSection);
            this.whoSectionText.sectionTitle = this.returnTitle(whoSection);
            this.whoSectionText.sectionContent = this.returnContent(whoSection);
        }
    },
    updated(){
        this.isTranslated = this.globalTranslation;
        this.updateText();
    },
    mounted(){
        this.updateText();
    }
}
</script>

<style lang="sass">
#page
  //background-color: black
  color: #bfbfbf
  min-height: 95vh
  text-align: center

.intro
  width: 50%
  margin-left: 25%
  margin-top: 2%
  //color: #7e7d8a
  font-size: 28px
  justify-content: center
  background-color: #7e7d8a
  border: 2px
  border-style: solid

.infoSection
  //background-color:
  font-size: 20px

footer
  margin-top:10%
</style>
