/**
 * 一个模块的grid上面显示的toolbar,里面放置了各种操作按钮 暂时还没有考虑到权限
 */
Ext.define('app.view.module.region.GridToolbar', {
            extend : 'Ext.toolbar.Toolbar',
            alias : 'widget.gridtoolbar',
            uses : ['app.ux.GridSearchField'],
            initComponent : function() {
                this.items = [{
                            text : '显示',
                            glyph : 0xf022
                        }, {
                            text : '新增',
                            xtype : 'splitbutton',
                            glyph : 0xf016,
                            handler : 'addRecord',
                            menu : [{
                                        text : '复制新增',
                                        tooltip : '新增时先将当前记录添入到新记录中',
                                        glyph : 0xf0c5
                                    }, '-', {
                                        text : '上传Excel表单条新增',
                                        tooltip : '根据指定的excel表添好数据后，上传新增一条记录',
                                        glyph : 0xf062
                                    }, {
                                        text : '上传Excel表批量新增',
                                        tooltip : '根据下载的Excel表中的要求添加数据后，上传批量新增数据',
                                        glyph : 0xf062
                                    }]
                        }, {
                            text : '修改',
                            glyph : 0xf044
                        }, {
                            text : '删除',
                            glyph : 0xf014
                        }, '-', {
                            glyph : 0xf0c6,
                            xtype : 'splitbutton',
                            menu : [{
                                        text : '新增附件',
                                        icon : 'images/button/additionadd.png',
                                        glyph : 0xf093
                                    }, '-', {
                                        text : '预览所有附件',
                                        glyph : 0xf03e
                                    }, '-', {
                                        text : '下载所有附件',
                                        glyph : 0xf019
                                    }]
                        }, {
                            xtype : 'splitbutton',
                            glyph : 0xf0ce,
                            menu : [{
                                        text : '列表导出至excel',
                                        glyph : 0xf0ce
                                    }, '-', {
                                        text : '选中记录导出至excel',
                                        glyph : 0xf0ce
                                    }]
                        }, {
                            xtype : 'splitbutton',
                            glyph : 0xf02f,
                            menu : [{
                                        text : '打印当前页',
                                        glyph : 0xf02f
                                    }, {
                                        text : '打印所有记录',
                                        glyph : 0xf02f
                                    }]
                        }, '-', '筛选', {
                            width : 60,
                            xtype : 'gridsearchfield',
                            store : Ext.create('Ext.data.Store', {
                                        proxy : {
                                            type : 'rest'
                                        }
                                    })
                        }];
                        
                
                this.callParent();
            }
        })