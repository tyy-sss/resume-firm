<template>
    <div class="turn-user-information">
        <div class="point"></div>
        <div class="name" v-if="data.name !== null">{{ data.name }}:</div>
        <div class="value">{{ data.value }}</div>
    </div>
</template>
<script setup>
const props = defineProps({ data: Object })
const data = props.data;
</script>
<style scoped>
.turn-user-information{
    display: flex;
    justify-content: center;
    align-items: center;
}
.turn-user-information > div{
    margin: 5px;
    word-break: keep-all;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.point{
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: rgb(79,146,255);
}
.name{
    color: #89909e;
}
.value{
    color: rgba(0, 0, 0, 0.85);
}
</style>