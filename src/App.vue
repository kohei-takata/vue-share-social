<template>
  <div id="app">
    <ul>
      <li>
        <ShareFacebook
          size="l"
          type="circle"
          :elevation=1
          url="http://recruit.istyle.co.jp/career/"
        />
      </li>
      <li>
        <ShareTwitter
          size="l"
          type="circle"
          :elevation=1
          url="http://recruit.istyle.co.jp/career/"
          title="recruit page"
        />
      </li>
      <li>
        <ShareHatena
          size="l"
          type="circle"
          :elevation=1
          url="http://recruit.istyle.co.jp/career/"
          title="recruit page"
        />
      </li>
      <li>
        <ShareLine
          size="l"
          type="circle"
          :elevation=1
          url="http://recruit.istyle.co.jp/career/"
        />
      </li>
      <li>
        <ShareGooglePlus
          size="l"
          type="circle"
          :elevation=1
          url="http://recruit.istyle.co.jp/career/"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#app > ul {
  list-style: none;
  display: inline-block;
}
#app > ul li {
  float: left;
  margin: 0 5px;
}
</style>
