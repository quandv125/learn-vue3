<template>
  <div class="FormInputMaster" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <!-- <label :for="name">{{ label }}</label> -->
    <VTextField
      :name="name"
      :id="name"
      :type="type"
      :label="label"
      :value="inputValue"
      v-model="inputValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @change="onHandleChange"
      @input="handleChange"
      @blur="handleBlur"
    />
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ $t(errorMessage || successMessage, { value: name }) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'

const emit = defineEmits<{
  (event: 'update:modelValue', modelValue: string): void
}>()

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
// Ref
const name = toRef(props, 'name')

// Method
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, { initialValue: props.value })

const onHandleChange = (event: any) => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.FormInputMaster {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

input {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

input:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.FormInputMaster.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.FormInputMaster.has-error input:focus {
  border-color: var(--error-color);
}

.FormInputMaster.has-error .help-message {
  color: var(--error-color);
}

.FormInputMaster.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.FormInputMaster.success input:focus {
  border-color: var(--success-color);
}

.FormInputMaster.success .help-message {
  color: var(--success-color);
}
</style>
