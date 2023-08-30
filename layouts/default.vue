<template>
  <MainLayoutNavbar />
  <MainLayoutSidebar />

  <div class="p-4 sm:ml-64">
    <div class="p-4 mt-14">
      <MainLayoutBreadcrumb />
      <div class="mt-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

onMounted(() => initFlowbite());
</script>
