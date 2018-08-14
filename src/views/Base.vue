<template>
    <div class="box">
        <div v-html="html"></div>

        <div class="class">
            <div :class="className" class="norClass">动态class</div>
            <div :class="{className1:classList.isDisabled,className2:classList.isChecked}">多个class</div>
            <div :class="classList">class对象</div>
        </div>

        <div class="style">
            <div :style="{ fontSize: size + 'px' }">px</div>
		    <div :style="{ transform: rotateVar }">transform</div>
        </div>

        <div class="event">
            <button class="btn-normal bg-color-blue" @click="pay(size)">一键加油</button>
            <div @click.stop="doThis">禁止事件冒泡</div>
            <div @click.prevent="doThis">禁止默认事件</div>
            <div @click.capture="doThis">先触发自身事件,再触发冒泡事件</div>
            <div @click.self="doThat">只触发当前元素事件</div>
            <div @click.once="doThis">只触发一次</div>
            <div @scroll.passive="onScroll">滚动行为将会立即触发,不会等待onScroll完成</div>
        </div>

        <div class="if">
            <h1 v-if="sex===1">男</h1><!-- v-if|v-else-if|v-else必须是相邻元素 -->
            <h1 v-else-if="sex===3">不男不女</h1>
            <h1 v-else>女</h1>
        </div>
        <div class="show">
            <h1 v-show="sex===3">男</h1>
        </div>

        <div class="for">
            <ul>
                <li v-for="(item,index) in list" :class="{checked:index==0}" :key="index">{{item}}</li>
                <!-- item元素,index索引(可不写),list数组 -->
            </ul>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            html:"<h1>我是v-html</h1>",
            
            className:"title",
            classList:{
                isDisabled:true,
                isChecked:true
            },

            size:30,
            rotateVar:"rotate(120deg)",//:style绑定transform这种特殊的样式
            
            sex:3,

            list:[
                1,2,3,4,5
            ]
        }
    },
    methods:{
        pay(name){
            console.log(name)
        }
    }
}
</script>
<style lang="less" scoped>
@import url("../assets/css/common.less");
div{
    font-size: 0.3rem;
}
.title{
    color: @theme;
    .font-24
}
</style>
