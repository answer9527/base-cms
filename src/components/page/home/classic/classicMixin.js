import VueEditor from "@/components/common/VueEditor/VueEditor"
import Uploader from "@/components/common/Uploader/Uploader"
import {ClassicModel} from "@/model/classic"
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
      components:{
          VueEditor,Uploader
      },
      created(){
        // console.log(this.$common.classicType)
      },
      methods:{
        // 编辑器输出的内容
          EditorInput(val){
            this.classic.content = val
          },
          // 上传图片成功
          uploadSuccess(e){
            this.classic.image = e
          },
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
          resetForm(refName){
            this.$refs[refName].resetFields();
          }
      }
}

export {
    classicMixin
}