// 获取明细表的行数
var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
var myArray=new Array();
// 行数的数组
if ( detailhanghao != ""){
myArray = detailhanghao.split(",");
}
for(j = 0,len=myArray.length; j < len; j++) {
  
    console.log(myArray[j]);
  
}
WfForm.bindDetailFieldChangeEvent("field5978",function(id,rowIndex,value){ 
  
          if( value == "60"){
            WfForm.changeFieldValue("field5933", {value:"1"});
          }
          if( value == "61"){
            WfForm.changeFieldValue("field5932", {value:"1"});
          }

 });

var gongzuoshu = 0;
var yusuanshu = 0;
// 获取明细表的行数
var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
var myArray=new Array();
// 行数的数组
if ( detailhanghao != ""){
myArray = detailhanghao.split(",");
}
for(j = 0,len=myArray.length; j < len; j++) {
  // 预算项目
  var yusuanxiangmu = WfForm.getFieldValue("field14707_"+ myArray[j]);
   if(yusuanxiangmu == "60"){
    gongzuoshu++;
   }
   if(yusuanxiangmu == "61"){
    yusuanshu++;
   }
  }

  if(gongzuoshu > 0){
    WfForm.changeFieldValue("field16883", {value:"1"});     
  }

  if(yusuanshu > 0){
    WfForm.changeFieldValue("field16883", {value:"1"});     
  }

 
<script>
    jQuery().ready(function(){
     WfForm.registerCheckEvent(WfForm.OPER_SAVE+","+WfForm.OPER_SUBMIT,function(callback){ 
       var count = 0;
      $(".wea-upload-list-item-filesize").children("span").each(   
        function(){ 
            if( $(this).text() == "0B"){
              count++;
            }
             } )    
              
               if(count > 0){
                       alert("上传附件为0B");
               }else{
                 callback();
               }
   
     })
    })
   </script>
   <script>
      jQuery().ready(function(){

   var det1 = WfForm.getFieldValue("field15752_0");
   if(det1 == "退货"){
    WfForm.changeFieldValue("field16664", {value:"退货"});   
   }

})


</script>


<script>
    jQuery().ready(function(){
     WfForm.registerCheckEvent(WfForm.OPER_SAVE+","+WfForm.OPER_SUBMIT,function(callback){ 
// 获取明细表的行数
var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
var myArray=new Array();
// 行数的数组
if ( detailhanghao != ""){
myArray = detailhanghao.split(",");
}
for(j = 0,len=myArray.length; j < len; j++) {
  var count = (j+1)*10;
  WfForm.changeFieldValue("field14415_" + myArray[j], {value:count}); 
}
callback();
})
})
</script>
// 价格类型为1时
if  ( WfForm.getFieldValue("field14831") == "1"){
  // 获取明细表的行数
var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
var myArray=new Array();
// 行数的数组
if ( detailhanghao != ""){
myArray = detailhanghao.split(",");
}
for(j = 0,len=myArray.length; j < len; j++) {
WfForm.changeFieldAttr("field14788_"+ myArray[j], 1);
WfForm.changeFieldAttr("field14823_"+ myArray[j], 1);
}


}
  jQuery().ready(function(){
      

      WfForm.bindFieldChangeEvent("field14831", function(obj,id,value){ 
      // 价格类型为1时
      if  (value == "1"){
            // 获取明细表的行数
      var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
      var myArray=new Array();
      // 行数的数组
      if ( detailhanghao != ""){
      myArray = detailhanghao.split(",");
      }
      for(j = 0,len=myArray.length; j < len; j++) {
        WfForm.changeFieldAttr("field14788_"+ myArray[j], 1);
        //WfForm.changeFieldAttr("field14823_"+ myArray[j], 1);
      }


      }


        // 价格类型为2时
        if  (value == "2"){
          // 获取明细表的行数
    var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
    var myArray=new Array();
    // 行数的数组
    if ( detailhanghao != ""){
    myArray = detailhanghao.split(",");
    }
    for(j = 0,len=myArray.length; j < len; j++) {
      WfForm.changeFieldAttr("field14788_"+ myArray[j], 3);
    //  WfForm.changeFieldAttr("field14823_"+ myArray[j], 1);
    }


    }

      });
})


$(".detailButtonDiv").mouseleave(function () {  

            // 价格类型为1时
        if  ( WfForm.getFieldValue("field14831") == "1"){
          // 获取明细表的行数
        var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
        var myArray=new Array();
        // 行数的数组
        if ( detailhanghao != ""){
        myArray = detailhanghao.split(",");
        }
        for(j = 0,len=myArray.length; j < len; j++) {
        WfForm.changeFieldAttr("field14788_"+ myArray[j], 1);
      //  WfForm.changeFieldAttr("field14823_"+ myArray[j], 1);
        }


}


  // 价格类型为1时
  if  ( WfForm.getFieldValue("field14831") == "2"){
    // 获取明细表的行数
  var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
  var myArray=new Array();
  // 行数的数组
  if ( detailhanghao != ""){
  myArray = detailhanghao.split(",");
  }
  for(j = 0,len=myArray.length; j < len; j++) {
  WfForm.changeFieldAttr("field14788_"+ myArray[j], 3);
//  WfForm.changeFieldAttr("field14823_"+ myArray[j], 1);
  }


}


})

WfForm.registerCheckEvent(WfForm.OPER_SAVE+","+WfForm.OPER_SUBMIT,function(callback){ 
  // 获取明细表的行数
   var detailhanghao = WfForm.getDetailAllRowIndexStr("detail_1");
   var myArray=new Array();
   // 行数的数组
   if ( detailhanghao != ""){
   myArray = detailhanghao.split(",");
   }
   var count = 0;
   var count2 = 0;
   for(j = 0,len=myArray.length; j < len; j++) {
    if(WfForm.getFieldValue("field16923_" +  myArray[j]) == "z1" ){
        var txtz1  = WfForm.getFieldValue("field14655_" +  myArray[j]);
        alert("物料号"+txtz1 +"已失效，请重新选择物料号");
        count++;
        break;

    };
    if(WfForm.getFieldValue("field16923_" +  myArray[j]) == "z3" ){
      var txtz3  = WfForm.getFieldValue("field14655_" +  myArray[j]);
    alert("物料号"+txtz3+"已冻结，请找财务处理，解冻后才可提交流程。");
    count++;
    break;
    };

   }
   
   if(count == 0 && count2 == 0){
      callback();
   }
})



// 明细行3控制一行数据
WfForm.registerCheckEvent(WfForm.OPER_SAVE+","+WfForm.OPER_SUBMIT,function(callback){ 
  if (WfForm.getFieldValue("field14544") == "4"){
     if ( WfForm.getFieldValue("field14517") == "3001" ){
           callback();
      }else{
        alert("当订单类型为非生产采购物资申请，所属公司必须是厦门基地工厂");
      }
                                                          
    
    
    }else{
      callback();
    }
    
   
})