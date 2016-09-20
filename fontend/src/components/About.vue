<template>
  <div class="about-wrapper">
    <div class="content">
      <div v-html="content">omg</div>
    </div>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
  import {getPost, updateHeadline, clearPost} from '../vuex/actions'

  marked.setOptions({
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
  })

  export default {
    vuex: {
      getters: {
        post: function ({post}) {
          return post
        }
      },
      actions: {
        getPost,
        clearPost,
        updateHeadline
      }
    },
    created () {
      this.getPost('about')
      this.updateHeadline('关于')
    },
    beforeDestroy () {
      this.clearPost()
    },
    computed: {
      content: function () {
        return marked(this.post.content)
      }
    }
  }
</script>

<style>
  .about-wrapper {
    width: 80%;
    padding: 1rem;;
  }

  .about-wrapper a {
    color: #4078c0;
    display: block;
    transition: all .4s;
  }

  .about-wrapper a:hover {
    color: #80b2ff;
  }

  .about-wrapper p, .about-wrapper h2, .about-wrapper a {
    margin: 1rem auto;
  }

  .about-wrapper p {
    font-size: 1.8rem;
  }

  .about-wrapper a {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 768px) {
    .about-wrapper p {
      font-size: 1.6rem;
    }
  }

  .content {
    margin: 2rem 1rem;
    display: flex;
  }

  .content pre {
    padding: 1rem;
    font: 14px consolas, "liberation mono", menlo, courier, monospace;
    background-color: #f7f7f7;
    white-space: pre-wrap;
    overflow: auto;
    max-width: 800px;
  }

  .content code {
    font: inherit;
  }

  .content table {
    border-collapse: collapse;
  }

  .content td, .post th {
    border: 1px solid #ddd;
    padding: .3rem .6rem;
  }

  .content tbody tr:nth-child(2n+1) {
    background-color: #f7f7f7;
  }

  .content a {
    color: #4078c0;
    transition: all .4s;
  }

  .content a:hover {
    color: #80b2ff;
  }

  .content img, .post code {
    max-width: 100%;
  }

  .content h1, .post h2 {
    border-bottom: 1px solid #d2d2d2;
    margin: 1rem 0;
  }

  .content ul {
    padding-left: 2rem;
  }

  .content li {
    list-style: disc;
  }

  .content p, .post {
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, .8);
  }

  .content blockquote {
    padding: 0 1.5rem;
    margin: 0;
    color: #777;
    border-left: 4px solid #ddd;
  }

  @media screen and (max-width: 768px) {
    .content {
      padding: 1rem;
      margin: 0;
      font-size: 1.4rem;
    }

    .content h1 {
      font-size: 2.4rem;
    }

    .content h2 {
      font-size: 2.2rem;
    }

    .content h3 {
      font-size: 2rem;
    }

    .content pre {
      font-size: 1.2rem;
    }
  }
</style>

