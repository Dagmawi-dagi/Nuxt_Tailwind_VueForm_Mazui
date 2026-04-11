<script setup lang="ts">

</script>

<template>
    <nav>
        <img src="../../assets" alt="Logo" width="100" height="50" />
        
        <NuxtLink to="/">home</NuxtLink>
        <NuxtLink to="/aboutUs">about us</NuxtLink>
        <NuxtLink to="/contactUs">contact us</NuxtLink>
    </nav>
</template>

<style>
nav {
    display: flex;
    gap: 20px;
    padding: 20px;
    background-color: #333;
    
    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>