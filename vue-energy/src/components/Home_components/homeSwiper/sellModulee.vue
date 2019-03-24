<template>
    <div id="main">
        <card> 
            <p slot="title">
                <Icon type="ios-list"></Icon>
                    消息记录
            </p>
            <Row class="search-row">
                <span>按消息ID搜索：</span>
                <Input v-model="searchMsgID" icon="search" @on-change="handleSearch1" placeholder="请输入消息ID搜索..." style="width: 150px" />
                <span style="margin-left:50px;">按消息主题搜索：</span>
                <Input v-model="searchMsgTopic" icon="search" @on-change="handleSearch1" placeholder="请输入消息主题搜索..." style="width: 150px"/>
            </Row>
            <Row type="flex" justify="center" align="middle" style="width:100%" class="advanced-router">
                <Modal v-model="deleteD" title="确认删除消息记录" @on-ok="ok" @on-cancel="cancel">
                        <p>您真的要从数据列表中删除该记录吗(删除后不会影响消息推送，但记录将无法恢复)</p>
                </Modal>
                <i-table  class="main-table" height="500" style="width:100%"  :columns="columns1" :data="data1"></i-table>
            </Row>
        </card>
    </div>
</template>
<style>
    #main{
        height: 100%;
    }
    .search-row{
        margin-bottom: 10px;
    }
    .main-table{
        width:100%;
    }
</style>

<script>
// import util from "../../libs/util.js";

    export default {
        data(){
            return{
                searchMsgID: '',
                searchMsgTopic: '',
                rowID:0,
                deleteD:false,
                data1: [],
                initTable1: [],
                deleteData:'',
                columns1: [
                    {
                        title: '推送ID',
                        key: 'message_id'
                    },
                    {
                        title: '主题',
                        key: 'message_topic'
                    },
                    {
                        title: '内容',
                        key: 'message_content'
                    },
                    {
                        title: '推送时间',
                        key: 'message_pshTime',
                        sortable: true
                    },
                    {
                        title: '推送状态',
                        key: 'message_status',
                        sortable: true
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click: () =>{
                                            this.rowID = params.index;
                                            this.deleteD = true;
                                        }
                                    }
                                }, '删除记录'),
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            init()  {
                this.initTable1 = this.data1;
                console.log(this.data1);
            },

            //加载数据列表
            handleList(){
            	for(let i = 0; i < 100; i++){
            		let a = {
            			message_id: i,
            			message_topic: i,
            			message_content: i,
            			message_pshTime: i,
            			message_status: i,
            		};
            		this.data1.push(a);
            	}
                // util.post("/sso/message/getAllMessage")
                // .then(response =>{

                    
                //     console.log("success"+response.data[0]);
                //     this.data1.push.apply(this.data1,response.data[0]);
                //     console.log(this.data1);
                // })
                // .catch(error =>{});
            },

            //查询
            search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
            },

             //处理搜索
            handleSearch1 () {
            this.data1 = this.initTable1;
            this.data1 = this.search(this.data1, {message_id: this.searchMsgID,message_topic: this.searchMsgTopic});
            },
            ok () {
                this.removeD(this.rowID);
            },

            removeD (index) {
                //暂时注释掉，以免删除重要数据信息

                // this.deleteData = this.data1[index].message_id;
                 //console.log(this.deleteData);
                // util.post("/sso/message/getdeleteMsg",this.deleteData)
                // .then(response =>{
                //     this.success ("删除成功");
                    
                // })
                // .catch(error =>{});
                this.data1.splice(index, 1);
            },

            //取消删除设备
            cancel () {
                //不做任何处理
            },
            success (data) {
                this.$Notice.success({
                    title: '成功',
                    desc: data
                });
            },
            error (nodesc,data) {
                this.$Notice.error({
                    title: '错误',
                    desc: nodesc ? '' : data
                });
            }
        },

        mounted () {
            this.init();
            this.handleList();
        },
        activated () {
            this.init();
            this.handleList();
        }        
    }

</script>

