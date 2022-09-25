<template>
  <div class="FormInputMaster" :class="{ 'has-error': !!errorMessage }">
    <label :for="name">{{ label }}</label>
    <input
      v-model="value"
      :name="name"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
    />
    <p class="help-message" v-show="errorMessage">
      {{ $t(errorMessage || successMessage) }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'
import * as yup from 'yup'
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  autocomplete: {
    type: String,
    default: '',
  },
})
const nameRef = toRef(props, 'name')
const { errorMessage, value } = useField(nameRef, yup.string().required().min(8))
</script>
