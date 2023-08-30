<template>
  <nav
    class="fixed top-0 z-50 w-full shadow-md bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <MainLayoutNavbarButtonSidebar />
          <NuxtLink to="/" class="flex ml-2 md:mr-24">
            <img src="~/assets/images/b_vision.png" class="h-8 mr-3" alt="Barbero Joyas Logo" />
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-10 h-10 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="user photo"
                />
              </button>
            </div>
            <MainLayoutNavbarUserMenu />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
