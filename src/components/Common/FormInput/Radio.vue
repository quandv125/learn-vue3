<template>
  <label :for="`rd-${value}`" :class="className">
     <input 
      :name="name"
      :id="`rd-${value}`"
      :type="type"
      :value="value"
      :checked="checked"
      @click="handleChange(value)"
     />
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, toRef, computed } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'radio',
  },
  modelValue: {
    type: null,
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  value: {
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
})

const name = toRef(props, 'name')

const { handleChange } = useField(name, undefined);

const checked = computed(() => props.value === props.modelValue)
</script>
