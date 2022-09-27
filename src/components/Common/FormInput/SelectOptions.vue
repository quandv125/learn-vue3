<template>
  <div class="FormInputMaster" :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <label :for="name">{{ label }}</label>
    <!-- Array -->
    <select
      v-if="Array.isArray(options)"
      :id="name"
      :value="inputValue"
      @change="onHandleChange"
      @input="handleChange"
      @blur="handleBlur"
    >
      <option v-for="(option, key) in options" :key="key" :value="option.value">
        {{ option.text }}
      </option>
    </select>

    <!-- Object -->
    <select v-else :id="name" :value="inputValue" @change="onHandleChange" @input="handleChange" @blur="handleBlur">
      <option v-for="(text, val) in options" :key="val" :value="val">
        {{ text }}
      </option>
    </select>
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ $t(errorMessage || successMessage, {value: name}) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, toRef } from 'vue'
import { useField } from 'vee-validate'
const emit: any = defineEmits()

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  options: {
    type: [Array, Object],
    required: false,
    default: () => []
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
    default: 'Good job!',
  }
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
  const {value} = event.target
  emit('update:modelValue', value)
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

select {
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 15px 10px;
  outline: none;
  background-color: #f2f5f7;
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

select:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.FormInputMaster.has-error select {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.FormInputMaster.has-error select:focus {
  border-color: var(--error-color);
}

.FormInputMaster.has-error .help-message {
  color: var(--error-color);
}

.FormInputMaster.success select {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.FormInputMaster.success select:focus {
  border-color: var(--success-color);
}

.FormInputMaster.success .help-message {
  color: var(--success-color);
}
</style>
