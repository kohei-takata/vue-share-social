# vue-share-social
[![Build Status](https://api.travis-ci.org/kohei-takata/vue-share-social.svg?branch=master)](https://travis-ci.org/kohei-takata/vue-share-social)

Social NetWorking Share Button Components on Vue.js.

## Usage

install
```bash
$ npm install vue-share-social
```
or
```bash
$ yarn add vue-share-social
```

※ Transpile Build And `node-sass`, `sass-loader` Required. (ex: webpack, babel)

### Add Plugin
```js
import Vue from 'vue'
import VueShareSocial from 'vue-share-social'

Vue.use(VueShareSocial)
```

or

### Use Component

#### Common Props

|props|default|description|
|:----|:----:|:----|
|url|current url|shared url|
|windowWidth|640|popup window width|
|windowHeight|640|popup window height|
|size|m|button size at s, m, l|
|type|circle|button type at circle, square, rounded|
|elevation|5|the height of the button shadow in the range of 1 to 10|

#### Twitter And Hatena Props
|props|default|description|
|:----|:----:|:----|
|title|-|shared title|

#### Pattern On Share Button
- Facebook Share
- Twitter Like
- GooglePlus Share
- Hatena Blog Share
- Line Like

```html
<template>
  <div>
    <ShareFacebook url="http://recruit.istyle.co.jp/career/"/>
    <ShareTwitter url="http://recruit.istyle.co.jp/career/"/>
    <ShareGooglePlus url="http://recruit.istyle.co.jp/career/"/>
    <ShareHatena url="http://recruit.istyle.co.jp/career/"/>
    <ShareLine url="http://recruit.istyle.co.jp/career/"/>
  </div>
</template>

<script>
import { ShareFacebook, ShareTwitter, ShareGooglePlus, ShareHatena, ShareLine } from 'vue-share-social'

export default {
  components: {
    ShareFacebook,
    ShareTwitter,
    ShareGooglePlus,
    ShareHatena,
    ShareLine
  }
}
</script>
```

## Credit
- [kohei-takata](https://github.com/kohei-takata)
- [kubotak-is](https://github.com/kubotak-is)

## License
MIT