<template>
    <div class="turn-progress-information">
        <div v-if="data.title !== null" class="title">
            {{ data.title }}
        </div>
        <div class="information" v-for="(item,index) in data.list" :key="index">
            <div class="name">{{ item.name }}:</div>
            <div class="value">{{ item.value }}</div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ data:Object })
const data = props.data;
</script>
<style scoped>
.turn-progress-information{
    padding-bottom: 20px;
}
.title{
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: flex-end;
}

.information{
    display: flex;
    padding: 5px;
}
.information > div{
    margin-right: 5px;
}
.name{
    color: #89909e;
}
.value{
    width: 600px;
    word-break: break-all;
    word-wrap: break-word;
    white-space: normal;
}
</style>