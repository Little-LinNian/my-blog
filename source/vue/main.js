var app = new Vue({
  el: '#qwq',
  data: {
    message: 'Hello Vue!'
  }
})
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '这个页面是由Vue驱动的'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var clicked_time = 0;
var app1 = new Vue({
  el: '#app-1',
  data: {
    message: '点击按钮让这些文字消失',
    msg: '点这里',
  },
  methods: {
    reverseMessage: function () {
      if (clicked_time == 0) {
        this.message = null
        this.msg = '点这里让文字出现'
      }
      else if (clicked_time > 0 && clicked_time % 2 != 0 && clicked_time < 20) {
        this.message = null
        this.msg = '点这里让文字出现'
      }
      else if (clicked_time > 0 && clicked_time % 2 == 0 && clicked_time < 20) {
        this.message = '文字又出现了'
        this.msg = '再次消失'
      }
      else if (clicked_time > 20) {
        this.msg = '点了太多次了，别点了'
      }
      clicked_time += 1;
    }
  }
})
new Vue({
  el: '#example-4',
  data: {
    message: '点击出现文字',
    show: false,
    show_msg: 'Owo'
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
      this.message = '再次点击消失'
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
      this.message = '点击再次出现文字'
    }
  }
})

var qwq_caidan = new Vue(
  {
    el: '#qwq-caidan',
    methods: {
      exit: function (){
        window.location.href="about:blank";
  window.close();
      }
    }
  }
)