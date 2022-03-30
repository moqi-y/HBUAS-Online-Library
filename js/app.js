// function AjaxSubmit() {
//     $.ajax({
//         url: "https://api.vvhan.com/api/weather",
//         dataType: "json",
//         type: "get",
//         data: {
//             city:'襄阳',
//         },
//         success: function (res) {
//             console.log("发送成功！");
//             console.log(res);  //在console中查看数据
//         },
//         error: function (err) {
//             console.log("错误代码：");
//             console.log(err);
//         },
//     });
//
// }

// ajax发送数据函数
function AjaxSubmit(submit_url, data) {
    $.ajax({
        // "https://api.vvhan.com/api/weather"
        url: "https://api.vvhan.com/api/weather",
        type: 'GET',
        dataType: "json",
        data: {
            city: "襄阳",
        },
        success: function(success) {
            console.log("发送成功！");
            console.log(success.info.type);
            alert(success.info.type)
        },
        error: function(error) {
            console.log(error);
        }
    });
}

$(document).ready(function() {
    $.ajax({
        // url: '/data/book.json',
        url: 'https://api.virapi.com/vir_gitee43893a648h01f/hbuas/book_info',
        type: 'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "App-Token": "$2a$10$PhvcYmegSICmTnACH.Kd1OO8HK714Drv4jPTojkR0Hw3qhTdJ/B2u" // 设置对应虚拟接口应用请求Token
        },
        dataType: 'json',
        data: {},
        success: function(data) {
            // console.log(data.data.books[1].name);
            data = data.data;
            // console.log(data);
            for (let i = 0; i < 8; i++) {

                let hotList = '<div  class="col-sm-3 col-md-3 col-xs-6">\n' +
                    '            <div class="thumbnail">\n' +
                    '                <img src="http://www.hbuas.edu.cn/__local/7/A4/D3/DF74EB1D55471133077FC89AC10_944BCAF5_10A08.jpg" alt="图片加载失败">\n' +
                    '                <div class="caption">\n' +
                    '                    <h3><span>《</span>\n' +
                    '                        <span>' + data.books[i].name + '</span>\n' +
                    '                        <span>》</span></h3>\n' +
                    '                    <h4><span>作&nbsp;&nbsp;&nbsp;&nbsp;者：</span><span>' + data.books[i].author + '</span>\n' +
                    '                        <br>\n' +
                    '                        <span>藏书点：</span><span>' + data.books[i].location + '</span>\n' +
                    '                    </h4>\n' +
                    '                    <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>'
                $(".hotListContainer").append(hotList);

            }


        },
        error: function(err) {
            console.log(err);
        }


    });


});