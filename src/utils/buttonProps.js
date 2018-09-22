import { defaultHref } from './defaultHref.js'
import { size, type } from './enums.js'

export default {
  props: {
    url: {
      type: String,
      default: defaultHref
    },
    windowWidth: {
      type: Number,
      default: 640
    },
    windowHeight: {
      type: Number,
      default: 640
    },
    size: {
      type: String,
      default: size.m
    },
    type: {
      type: String,
      default: type.circle
    },
    elevation: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      btnClass: {
        's': this.size === size.s,
        'm': this.size === size.m,
        'l': this.size === size.l,
        'circle': this.type === type.circle,
        'square': this.type === type.square,
        'rounded': this.type === type.rounded
      },
      btnStyle: {
        width: '25px',
        height: '25px',
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'content-box'
      }
    }
  },
  created () {
    this.setSize()
    this.setType()
    this.setElevation()
  },
  methods: {
    setSize () {
      switch (this.size) {
        case size.m:
          this.btnStyle.width = '35px'
          this.btnStyle.height = '35px'
          break
        case size.l:
          this.btnStyle.width = '45px'
          this.btnStyle.height = '45px'
          break
      }
    },
    setType () {
      switch (this.type) {
        case type.circle:
          this.btnStyle.borderRadius = '50%'
          break
        case type.rounded:
          this.setRoundedType()
          break
      }
    },
    setRoundedType () {
      switch (this.size) {
        case size.m:
          this.btnStyle.borderRadius = '4px'
          break
        case size.l:
          this.btnStyle.borderRadius = '5px'
          break
        default:
          this.btnStyle.borderRadius = '3px'
      }
    },
    setElevation () {
      switch (this.elevation) {
        case 1:
          this.btnStyle.boxShadow = `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`
          break
        case 2:
          this.btnStyle.boxShadow = `0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)`
          break
        case 3:
          this.btnStyle.boxShadow = `0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)`
          break
        case 4:
          this.btnStyle.boxShadow = `0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)`
          break
        case 5:
          this.btnStyle.boxShadow = `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)`
          break
        case 6:
          this.btnStyle.boxShadow = `0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)`
          break
        case 7:
          this.btnStyle.boxShadow = `0px 4px 5px -2px rgba(0,0,0,0.2), 0px 7px 10px 1px rgba(0,0,0,0.14), 0px 2px 16px 1px rgba(0,0,0,0.12)`
          break
        case 8:
          this.btnStyle.boxShadow = `0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)`
          break
        case 9:
          this.btnStyle.boxShadow = `0px 5px 6px -3px rgba(0,0,0,0.2), 0px 9px 12px 1px rgba(0,0,0,0.14), 0px 3px 16px 2px rgba(0,0,0,0.12)`
          break
        case 10:
          this.btnStyle.boxShadow = `0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)`
          break
      }
    }
  }
}
