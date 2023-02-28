<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script>
	$(function() {
		$('#create').click(function() {
			var vo = {
				name : '둘리',
				email : 'dooly@gamil.com',
				password : '1234',
				gender : 'male'
			};

			$.ajax({
				url : '/ch08/api/user',
				type : 'post',
				dataType : 'json',
				contentType : 'application/json',
				data : JSON.stringify(vo),
				success : function(response) {
					console.log(response);
				}

			})
		})
	})
</script>
</head>
<body>
	<h1>AJAX Test: Restful API</h1>

	<button>
		<div id='create'>Create(post)</div>
	</button>
	<br>
	<br>
	<button>
		<div id='read'>Read(get)</div>
	</button>
	<br>
	<br>
	<button>
		<div id='update'>Update(put)</div>
	</button>
	<br>
	<br>
	<button>
		<div id='delete'>Delete(delete)</div>
	</button>
</body>
</html>