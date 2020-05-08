<%@ page contentType="text/html" language = "java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you</title>
</head>
<body>
    <h1>Thank You! This is your contact information:</h1>
    <ul>
        <li><span class="name">Name:</span>&nbsp;<span class="value">${param.name}</span></li>
        <li><span class="name">Gender:</span>&nbsp;<span class="value">${param.gender}</span></li>
        <li><span class="name">Category:</span>&nbsp;<span class="value">${param.cat}</span></li>
        <li><span class="name">Message:</span>&nbsp;<span class="value">${param.msg}</span></li>
    </ul>
</body>
</html>