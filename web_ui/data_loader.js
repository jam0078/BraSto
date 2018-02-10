function load_data()
{
    //DynamoDBからデータ(json)を取得
    var url = "https://t7hw7v6l5b.execute-api.ap-northeast-1.amazonaws.com/prod";
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.setRequestHeader("x-api-key","MzP5oJqWoy72R2ElfEfbc62WpIE3ge8J6ItaoI3C");
    request.send();
    var result = request.responseText;
    return JSON.parse(result);
}