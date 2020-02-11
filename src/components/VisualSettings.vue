<template>
    <div id="settings-project">
        <v-btn outlined @click="change">DarkMode / LightMode</v-btn>
    </div>
</template>

<script>
    export default {
        name: 'settings-project',
        methods: {
            change() {
                this.$emit('changeMode', true)
            }
        }
    }
</script>

<style scoped>
    
</style>