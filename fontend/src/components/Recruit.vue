<template>
  <div class="about-wrapper">
    <h2 class="list-title">微客工作室 2016 秋季招新</h2>
    <div class="content">
      <div v-html="content">omg</div>
    </div>
    <div class="comment-form">
      <input v-model="name" class="comment-form-name" type="text" placeholder="姓名" maxlength="20">
      <input v-model="id" class="comment-form-name" type="text" placeholder="学号" maxlength="20">
      <input v-model="phone" class="comment-form-name" type="text" placeholder="电话" maxlength="20">
      <input v-model="position" class="comment-form-name" type="text" placeholder="岗位" maxlength="20">
      <input v-model="email" class="comment-form-name" type="text" placeholder="邮箱" maxlength="20">
      <textarea v-model="description" class="comment-form-content" name="" id="" cols="50" rows="15"
                placeholder="自我介绍，请自由发挥"></textarea>
      <div class="comment-item-reply-wrapper">
        <a @click="submit" class="comment-item-reply comment-item-reply-submit">投递</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import Prism from 'prismjs'
  import 'prismjs/themes/prism.css'
  import {getPost, updateHeadline, clearPost, submitResume} from '../vuex/actions'

  marked.setOptions({
    highlight: (code) => Prism.highlight(code, Prism.languages.javascript)
  })

  export default {
    data () {
      return {
        name: '',
        id: '',
        phone: '',
        email: '',
        position: '',
        description: ''
      }
    },
    vuex: {
      getters: {
        post: function ({post}) {
          return post
        }
      },
      actions: {
        getPost,
        clearPost,
        updateHeadline,
        submitResume
      }
    },
    created () {
      this.getPost('recruit')
      this.updateHeadline('招新')
    },
    beforeDestroy () {
      this.clearPost()
    },
    computed: {
      content: function () {
        return marked(this.post.content)
      }
    },
    methods: {
      submit () {
        let data = {
          name: this.name,
          id: this.id,
          position: this.position,
          phone: this.phone,
          email: this.email,
          description: this.description
        }
        // noinspection JSUnresolvedFunction
        this.submitResume(data)
        this.name = ''
        this.id = ''
        this.phone = ''
        this.email = ''
        this.position = ''
        this.description = ''
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

  .comment-item-reply-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  .comment-item-reply {
    padding: 1rem;
    transition: all .4s;
  }

  .comment-item-reply:hover {
    color: #838383;
    cursor: pointer;
  }

  .comment-reply-container {
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
    margin: 1rem;
    color: #7c7c7c;
  }

  .comment-reply-container .comment-item-title {
    background-color: #fbfbfb;
  }

  .comment-form {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
  }

  .comment-form-name, .comment-form-content {
    border: 1px solid #d2d2d2;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: .5rem;
  }

  .comment-form-name {
    height: 3.6rem;
  }

  .comment-form-content {
    resize: none;
  }

  .comment-item-reply-submit {
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
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
    font: 14px Consolas, "Liberation Mono", Menlo, Courier, monospace;
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
