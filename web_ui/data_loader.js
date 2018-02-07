function load_data()
{
    //DynamoDBからデータ(json)を取得
    var url = "https://t7hw7v6l5b.execute-api.ap-northeast-1.amazonaws.com/prod";
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader("x-api-key","MzP5oJqWoy72R2ElfEfbc62WpIE3ge8J6ItaoI3C");
    // request.onreadystatechange = function () {
    //     if (request.readyState != 4) {
    //         // リクエスト中
    //         console.log("request");
    //     } else if (request.status != 200) {
    //         // 失敗
    //         console.log("fail");
    //     } else {
    //         console.log("success");
    //     };
    // };
    request.send();
    var result = request.responseText;
    return JSON.parse(result);
}