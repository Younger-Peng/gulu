<template>
  <div class="grid">
    <e-row gutter="20">
      <e-col span="6">
        <div class="box">6</div>
      </e-col>
      <e-col span="6">
        <div class="box">box</div>
      </e-col>
      <e-col span="12">
        <div class="box">12</div>
      </e-col>
    </e-row>
  </div>
</template>
<script>
  import row from '../components/row'
  import col from '../components/col'
  export default {
    name: 'Grid',
    components: {
      'e-row': row,
      'e-col': col
    }
  }
</script>
<style scoped>
  .grid {
    width: 900px;
    margin: 0 auto;
    box-shadow: 0 0 10px 0 #ccc;
  }
</style>