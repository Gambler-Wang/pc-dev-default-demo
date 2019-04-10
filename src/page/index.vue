<template>
  <el-container>
    <el-header class="header">智慧社区组件演示示例</el-header>
    <el-container>
      <el-aside class="aside">
         <el-row>
          <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
        </el-row>
      </el-aside>
      <el-main class="main">
        <vTags/>
        <div class="content">
            <Title :name="name"/>
            <transition name="move" mode="out-in">
                <keep-alive :include="tagsList">
                    <router-view></router-view>
                </keep-alive>
            </transition>
          <!--改版前问题：<br>-->
          <!--1，前后端没有分离这样会导致开发效率低下，前端人员需依赖于后台搭建的框架进行开发，而且前端代码挤乱，会导致代码不方便维护，也不方便前端进行工程化；<br>-->
          <!--2，前端未工程化，工程化可以提高前端的生成效率，并且项目代码更容易维护，打包后的文件可以减少请求数，降低请求量。<br>-->
          <!--3，前端ui组件以及各种插件引入繁杂，导致页面很多地方组件之间相互影响，会产生很多非逻辑错误的bug，也不利于后期维护和需求变更后进行的第二次开发。<br>-->
          <!--改版说明，<br>-->
          <!--前端采用框架vue，主要组件element -ui,  前端工程化，前后后端分离的模式进行开发。<br>-->
          <!--本次准备工作将上一个版本使用到的组件统一展示出来：<br>-->
          <!-- Dashboard，面板 <br>-->
          <!-- 表格 <br>-->
          <!-- Tab选项卡 <br>-->
          <!-- 表单 <br>-->
          <!-- 图表 <br>-->
          <!-- 富文本编辑器 <br>-->
          <!-- 图片拖拽/裁剪上传 <br>-->
          <!-- 支持切换主题色 ✨ <br>-->
          <!-- 权限测试 <br>-->
          <!-- 404 / 403 <br>-->
          <!-- 三级菜单 <br>-->
          <!-- 自定义图标 <br>-->
          <!-- 可拖拽弹窗 <br>-->
          <!--二维码生成器 <br>-->
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import vTags from '../components/Tags.vue';
import Title from '../components/title.vue';
import bus from '../utils/bus.js';
export default {
    name: 'index',

    components:{
         vTags,Title
    },
    data () {
        return {
        tagsList: [],
        collapse: false,
        name:'',
        items: [
            {
                icon: 'el-icon-news',
                index: 'home',
                title: '系统首页'
            },
            // {
            //     icon: 'el-icon-tickets',
            //     index: 'table',
            //     title: '基础表格'
            // },
            // {
            //     icon: 'el-icon-more',
            //     index: 'tab',
            //     title: 'tab选项卡'
            // },
            // {
            //     icon: 'el-icon-document',
            //     index: '3',
            //     title: '表单相关',
            //     subs: [
            //         {
            //             index: 'form',
            //             title: '基本表单'
            //         },
            //         {
            //             index: '3-2',
            //             title: '编辑',
            //             subs: [
            //                 {
            //                     index: 'editor',
            //                     title: '富文本编辑器'
            //                 },
            //                 // {
            //                 //     index: 'markdown',
            //                 //     title: 'markdown编辑器'
            //                 // },
            //             ]
            //         },
            //         {
            //             index: 'upload',
            //             title: '文件上传'
            //         }
            //     ]
            // },
            // {
            //     icon: 'el-icon-rank',
            //     index: 'dialog',
            //     title: '弹出框'
            // },
            // {
            //     icon: 'el-icon-warning',
            //     index: 'message',
            //     title: '消息与通知提示'
            // },
            // {
            //     icon: 'el-icon-share',
            //     index: 'tree',
            //     title: '树组件'
            // },
            // {
            //     icon: 'el-icon-sort',
            //     index: 'transfer',
            //     title: '穿梭框'
            // },
            // {
            //     icon: 'el-icon-menu',
            //     index: 'qrcode',
            //     title: '二维码生成'
            // },
            // {
            //     icon: 'el-icon-picture',
            //     index: 'charts',
            //     title: 'chart图表'
            // },
            // {
            //     icon: 'el-icon-error',
            //     index: '10',
            //     title: '错误处理',
            //     subs: [
            //         {
            //             index: '404',
            //             title: '404页面'
            //         },
            //         {
            //             index: '403',
            //             title: '403页面'
            //         }
            //     ]
            // }
        ]
        }
    },
    methods: {

    },
    computed:{
        onRoutes(){
            return this.$route.path.replace('/','');
        }
    },
    created(){
        this.name=this.$route.meta.title+'示例';
        bus.$on('collapse', msg => {
            this.collapse = msg;
        })

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for(let i = 0, len = msg.length; i < len; i ++){
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
            this.name=this.$route.meta.title+'示例';
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
    .main{
        padding:0!important;
        background-color: #f0f0f0;
        overflow: hidden;
    }
    .main .content{
        padding: 0 10px;
        box-sizing: border-box;
        height: calc(100vh - 90px);
        overflow: auto;
    }
</style>
