<template>
  <div style="text-align: center">
    <slot name="message">
      <h1>Success</h1>
    </slot>
    <slot name="navigation">
      <ul>
        <li>
          <ButtonCustom label="Home" class="my-5" @click="$router.push('/')" />
        </li>
        <li>
          <router-link to="/">
            <ButtonCustom label="Back to home" class="my-5" />
          </router-link>
        </li>
      </ul>
    </slot>
  </div>
</template>
