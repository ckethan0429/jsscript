var list = require ('./tour.js')

list.shuffle();

//var tours = list.filter(function(e){
//	return e.regions = '경상권';
//});

var tours = {};
list.forEach(tour => {
	if(!tours[tour.region]){		//해당 권역이 처음나온 경우
		tours[tour.region] = [];	//배열 배정
	}
	tours[tour.region].push(tour); // 권역 배열에 해당 데이터 추가
})

var regions = Object.keys(tours); 	//권역 리스트 얻기
console.log(regions);

var tourList = tours["경상권"];	//지정한 권역의 목록얻기
console.log(tourList);

for(var i in tourList){
	console.log(i);	//shuffle도 출력됨 --> shuffle도 배열의 속성
}

function toTr(tour){
	return	`
	<tr>
		<td>${tour.region}</td>
		<td>${tour.city}</td>
		<td>${tour.address}</td>
	</tr>`;
}

var trs = tourList.map(toTr).join('\n');
var table = '<table>\n' + trs +'\n</table>';
console.log(table);