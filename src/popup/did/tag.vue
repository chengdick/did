<template>
    <span class="did-tag-item" :style="{background: tagInfo[tag] ? tagInfo[tag].bg : '#333'}">
        {{tag}}
    </span>
</template>
<script type='text/ecmascript-6'>
  export default {
    props: ['tag'],
    computed: {
      tagInfo () {
        return this.$store.state.tags
      }
    },
    mounted () {
      this.$store.dispatch('getTag', this.tag)
    }
  }
</script>
<style lang='scss'>
    .did-tag-item {
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        padding: 0 3px !important;
        margin: 3px 1px;
    }
</style>
