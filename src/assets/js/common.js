import Vue from "vue"

const formatTime=function(time_str,str="-",type=1){
    var time = new Date(time_str);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
  
    var result = ""
    switch (type) {
        case 2:
            result = y+str+add0(m)+str+add0(d);
            break;
        case 3:
            result = y+str+add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm);
            break;
        case 4:
          result = add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm);
          break;
        default:
            result = y+str+add0(m)+str+add0(d) +" "+add0(h)+":"+add0(mm)+":"+add0(s);
            break;
    }
    return result;
  
  }

  const classicType = [
      {
        "label":"电影",
        "value":100
      },
      {
        "label":"音乐",
        "value":200
      },
      {
        "label":"诗句",
        "value":300
      },
      {
        "label":"文章",
        "value":400
      },
      {
        "label":"故事",
        "value":500
      },
      {
        "label":"随记",
        "value":600
      },
  ]
  const add0=function(m){
    return m<10?'0'+m:m 
  }



export default{
    install(){
        Vue.prototype.$common ={
            formatTime,classicType
        }
    }
}