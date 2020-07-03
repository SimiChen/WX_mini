Page({
  data:{
    output: 500,
    inputValue: 0,
    result: ""
  },

  onShow: function(){
    
    console.log(getApp().globalData.level)
    var level = getApp().globalData.level
    var random_num = Math.floor(Math.random() * level)
    this.setData({
      output: random_num,
      result: ""
    })
    console.log(random_num)
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  }, 

  guess: function(event){
    var out = this.data.output
    var inp = this.data.inputValue
    var rus
    console.log(out)
    console.log(inp)

    if (out > inp){
      rus = "larger"
    }else if(out < inp){
      rus = "smaller"
    }else{
      rus = "success!"
    }

    this.setData({
      result: rus
    })
  }

})