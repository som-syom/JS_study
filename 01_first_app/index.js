$(document).ready(function() {
    // 브라 우저가 HTML을 전부 불러왔는지 확인
    'use strict'; // 인터프리터에서 코드를 더 엄격하게 처리하라는 뜻
    // 캔버스 설치
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    // 그림그리는 곳
            //원 하나만 그리기
        // var c = Shape.Circle(200, 200, 50);
        //         // circle (x좌표, y좌표, 크기)
        // c.fillColor = 'green';
            //원 바둑판식으로 그리기
        // var c;
        // for(var x=25; x<400; x+=50) {
        //     for(var y=25; y<400; y+=50) { 
        //         c = Shape.Circle(x, y, 20);
        //         c.fillColor = 'green';
        //     }
        // }
            // 텍스트 넣기
        var c = Shape.Circle(200, 200, 80);
        c.fillColor = 'black';
        var text = new PointText(200, 200);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 20;
        text.content = 'hello world';
            // 사용자 입력으로 원그리기
        var tool = new Tool();
        tool.onMouseDown = function(event) {
            var c = Shape.Circle(event.point.x, event.point.y, 20);
            // 짧은버전
            // var c = Shape.Circle(event.point, 20);
            c.fillColor = 'green';
        };
    //
    paper.view.draw();
    //
    console.log('main.js loaded');
});
