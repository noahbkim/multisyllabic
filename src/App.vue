<template>
  <div id="app">
    <h1 class="with-subtitle">Multisyllabic</h1>
    <span class="subtitle">A Syllabus Generator for American University</span>
    <div class="section">
      <h2>Course Information</h2>

    </div>
    <button @click="download()">Download</button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Document, Packer} from 'docx';
import {CourseDescription} from "./template";
import {download} from "./download";

@Component({components: {}})
export default class App extends Vue {
  public download() {

  }
}
</script>

<style lang="scss">
  body {
    max-width: 800px;
    margin: 4rem auto;
  }

  .section {
    margin: 2em 0;
    display: block;
  }

  .with-subtitle {
    margin-bottom: 0.25em;
  }

  .subtitle {
    display: block;
    margin-top: 0;
    margin-bottom: 1em;
  }
</style>
