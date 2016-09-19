<template>
  <div class="comment">
    <h2>所有评论</h2>
    <ul class="comments-list">
      <li class="comment-item" v-for="item in comments">
        <div class="comment-item-title">
          <p class="comment-item-name">{{ item.name }}</p>
          <p class="comment-item-createdAt">{{item.time}}</p>
        </div>
        <p class="comment-item-content">{{ item.content }}</p>
      </li>
    </ul>
    <h2 id="comment-form-title">发表评论</h2>
    <div class="comment-form">
      <input v-model="formName" class="comment-form-name" type="text" placeholder="昵称" maxlength="20">
      <!--suppress CheckTagEmptyBody -->
      <textarea v-model="formContent" class="comment-form-content" name="" id="" cols="30" rows="10"
                placeholder="内容"></textarea>
      <div class="comment-item-reply-wrapper">
        <a @click="submit" class="comment-item-reply comment-item-reply-submit">提交</a>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import {submitComment} from '../vuex/actions'

  export default {
    data () {
      return {
        formName: '',
        formContent: '',
        title: this.$route.params.title
      }
    },
    vuex: {
      actions: {
        submitComment: submitComment
      },
      getters: {
        comments: function ({post}) {
          return post.comments
        }
      }
    },
    methods: {
      submit () {
        if (!this.formName.trim() || !this.formContent.trim()) {
          window.alert('昵称和内容均不可为空')
          return
        }
        const data = {
          name: this.formName,
          category: 'normal',
          content: this.formContent,
          title: this.title
        }
        // noinspection JSUnresolvedFunction
        this.submitComment(data)
        this.formName = ''
        this.formContent = ''
      }
    }
  }
</script>

<style>
  .comment h1 {
    border-bottom: 1px dashed #d2d2d2;
    margin: 1rem;
  }

  .comment-item {
    display: flex;
    flex-flow: column wrap;
    justify-items: center;
  }

  .comment-item-title {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding: .5rem 1rem;
    border-radius: .5rem;
  }

  .comment-item-name {
    font-weight: bold;
  }

  .comment-item-content {
    padding: 1rem;
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

</style>
