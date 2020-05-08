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
            <h1>Assignment 13a - JSP</h1>
        </header>
        <div class="tab-content" id="myTabContent">
            <section class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <h2>Contact Form</h2>
                
                <c:forEach items="${errorMsgs}" var="errMsg">
                	<br><span style="color:red">${errMsg}</span>
                </c:forEach>
                
                <form name="contact" action="index" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" placeholder="Enter name" value="${param.name}" class="form-control" id="name">
                        
                    </div>
                    <div class="row">
                        <!-- gender -->
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Gender</label><br>
                                <div class="form-check" style="display: inline-block;margin-top: 10px;">
                                    <input class="form-check-input" type="radio" name="gender" id="deptyes" value="Male" <%="Male".equals(request.getParameter("gender"))?"checked":"" %> >
                                    <label class="form-check-label" for="deptyes">
                                        Male
                                    </label>
                                </div>

                                <div class="form-check" style="display: inline-block; margin-left: 10px;">
                                    <input class="form-check-input" type="radio" name="gender" id="deptno" value="Female" <%="Female".equals(request.getParameter("gender"))?"checked":"" %>>
                                    <label class="form-check-label" for="deptno">
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>
                        <!-- cat -->
                        <div class="col-md-3">
                            <div class="form-group">
                                <label>Category</label>
                                <select class="form-control" type="text" name="cat" id="cat">
                                    <option value="">Select...</option>
                                    <option value="Feedback" <%="Feedback".equals(request.getParameter("cat"))?"selected":"" %> >Feedback</option>
                                    <option value="Inquiry" <%="Inquiry".equals(request.getParameter("cat"))?"selected":"" %> >Inquiry</option>
                                    <option value="Complaint" <%="Complaint".equals(request.getParameter("cat"))?"selected":"" %> >Complaint</option>
                                </select>
                                <small class="form-text text-muted">Enter the category</small>
                            </div>
                        </div>
                    </div>
                    <!-- msg -->
                    <div class="form-group">
                        <label for="msg">Message</label>
                        <textarea rows="10" name="msg" class="form-control" id="msg" placeholder="Enter Messages here">${param.msg}</textarea>

                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </section>
            
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

        //$(function(){
        //    $('#name').val('<%=request.getParameter("name")%>');
        //    $('#name').val('<%=request.getParameter("name")%>');
        //})

    </script>

    <script src="js/main.js"></script>
</body>
</html>