<template/>
<div>
  <ul>
    <li>
      <p class="image" data-tip="Wechat" id="wechat" v-on:click="open('http://github.com/WecanStudio')"></p>
    </li>
    <li lwef="fef">
      <p class="image" data-tip="Repo" id="repo"
         v-on:click="open('http://github.com/WecanStudio/wecanstudio-site')"></p>
    </li>
    <li>
      <p class="image" data-tip="GitHub" id="github" v-on:click="open('http://github.com/WecanStudio')"></p>
    </li>
  </ul>
</div>
</template>

<script type="text/babel">
  export default {
    methods: {
      open: function (url) {
        window.open(url)
      }
    }
  }
</script>


<style scoped>
  ul {
    font-size: 1.4rem;
    margin: auto;
    font-family: 'Droid Sans', serif;
    color: #345e55;
  }

  li {
    float: left;
    width: 45px;
  }

  #repo {
    background: url(../../static/img/repo.png);
    background-size: 24px 24px;
  }

  #wechat {
    background: url(../../static/img/wechat.png);
    background-size: 24px 24px;
  }

  #github {
    background: url(../../static/img/github.png);
    background-size: 24px 24px;
  }

  .image::after {
    content: attr(data-tip);
    display: none;
    position: absolute;
    padding: 5px 10px;
    left: 50%;
    bottom: 100%;
    margin-bottom: 12px;
    transform: translateX(-50%);
    font-size: 16px;
    background: #000;
    color: #fff;
    cursor: default;
  }

  .image::before {
    content: " ";
    position: absolute;
    display: none;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
    margin-bottom: 3px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 9px solid #000;
  }

  .image:hover::after,
  .image:hover::before {
    display: block;
  }

  .image {
    width: 24px;
    display: block;
    background-size: contain;
    height: 24px;
    cursor: pointer;
    position: relative;
    font-size: 16px;
  }

</style>
