<template>
  <div class="recruit-wrapper">
    <div class="content">
      <div v-html="content">omg</div>
    </div>
    <div class="resume-form">
      <h3>我要报名</h3>
      <div>
        <multiselect
          :selected="selected"
          :options="options"
          @update="updateSelected">
        </multiselect>
      </div>
      <p></p>
      <input v-model="name" class="resume-form-name" type="text" placeholder="姓名" maxlength="20">
      <input v-model="id" class="resume-form-name" type="text" placeholder="学号" maxlength="20">
      <input v-model="phone" class="resume-form-name" type="text" placeholder="电话" maxlength="20">
      <input v-model="email" class="resume-form-name" type="text" placeholder="邮箱" maxlength="20">
      <textarea v-model="description" class="resume-form-content" rows="15"
                placeholder="自我介绍，请自由发挥"></textarea>
      <div class="submit-wrapper">
        <a @click="submit" class="resume-submit resume-submit-submit">投递</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import marked from 'marked'
  import {getPost, updateHeadline, clearPost, submitResume} from '../vuex/actions'
  import Multiselect from 'vue-multiselect'

  export default {
    components: {Multiselect},
    data () {
      return {
        selected: null,
        options: ['iOS', 'Android', 'Web 前端', 'Web 后端', '产品运营', 'UI / UX'],
        name: '',
        id: '',
        phone: '',
        email: '',
        position: 1,
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
      checkEmail () {
        const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
        return reg.test(this.email)
      },
      checkPhone () {
        const re = /^1\d{10}$/
        return re.test(this.phone)
      },
      submit () {
        if (!this.checkEmail()) {
          window.alert('邮箱格式不正确')
          return
        }
        if (!this.checkPhone()) {
          window.alert('手机号码不正确')
          return
        }
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
      },
      updateSelected (newSelected) {
        this.selected = newSelected
        this.position = newSelected
      }
    }
  }
</script>

<style>
  .recruit-wrapper {
    width: 80%;
    padding: 1rem;;
  }

  .recruit-wrapper a {
    color: #4078c0;
    display: block;
    transition: all .4s;
  }

  .recruit-wrapper a:hover {
    color: #80b2ff;
  }

  .recruit-wrapper p, .recruit-wrapper h2, .recruit-wrapper a {
    margin: 1rem auto;
  }

  .recruit-wrapper p {
    font-size: 1.8rem;
  }

  .recruit-wrapper a {
    font-size: 1.6rem;
  }

  .submit-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
  }

  .resume-submit {
    padding: 1rem;
    transition: all .4s;
  }

  .resume-submit:hover {
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

  .resume-form {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem;
  }

  .resume-form-name, .resume-form-content {
    border: 1px solid #d2d2d2;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: .5rem;
  }

  .resume-form-name {
    height: 3.6rem;
  }

  .resume-form-content {
    resize: none;
  }

  .resume-submit-submit {
    border: 1px solid #d2d2d2;
    border-radius: .5rem;
  }

  @media screen and (max-width: 768px) {
    .recruit-wrapper p {
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
