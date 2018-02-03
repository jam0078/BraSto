
//DynamoDBからデータ(json)を取得
var url = "https://t7hw7v6l5b.execute-api.ap-northeast-1.amazonaws.com/prod"; // リクエスト先URL
var request = new XMLHttpRequest();
request.open('GET', url);
request.setRequestHeader('x-api-key','MzP5oJqWoy72R2ElfEfbc62WpIE3ge8J6ItaoI3C');
request.onreadystatechange = function () {
    if (request.readyState != 4) {
        // リクエスト中
        console.log("request");
    } else if (request.status != 200) {
        // 失敗
        console.log("fail");
    } else {
        console.log("success");
        // 取得成功
        var result = request.responseText;

    }
    var jsontext = JSON.stringify(result);
    console.log(jsontext);
    //var elem = document.getElementById("textarea1");
};
request.send();
//request.send(null);



//DynamoDBからデータ(json)を取得した前提
// var dbdata = {
//     "session_id": "example",
//     "slack_group": "example group",
//     "slack_channel": "example cannel",
//     "channel_members": [
//       {
//         "id": "member id 1",
//         "name": "member name 1"
//       },
//       {
//         "id": "member id 2",
//         "name": "member name 2"
//       }
//     ],
//     "latest_comments": [
//     {
//       "comment": "comment 1",
//       "member_id": "member id 1"
//     },
//     ],
//     "fixed_words": [
//       {
//         "score": 80,
//         "word": "fixed word 1"
//       },
//       {
//         "score": 30,
//         "word": "fixedword 2"
//       }
//     ],
//     "comments":[
//      {
//         "comment": "comment 2",
//         "member_id": "member id 1"
//       },
//       {
//         "comment": "comment 3",
//         "member_id": "member id 2"
//       }
//     ],
//     "volatile_words": [
//       {
//         "score": 50,
//         "word": "volatile word 1"
//       },
//       {
//         "score": 20,
//         "word": "volatile word 2"
//       },
//       {
//         "score": 10,
//         "word": "volatile word 3"
//       }
//     ],
//     "result": [
//       {
//         "content": "brasto result content 1",
//         "engine": "engine 1",
//         "used_words": [
//           "word 1",
//           "word 2",
//           "word 3"
//         ]
//       },
//       {
//         "content": "brasto result content 2",
//         "engine": "engine 2",
//         "used_words": [
//           "word 1",
//           "word 2"
//         ]
//       }
//     ]
//   };

//var a = score.fixed_words.data;
//console.log(a);


    function ObjectDataToJson() {
      var jsontext = JSON.stringify(text);
      var elem = document.getElementById("textarea1");
      elem.innerText = jsontext;
    }


//    setInterval("autoUpdate()", 呼び出し間隔（ミリ秒）)
setInterval("autoUpdate()", 1000)
function autoUpdate() {
  };

  //1秒ごとに関数を定期実行
  setInterval(function() {
    // console.log("hoge");
    console.log(jsontext.channel_members);
　　//console.log(dbdata.slack_group);
　　//console.log(dbdata.slack_channel)
    
// 　　function ObjectDataToJson() {
//     var jsontext = JSON.stringify(dbdata);
//     var elem = document.getElementById("textarea1");
//     elem.innerText = jsontext;

//     target1 = document.getElementById("slack-id");
//     target1.innerHTML = "Lion";
//   }

}, 1000);



