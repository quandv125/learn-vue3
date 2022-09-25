<template>
  <button class="submit-btn" :type="type">{{ label }}</button>
</template>
<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import type { PropType } from 'vue'
import type { ButtonType } from '@/types'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    enum: ['submit', 'button', 'reset'],
    default: 'submit',
  },
  label: {
    type: String,
    default: 'Submit',
  },
})

const label = toRef(props, 'label')
</script>
