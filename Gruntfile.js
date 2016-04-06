/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/4/5.
 */
module.exports=function(grunt){
    //1. 导入插件
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //2. 初始化任务
    grunt.initConfig({
        jshint:{
            a:{
                src:'src/js/a.js',
                dest:'dest/js/a.js'
            }
        }
    });

    //3. 注册默认任务
    grunt.registerTask('default',['jshint']);
};















