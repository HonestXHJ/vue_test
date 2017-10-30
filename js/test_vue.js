var v_d1 = new Vue({
  el: '#d1',
  data: {
      num: 10,
      text: "It's d1",
      d2: "<div class='d2'>It's d2</div>"
  },
  methods: {
      reA: function (){
          return 'A';
      },
      d1Click: function (){
          this.text = "It's d1 (click)";
      }
  }
});

var v_d3 = new Vue({
  el: '#d3',
  data: {
      var_data:{
          re_num: '001'
      },
      num: '30',
      // reNum: '50' 和computed的函数命名重复的话会使其报错
      d4: "<div class='d4' v-on:click='setReNum'>It's d4</div>",
      d4_bg: {
          'bg-ccc': true,
          'bg-000': false 
      }
  },
  computed: {
      reNum: {
          get: function (){
              return this.num.split('').reverse().join('');
          },
          set: function (value){
              this.num = value.split('').reverse().join('');
          }
      }
  },
  methods: {
      reversedNum: function (){
          console.log('reversedNum doing');
          this.num = this.num.split('').reverse().join('');    
      },
      setReNum: function (event){
          event.cancelBubble = true; 
          console.log('setReNum doing');
          var re_num = this.var_data.re_num;
          this.var_data.re_num = (parseInt(this.var_data.re_num) + 1).toString();
          this.reNum = re_num;
          this.d4_bg = {
              'bg-ccc': false,
              'bg-000': true 
          }
      }
  }
});

var v_d5 = new Vue({
  el: '#d5',
  data: {
      question: '',
      classArr: ['bg-yellow']
  }
})

var v_d5 = new Vue({
  el: '#d6',
  data: {
      show: true,
      li_arr: ['0', '1', '2']
  },
  methods: {
      showHide: function (){
          this.show = !this.show;
      }
  }
})