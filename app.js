// 경로를 생략하면 http라는 글로벌 모듈을 찾는다.
const http = require('http');

const server = http.createServer( (req, res) => {
	console.log(req.url, req.method , req.headers	);
	console.log("req.url : " + req.url);
	console.log("req.method : " + req.method);
	console.log("req.headers : " + JSON.stringify(req.headers));
	//process.exit(); // 서버를 종료한다.
	

	//응답의 설명서(헤더)를 작성하는 도구
  res.setHeader('Content-Type', 'text/html'); //응답 헤더 설정
	res.write('<html>');
	res.write('<head><title>My First Page</title></head>');
	res.write('<body><h1>Hello from my Node.js Server22!</h1></body>');
	res.write('</html>');

	res.end(); //응답을 종료한다.
}); //서버를 생성 


server.listen(3000);

