<template>
  <div style="text-align: center">
    <slot name="message">
      <h1>Errors</h1>
    </slot>
    <slot name="navigation">
      <ul id="formControl">
        <li class="wd20">
          <button class="grayBtn" @click="$router.push('/')">
            <span class="material-icons">arrow_back_ios</span>HOME
          </button>
        </li>
        <li>
          <router-link to="/">
            <button class="grayBtn">Back To Home</button>
          </router-link>
        </li>
      </ul>
    </slot>
  </div>
</template>
