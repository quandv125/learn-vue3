<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal" @click="clickOutSide">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <v-icon class="modal-close" @click="close" icon="mdi-close"></v-icon>
          <!-- Modal content -->
          <slot />
          <v-btn color="info" @click="close">close</v-btn>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{ (event: 'close'): void }>()
const close = () => {
  emit('close')
}

const clickOutSide = (e: Event) => {
  const { className } = e.target as HTMLInputElement
  if (className === 'modal') {
    close()
  }
}
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  z-index: 1010;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 100%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 15px 20px;
    margin: 10px;
    border-radius: 10px;
    .modal-close {
      z-index: 1;
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      color: red;
      cursor: pointer;
      &:hover {
        color: crimson;
      }
    }
  }
}
</style>
