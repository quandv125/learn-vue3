<template>
  <label :for="`chbox-${value}`" :class="className">
     <input 
      :name="name"
      :id="`chbox-${value}`"
      :type="type"
      :value="value"
      :checked="props.modelValue.includes(value)"
      @click="handleChange(value)"
     />
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'checkbox',
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

const { checked, handleChange } = useField(name, undefined, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
});
</script>
