<template>
  <aside
    id="default-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 overflow-y-auto bg-white shadow-lg dark:bg-gray-800 pt-20">
      <ul class="space-y-2 font-medium">
        <li v-for="(item, i) in sidebarMenuItems" :key="i">
          <NuxtLink
            :to="item.route"
            exact-active-class="bg-gray-200"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <img
              class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              :src="item.icon"
              alt=""
            />
            <span class="ml-3">{{ item.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { sidebarMenuItems } from '~/helpers/sidebarMenuItems';
</script>
