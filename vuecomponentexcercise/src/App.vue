<template>
  <div id="app">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Galley></Galley>
    <Slider></Slider>
    <Card></Card>
    <Footer></Footer>
    <Copyright></Copyright>
   
  </div>
</template>

<script>

import Navbar from './components/NavbarComponent'
import Breadcrumb from './components/BreadcrumbComponent'
import Galley from './components/GalleyComponent'
import Slider from './components/SliderComponent'
import Card from './components/CardComponent'
import Footer from './components/FooterComponent'
import Copyright from './components/CopyrightComponent'


export default {
  name: 'App',
  components : {
    Navbar,Breadcrumb,Galley,Slider,Card,Footer,Copyright
  },
}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#parentDiv {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#mobileLegend {
  border: solid 1px black;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 10px;
  padding-top: 10px;
  padding: 5px
}
</style>