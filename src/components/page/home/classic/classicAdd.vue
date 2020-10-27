<template>
  <div>
      <el-form label-width="80px">
            <el-form-item label="标题">
              <el-input  placeholder="请填写标题"></el-input>
            </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="作者">
              <el-input  placeholder="请填写作者"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="类型">
              <!-- <el-select  placeholder="请选择类型">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select> -->
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否推荐" prop="delivery">
              <el-switch ></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="简介">
              <el-input  placeholder="请填写简介" type="textarea" :rows="4"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="背景图">
              <Uploader @uploadSuccess="uploadSuccess"/>
            </el-form-item>
          </el-col>
        </el-row>



        <el-form-item label="音乐地址">
          <el-input  placeholder="请填写音乐地址" v-model="url"></el-input>
        </el-form-item>
        <el-form-item label="详情">
          <VueEditor :height="600" @input="EditorInput"/>
        </el-form-item>
      </el-form>
      
  </div>
</template>

<script>
import VueEditor from "../../../common/VueEditor/VueEditor"
import Uploader from "../../../common/Uploader/Uploader"
export default {
  name:"classicAdd",
  data(){
    return{
        title:"",
        author:"",
        content:"",
        image:"",
        url:""
    }
  },
  components:{
      VueEditor,Uploader
  },
  created(){
    
  },
  methods:{
    // 编辑器输出的内容
      EditorInput(val){
        this.content = val
      },
      // 上传图片成功
      uploadSuccess(e){
        this.image = e
      }
  }
}
</script>

<style>

</style>