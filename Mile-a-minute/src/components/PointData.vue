<template>
    <div class="info-window">
        <div>{{ title }}</div>
        <div>{{ content }}</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Default Title',
        },
        content: {
            type: String,
            default: 'Default Content',
        }
    }
}
</script>