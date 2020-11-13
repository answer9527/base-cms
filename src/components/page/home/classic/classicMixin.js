import VueEditor from "@/components/common/VueEditor/VueEditor"
import Uploader from "@/components/common/Uploader/Uploader"
import {ClassicModel} from "@/model/classic"
import {mapState,mapActions} from "vuex"
const classicMixin = {
    data(){
        return{
          classic:{
            title:"",
            is_recommend:false,
            recommend_time:null,
            intro:"",
            author:"",
            content:"",
            image:"",
            url:"",
            type:100
          },
          rules:{
            title:[
              { required: true, message: '请输入标题', trigger: 'blur' },
              { min: 3, message: '长度需大于3', trigger: 'blur' }
            ],
            image:[
              { required: true, message: '请上传图片', trigger: 'change' },
            ]
    
          }
    
        }
      },
      computed:{
        ...mapState(['player','playerStatus','playingAudio']),
        // 是否正在播放当前音乐
        playing(){
          if(this.playerStatus){
            return this.classic.url&&this.classic.url==this.playingAudio
          }else{
            return false
          }
        }
      },
      components:{
          VueEditor,Uploader
      },
      created(){

      },
      methods:{
        ...mapActions(["set_player_status","set_playing_audio"]),
        // 编辑器输出的内容
          EditorInput(val){
            this.classic.content = val
          },
          // 上传图片成功
          uploadSuccess(e){
            this.classic.image = e
          },
          // 提交表单
          submitForm(refName){
            this.$refs[refName].validate((valid)=>{
              if(valid){
                ClassicModel.insertClassic(this.classic).then(res=>{
                  this.$message.success(res.message)
                  this.resetForm(refName)
                })
              }else{
                return false
              }
            })
          },
          // 重置表单
          resetForm(refName){
            this.$refs[refName].resetFields();
          },
          // 播放或暂停
          playOrPause(){
            if(this.playing){
              this.player.pause()
              this.set_player_status(false)
            }else{

              if(this.playingAudio!=this.classic.url){
                this.player.src = this.classic.url
                this.set_playing_audio(this.classic.url)
              }
              this.set_player_status(true) 
              this.player.play()
              
            }
          }
      }
}

export {
    classicMixin
}