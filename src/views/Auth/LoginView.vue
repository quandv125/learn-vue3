<template>
    <div>
        <div class="alert alert-info">
            {{ $t('sign_in.input_text.username') }}: test<br />
            {{ $t('sign_in.input_text.password') }}: test
        </div>
        <h2>{{ $t('sign_in.title') }}</h2>
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label> {{ $t('sign_in.input_text.username') }} </label>
                <Field name="username" type="text" class="form-control" v-model="form.username" :class="{ 'is-invalid': errors.username }" />
                <div class="invalid-feedback">{{errors.username}}</div>
            </div>            
            <div class="form-group">
                <label>{{ $t('sign_in.input_text.password') }}</label>
                <Field name="password" type="password" class="form-control" v-model="form.password" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>            
            <div class="form-group">
                <button class="btn btn-primary" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    <!-- {{ $t('message.value', { value: 'This is an example of content translation' }) }} -->
                    <!-- {{ $t('sign_in') }} -->
                    Login
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
        </Form>
        <h1 v-if="authUser">Hi {{authUser.username}}!</h1>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const form = ref({username: 'test', password: 'test'})

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

const onSubmit = (values, { setErrors }) => {
    const authStore = useAuthStore();
    const { username, password } = values;
    return authStore.login(username, password).catch(error => setErrors({ apiError: error }));
}


onMounted(() => {
    // console.log('Component is mounted!', authStore.user)
})

</script>