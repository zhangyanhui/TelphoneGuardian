// index.js


Page({
  data: {  
    success: true,  
    data: [  
      {
        "name" : "360手机卫士",
        "msg" : "暂无结果"
      },
      {
        "name" : "搜狗号码通",
        "msg" : "暂无结果"
      },
      {
        "name" : "百度手机卫士",
        "msg" : "暂无结果"
      }
    ],  
    info: {  
      province: "**省",  
      city: "**市",  
      operator: "移动/联通/电信"  
    },  
    tel: "188*********"  
  }  
  ,
  formsubmit(e) {
    var a = this;
    const phone = e.detail.value.phone
    console.log("phone", phone);
    wx.request({
      url: 'https://shanhe.kim/api/za/saorao.php', // 确保使用HTTPS
      method: 'GET', // 或 'POST' 根据API要求
      data: {
        // 根据API要求传递参数
        tel: phone,
      },
      success(res) {
        if(res.data.success==true){
// 处理成功响应
          console.log(res.data);
          a.setData({
            data: res.data.data,
            info: res.data.info,
            tel: res.data.tel
          });
        }else{
          wx.showToast({
            title: res.data.message,
            icon: "none",
            duration: 5e3
          });
        }
        
       
        
      },
      fail(err) {
        // 处理失败情况
        wx.showToast({
          title: err,
          icon: "none",
          duration: 5e3
        });
        console.error(err);
      }
    });
    
    
   
    

  },
 
})
