/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/4/5.
 */
module.exports=function(grunt){
    //1. 导入插件
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //2. 初始化任务
    grunt.initConfig({
        uglify:{
            a:{
                options:{
                    mangle:false
                },
                src:'src/a.js',
                dest:'dest/a.js'
            },
            b:{
                src:'src/jquery.js',
                dest:'dest/jquery.js'
            }
        }
    });
};
