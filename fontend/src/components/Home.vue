<style>

.list-container li {
    border-bottom: 1px solid #eee;
}

.list-title {
    font-size: 2.6rem;
    font-weight: 400;
    color: #404040;
    margin-top: 0;
}

.list-abstract {
    font-size: 1.6rem;
    color: #919191;
    font-weight: 300;
}

.list-updated {
    font-family: "Comic Sans MS", curslve, sans-serif;
    font-size: 1.8rem;
    color: #8b8b8b;
    padding: 5px 0;
}

.list-container li a {
    padding: 1rem 1.5rem;
    display: block;
    transition: all .3s;
    margin: 0;
}

.list-container li a:hover {
    background-color: Rgba(0, 0, 0, .02);
}

@media screen and (max-width: 768px) {
    .list-title {
        font-size: 2.2rem;
    }
    .list-updated {
        font-size: 1.6rem;
    }
}

</style>

<template>

<div class="list-wrapper">
    <ul class="list-container" id="list-ul">
        <li v-for="item in items">
            <a v-link="{ name: 'article', params: {id: item.objectId}}">
                <p class="list-title">{{item.title}}</p>
                <p class="list-updated">{{item.createdAt}}</p>
                <p class="list-abstract">{{item.abstract}}</p>
            </a>
        </li>
    </ul>
</div>

</template>

<script type="text/babel">

// 需要两个 actions
import {
    getAllPosts, updateHeadline
}
from '../vuex/actions'

export default {
    vuex: {
        // 请留意 vuex 的这个特殊选项（译注：getters 子对象）。
        // 它是我们指定当前组件能从 store 里获取哪些状态信息的地方。
        // 它的每个属性名将对应一个 getter 函数。
        // 该函数仅接收 store 的整个状态树作为其唯一参数，之后既可以返回状态树的一部分，也可以返回从状态树中求取的计算值。
        // 而返回结果，则会依据这个 getter 的属性名添加到组件上，用法与组件自身的计算属性一毛一样。
        getters: {
            // 数据绑定，数据更新时视图同步更新
            // 该 getter 函数将会把仓库的 `store.posts` 绑定为组件的 `this.items`
            items: function(posts) {
                return posts
            }
        },
        actions: {
            getAllPosts: getAllPosts,
            updateHeadline: updateHeadline
        }
    },
    // 生命周期的方法，在创建的时候就调用这两个函数
    created() {
        // 只获取普通分类下的文章，因为目前只有这个分类
        this.getAllPosts('normal')
        this.updateHeadline('啦啦啦')
    }
}

</script>
