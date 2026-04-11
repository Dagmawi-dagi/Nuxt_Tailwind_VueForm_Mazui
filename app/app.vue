<script setup>
const { global_vue_easy_lightbox,any_open_modal } = useUtilStore()
const { onhide } = useLightBox()

</script>

<template>
    <NuxtLoadingIndicator/>
    
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <!-- <transition :name="'fadeIn'">
        <ModalBlogPost v-if="any_open_modal.bool && any_open_modal.id === 'blogModal'"  :blog-post="any_open_modal.AnythingTopass"/>
    </transition> -->

</template>
<style lang="scss">

</style>