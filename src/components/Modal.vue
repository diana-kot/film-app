<template>
  <transition name="fade" appear>
      <div class="modal__overlay" 
      v-if="closeover"
      @close="isAuthModalOpen = false"></div>
      
      
     
    </transition>
</template>

<script>
export default {

}
</script>

<style>

</style>