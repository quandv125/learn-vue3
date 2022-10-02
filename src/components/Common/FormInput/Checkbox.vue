<template>
  <label :for="`chbox-${value}`" :class="className">
    <Field :name="name" :id="`chbox-${value}`" :type="type" v-model="modelValue" :value="value" />
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { Field } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'checkbox',
  },
  modelValue: {
    type: Array,
    required: true,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
    default: '',
  },
  value: {
    type: String,
    required: true,
    default: '',
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

const { name, modelValue } = toRefs(props)
</script>
