<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asgn 11 - Le Chi Nhan Ngo</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>

</head>

<body>
    
    <main class="container">
        <header>
            <span><c:out value='${name}' /></span>
            <h1>Asgn 11       </h1>
        </header>
        <div>
        <table class="table table-striped">
		  <thead>
		    <tr>
		      <th scope="col">#</th>
		      <th scope="col">Name</th>
		      <th scope="col">Gender</th>
		      <th scope="col">Category</th>
		      <th scope="col">Message</th>
		    </tr>
		  </thead>
		  <tbody>
		  	<c:forEach items="${contacts}" var="contact">
			    <tr>
			      <th scope="row">${contact.name}</th>
			      <td>${contact.gender}</td>
			      <td>${contact.category}</td>
			      <td>...<div style="display:hidden">${contact.message}</div></td>
			    </tr>
		    </c:forEach>
		  </tbody>
		</table>
        </div>
    </main>
    <footer>

        <div id="validator" class="float-right">
            <p>
                <a target="_blank" href="https://validator.w3.org/check/referer"><img src="img/w3c-html.png"
                        alt="Valid HTML5" /></a>
                <a target="_blank" href="https://jigsaw.w3.org/css-validator/check/referer"><img src="img/w3c-css.png"
                        alt="Valid CSS" /></a>
            </p>
        </div>
    </footer>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
    crossorigin="anonymous"></script>
    <!-- <script>
        let onLoginClicked = function (e){
            console.log("Login Clicked");
            let loginFormElements = document.forms['login'].elements;
            for (var i = 0, element; element = loginFormElements[i++];) {
                if (element.type !== "submit"){
                    console.log(`${element.name}:${element.value}`)
                }
            }
        }

        let onProductClicked = function (){
            console.log("New Product Clicked");
            let loginFormElements = document.forms['product'].elements;
            let msg = '';
            for (var i = 0, element; element = loginFormElements[i++];) {
                if ( ["submit", "reset", "button"].indexOf(element.type) == -1 ){
                    console.log(element.type);
                    console.log(`${element.name}:${element.value}`)
                    msg += `${element.name}:${element.value}\r\n`
                }
            }
            alert(msg)
        }
    </script> -->
    <script>
        // $('#login form').on('submit', function(){
        //     // alert('a');
        //     let $inputs = $(this).find(':input');
        //     $inputs.each(function() {
        //         console.log($(this).val());
        //     });
        //     return false;
        // })

        // $('#product form').on('submit', function(){

        //     $('#product').append('<div id="output"></div>');
        //     let $inputs = $(this).find(':input');
        //     $inputs.each(function() {
        //         $('#output').append('<div >'+ $(this).val() + '</div>');
        //     });
            
        //     return false;
        // })

        $(function(){
            $('#name').val('<%=request.getParameter("name")%>');
            $('#name').val('<%=request.getParameter("name")%>');
        })

    </script>

    <script src="js/main.js"></script>
</body>
</html>