<template>
  <div class="container-fluid">
    <div class="row justify-content-center mt-4">
      <img :src="myProp" />
    </div>
    <div class="card mt-4">
      <h5 class="card-header" style="background-color: #343a40; color: white;">About the project</h5>
      <div class="card-body">
        <div class="row justify-content-center">
          <p>This is a thesis project designed to showcase how microfrontend approach can be used to improve web
            development
            of large frontend projects. It uses <b>Custom Elements</b> to achieve this.</p>
          <p>There are five different projects in this application that are both developed and deployed separately but
            can
            still communicate with eachother. Home page is written in Vue.js, while the rest of them are written in
            Angular
            7.</p>
          <p>First project is called <b>Microfrontends</b> and it combines and it's job is to combine all the projects
            together and handle routing and navigation.</p>
          <p>Second project is called <b>HomePage</b> and it's the one you're looking at right now. It just displays the
            starting page and it receives the path to the image source from the original project.</p>
          <p>Third project is called <b>product-cart</b> and it displays a list of products that is available so that a
            customer can choose and after the choice is done it forwards the product object to the next project.</p>
          <p>Fourth project is called <b>shopping-cart</b>. It gets product information from the product-cart and
            displays
            the list of products that are selected and the price that the customer has to pay to purchase them.
            Finally, it allows the customer to purchase products.</p>
          <p>Fifth project is called <b>purchases-page</b>. It collects all the purchase data from shopping-cart project
            and
            displays it in a table.</p><br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['myProp']
  }
</script>