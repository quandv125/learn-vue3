<template>
  <label :class="className" :for="`rd-${value}`">
    <Field :name="name" :id="`rd-${value}`" :type="type" v-model="modelValue" :value="value" />
    <!-- <input
        type="radio"
        v-model="modelValue"
        :value="value"
        :name="name"
        :id="`rd-${value}`"
        :checked="modelValue === value"
        @click="handleChange(value)"
      /> -->
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
import { Field } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'radio',
  },
  modelValue: {
    type: String,
    required: true,
    default: '',
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
// const { checked, handleChange } = useField(name, undefined, {
//   checkedValue: props.value,
// })
</script>

<style scoped>
button {
  background: none;
  border: none;
  font-size: 22px;
}
</style>
