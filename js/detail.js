$(document).ready(function() {

    // noinspection DuplicatedCode
    $.ajax({
        // url: '/data/book.json',
        url: 'https://api.virapi.com/vir_gitee43893a648h01f/hbuas/book_info',
        type: 'GET',
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "App-Token": "$2a$10$PhvcYmegSICmTnACH.Kd1OO8HK714Drv4jPTojkR0Hw3qhTdJ/B2u" // 设置对应虚拟接口应用请求Token
        },
        dataType: 'json',
        data: {
            name: "",
        },
        success: function(data) {
            // console.log(data.data.books[1].name);
            data = data.data;
            console.log(data.books[1].name)
            console.log(data.books[1].img)
                // console.log(data);
            for (let i = 0; i < data.books.length; i++) {

                let listHtml = '<div class="media">\n' +
                    '        <div class="media-left media-middle">\n' +
                    '            <a href="#">\n' +
                    '                <img class="media-object" src="' + data.books[i].img + '"alt="暂无图片">' +
                    '            </a>\n' +
                    '        </div>\n' +
                    '        <div class="media-body">\n' +
                    '            <h5 class="media-heading">\n' +
                    '                <table class="book_info">\n' +
                    '                    <tr>\n' +
                    '                        <th>\n' +
                    '                            <span>书名：</span>\n' +
                    '                        </th>\n' +
                    '                        <td>\n' +
                    data.books[i].name +
                    '                        </td>\n' +
                    '                        <th>\n' +
                    '                            <span>作者：</span>\n' +
                    '                        </th>\n' +
                    '                        <td>\n' +
                    data.books[i].author +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <th>\n' +
                    '                            <span>图书编号：</span>\n' +
                    '                        </th>\n' +
                    '                        <td>\n' +
                    data.books[i].serial +
                    '                        </td>\n' +
                    '                        <th>\n' +
                    '                            <span>藏书编号：</span>\n' +
                    '                        </th>\n' +
                    '                        <td>\n' +
                    data.books[i].number +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                    <tr>\n' +
                    '                        <th>\n' +
                    '                            <span>藏书位置：</span>\n' +
                    '                        </th>\n' +
                    '                        <td>\n' +
                    data.books[i].location +
                    '                        </td>\n' +
                    '                    </tr>\n' +
                    '                </table>\n' +
                    '            </h5>\n' +
                    '            <br>\n' +
                    '            <span><b> 图书简介：</b></span>\n' +
                    '            <p class="book_introduce">\n' +
                    data.books[i].Introduction +
                    '            </p>\n' +
                    '        </div>\n' +
                    '    </div>';
                // $(".media img").attr("src", data[i].img);
                $(".content").append(listHtml);

            }




        },
        error: function(err) {
            console.log(err);
        }


    });








});