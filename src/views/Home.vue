<template>
  <div id="page" >
    <div id="bar">
      <Topbar isTranslated="globalTranslation" v-on:languageToggle="changeLanguage($event)"></Topbar>
    </div>
    <div id="introduction" class="intro">
      <Infoblock id="introductionSection" isTranslated="globalTranslation" sectionTitle="Olá" sectionTitleEN="Hello There"
                     sectionContent="Meu nome é Victor, e eu sou um desenvolvedor LQCQP (Literalmente, qualquer coisa que pague). Bem vindo ao meu canto da internet."
                     sectionContentEN="My name is Victor, and I'm a LATP developer (Literally anything that pays). Welcome to my corner of the internet.">
      </Infoblock>
    </div>
    <div class="infoSection">
      <Infoblock id="whatSection" isTranslated="globalTranslation" :sectionTitle="whatSectionText.sectionTitle"
                 :sectionContent="whatSectionText.sectionContent"></Infoblock>
      <Infoblock id="whoSection" isTranslated="globalTranslation" :sectionTitle="whoSectionText.sectionTitle"
                 :sectionContent="whoSectionText.sectionContent"></Infoblock>
      <Inforcard isTranslated="globalTranslation"></Inforcard>
    </div>
    <footer>{{!isTranslated ? "Criado por Victor Paro" : "Created By Victor Paro"}}</footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { whatSection, whoSection } from '@/page-texts/homeText.json';
import Infoblock from '@/components/Infoblock.vue';

export default{
    name: 'Home',
    props: [ "globalTranslation" ],
    components: {
        Infoblock
    },
    data(){
        return {
            whatSectionText: {
                sectionTitle: whatSection.titlePT,
                sectionContent: whatSection.contentPT
            },
            whoSectionText: {
                sectionTitle: whoSection.titlePT,
                sectionContent: whoSection.contentPT
            }
        }
        // eslint-disable-next-line no-unused-labels
        //isTranslated: false
    },
    methods: {

    },
    mounted(){
        //this.isTranslated = this.globalTranslation;
    }
}
</script>
