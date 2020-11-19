import {LetterModel} from "@/model/letter"
const letterMixin = {
    data(){
        return{
            start:0,
            total:0,
            page:1,
            size:6,
            keyword:"future",
            list:[],
            show_bg:true
        }
    },
    created(){
        this.get_letter_list()
    },
    methods:{
        get_letter_list(){
            let params ={
                "page":this.page,
                "size":this.size,
                "keyword":this.keyword
            }
            LetterModel.getLetterList(params).then(res=>{
                this.list = res.data.list
                this.total = res.data.total
            })
        },
        change_page(e){
            this.page = e
            this.get_letter_list()
        },
        close_bg(){
            this.show_bg = false
        },
        show_letter_detail(id){
            LetterModel.getPublicLetterById(id).then(res=>{
                console.log(res)
            })
        }
    }
}

export{
    letterMixin
}