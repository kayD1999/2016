/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/4/5.
 */
module.exports=function(grunt){
    //1. 导入插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //2. 初始化任务
    grunt.initConfig({
        uglify:{
            a:{
                options:{
                    mangle:false
                },
                src:'src/js/a.js',
                dest:'dest/js/a.js'
            },
            b:{
                src:'src/js/jquery.js',
                dest:'dest/js/jquery.js'
            }
        },
        cssmin:{
            a:{
                src:'src/css/index.css',
                dest:'dest/css/inde.css'
            }
        },
        htmlmin:{
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            a:{
                src:'src/index.html',
                dest:'dest/index.html'
            }
        },
        watch:{
            html:{
                files:['src/index.html'],
                tasks:['htmlmin']
            },
            css:{
                files:['src/css/*.css'],
                tasks:['cssmin']
            }
        }
    });

    //3. 注册默认任务
    grunt.registerTask('default',['uglify','cssmin','htmlmin','watch']);
};















