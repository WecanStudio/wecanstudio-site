<style>

.post {
    margin: 2rem 1rem;
    display: flex;
}

.post pre {
    padding: 1rem;
    font: 14px Consolas, "Liberation Mono", Menlo, Courier, monospace;
    background-color: #f7f7f7;
    white-space: pre-wrap;
    overflow: auto;
    max-width: 800px;
}

.post code {
    font: inherit;
}

.post table {
    border-collapse: collapse;
}

.post td,
.post th {
    border: 1px solid #ddd;
    padding: .3rem .6rem;
}

.post tbody tr:nth-child(2n+1) {
    background-color: #f7f7f7;
}

.post a {
    color: #4078c0;
    transition: all .4s;
}

.post a:hover {
    color: #80b2ff;
}

.post img,
.post code {
    max-width: 100%;
}

.post h1,
.post h2 {
    border-bottom: 1px solid #d2d2d2;
    margin: 1rem 0;
}

.post ul {
    padding-left: 2rem;
}

.post li {
    list-style: disc;
}

.post p,
.post li {
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, .8);
}

.post blockquote {
    padding: 0 1.5rem;
    margin: 0;
    color: #777;
    border-left: 4px solid #ddd;
}

@media screen and (max-width: 768px) {
    .post {
        padding: 1rem;
        margin: 0;
        font-size: 1.4rem;
    }
    .post h1 {
        font-size: 2.4rem;
    }
    .post h2 {
        font-size: 2.2rem;
    }
    .post h3 {
        font-size: 2rem;
    }
    .post pre {
        font-size: 1.2rem;
    }
}

</style>

<template>

<div>
    <div class="post">
        <div v-html="content">thie will be replace by content </div>
    </div>
</div>

</template>

<script type="text/babel">

import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import {
    post
}
from '../vuex/getters'
import {
    getPost, updateHeadline, clearPost
}
from '../vuex/actions'

marked.setOptions({
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
})

export default {
    vuex: {
        getters: {
            post: post
        },
        actions: {
            getPost,
            clearPost,
            updateHeadline
        }
    },
    created() {
        this.getPost(this.$route.params.category, this.$route.params.title)
    },
    beforeDestroy() {
        this.clearPost()
    },
    computed: {
        content: function() {
            this.updateHeadline(this.post.title)
            let postContent = this.post.content
            marked(postContent, function(err, content) {
                if (!err) {
                    postContent = content
                }
            })
            return postContent
        }
    }
}

</script>
