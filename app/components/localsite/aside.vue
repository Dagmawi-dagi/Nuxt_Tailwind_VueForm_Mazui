<script setup>
// stores
import { storeToRefs } from 'pinia';
//vue
const { sideBarOpen } = storeToRefs( useUtilStore())
const { loggedInUser } = storeToRefs( useAuthStore())
const { tablet,mobilePhone } = useBreakPoint()

const  active_acc  = ref()
const sideBarNavs = ref([

  {
    "role": 'admin',
    "routes" : [
      {
        "name": "users",
        "route_name": "users",
      }
    ]
  },
  {
    "role": 'general',
    "routes" : [
      {
        "name": "vacancy",
        "sub_routes":[
          {
            "name": "posted vacancies",
            "route_name": "vacancies",
          },
          {
            "name": "vacancy applications",
            "route_name": "vacancy applications",
          },
        ]
      },
      {
        "name": "blog",
        "route_name": "blogs",
      },
      {
        "name": "newsletter",
        "sub_routes":[
          {
            "name": "subscriptions",
            "route_name": "newsletterSub",
          },
          {
            "name": "letters",
            "route_name": "newsletters",
          },
        ]
      },
    ]
  },
])
</script>

<template>
    <div class="bg-white dark:bg-gray-800 container" :class="{ position:  tablet || mobilePhone , open: sideBarOpen, close: !sideBarOpen  }"  >
      <div class="userContainer" >
          <MazAvatar :src="`/users/${loggedInUser?.avatar}`" 
          :caption="loggedInUser?.userName"
          size=".8rem"
          clickable
          loading="eager"
          @click="$router.push({name:'userProfile'})"
          />
          <img src="" alt="">
          <div class="user" >
            <span>{{loggedInUser?.email}}</span>
            <span> {{loggedInUser?.userName}} </span>
            <!-- <span> {{loggedInUser}} </span> -->
          </div>
      </div>
      <br>
      <br>
        <ReusableAccordion v-for="(obj, i) in sideBarNavs" :key="i" 
          :id="`${i}`"
          :items='obj.routes' 
          :head="obj.role"
          :accordion_open="active_acc === obj.role"
          :border="true"
          :toggler_icon="false" 
          :sub_ref="'sub_routes'"
          :item_ref="'name'"
          @accActive="active_acc === obj.role ? active_acc = '' :  active_acc = $event" 
          @handleAccChoice="$router.push({name: $event.route_name})"
        />
  <div class="maz-bg-background p-8 maz-text-foreground">
    <!-- Components are auto-imported -->
     asdasdasd sd asd
    <MazBtn color="primary" >
      asdasd
    </MazBtn>

   </div> 
    </div>

    <div class="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <button>asdasd asdasd</button>
        </span>
      </div>
      <h3 class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
      <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>  

    <span class="sideNavToggler"  @click="sideBarOpen = !sideBarOpen"  >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
      </svg>
    </span>



</template>

<style lang="scss" scoped>
@use '/assets/style/scss/localsite/sideBar.scss' as *;
</style>