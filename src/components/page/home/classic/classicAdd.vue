<template>
  <div>
      <el-form label-width="80px" ref="classicForm" :model="classic" :rules="rules">
            <el-form-item label="标题" prop="title">
              <el-input  placeholder="请填写标题" v-model="classic.title"></el-input>
            </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="作者">
              <el-input  placeholder="请填写作者" v-model="classic.author"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="类型">
              <el-select  placeholder="请选择类型" v-model="classic.type">
                <el-option :label="item.label" :value="item.value" v-for="(item,index) in $common.classicType" :key="index"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否推荐">
              <el-switch v-model="classic.is_recommend"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="简介">
              <el-input  placeholder="请填写简介" type="textarea" :rows="4" v-model="classic.intro"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="背景图" prop="image">
              <Uploader @uploadSuccess="uploadSuccess" :imageSrc="classic.image"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="音乐地址">
          <el-input  placeholder="请填写音乐地址" v-model="classic.url"></el-input>
        </el-form-item>
        <el-form-item label="详情">
          <VueEditor :height="600" @input="EditorInput"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('classicForm')">立即创建</el-button>
          <el-button  @click="resetForm('classicForm')">重置</el-button>
        </el-form-item>
      </el-form>
      
  </div>
</template>

<script>
import VueEditor from "@/components/common/VueEditor/VueEditor"
import Uploader from "@/components/common/Uploader/Uploader"
import {ClassicModel} from "@/model/classic"
import {classicMixin} from "./classicMixin"
export default {
  name:"classicAdd",
  mixins:[classicMixin]
}
</script>

<style>

</style>