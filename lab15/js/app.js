/* jshint esversion: 6 */
(function($){
    "use strict";
    const API_BASE = 'https://elibraryrestapi.herokuapp.com/elibrary/api/book';
    const BOOK_LIST_URL = API_BASE + '/list';
    const BOOK_ADD_URL = API_BASE + '/add';
    $(function(){
        app.init();
    });

    let app = {
        init: function(){
            // event attachement
            let self = this;
            $("body").on('click', ".nav-link, #addbook", function(){
                
                self.load($(this).attr('href'));
            });

            // initial
            this.load(location.hash || '#home');

            //
            window.addEventListener("popstate", this.back.bind(this));
        },
        //load parts then do action
        load: function loadAction(action){
            let _action = action.replace('#','');
            
            $("#main").load(`parts/${_action}.html #container`,null , 
            function(html, result){
                console.log('result', result);
                actions.do(_action);
            });
            // bold
            $(".nav-link").removeClass(['font-weight-bold','text-warning']);
            $(".nav-link[href='"+ (action=='#add'?'#book':action)  + "']").addClass(['font-weight-bold','text-warning']);
        },
        // when back history
        back: function(event){
            console.log(111,event);
            this.load(location.hash || '#home');
        }
    };


    let actions = {
        // List books
        'book': function(){
            // call API to get list of books
            fetch(BOOK_LIST_URL)
                .then(function(res){
                    return res.json();
                })
                .then(function(data){
                    // console.log(data);
                    let items ='';

                    data
                        .sort(function(i1, i2){
                            return i1.bookId - i2.bookId;
                        })
                        .forEach(function (item){
                            // filter script and tag
                            let {bookId, isbn, title, overdueFee, publisher, datePublished} =  new Proxy(item, {
                                get: function (oTarget, sKey) {
                                    return oTarget[sKey] && typeof oTarget[sKey] == 'string' && oTarget[sKey].replace(/</g, "&lt;") || oTarget[sKey];
                                }
                            });
                        
                            items += 
                                `<tr>
                                    <td>${bookId}</td>
                                    <td>${isbn}</td>
                                    <td>${title}</td>
                                    <td>${overdueFee}</td>
                                    <td>${publisher}</td>
                                    <td>${datePublished}</td>
                                </tr>`;
                        });
                    $('#booksTable tbody').html(items);
                    
                })
                .catch(err=>{
                    console.log(err);
                    $('#booksTable tbody').html('<tr><td colspan="6"><p style="color:red;">We are sorry. The elibrary books data service is unavailable. Please try again later</p></td></tr>');
                });
        },
        // Add book
        'add': function(){
            $("#bookForm").on("submit", function(evt) {
                evt.preventDefault();

                const isbn = $("#isbn").val();
                const title = $("#title").val();
                const overdueFee = parseFloat($("#overdueFee").val());
                const publisher = $("#publisher").val();
                const datePublished = $("#datePublished").val();
                
                // Add New Book data
                const newBookData = {
                    "isbn": isbn,
                    "title": title,
                    "overdueFee": overdueFee,
                    "publisher": publisher,
                    "datePublished": datePublished
                };
    
                fetch(BOOK_ADD_URL, {
                    method: "post",
                    body: JSON.stringify(newBookData),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(function(response) {
                    return response.json();
                }).then(function (jsonResponseData) {
                    console.log(jsonResponseData);  
                    $("#modalBookFormAlertMessageBox").show();
                    $("#modalBookFormStrongAlertText").text("Book successfully added!");
                    $("#modalBookFormAlertMessageBox").removeClass("alert-danger").addClass("alert-success");

                    setTimeout(function(){history.back();}, 2000);
                }).catch(function(error) {
                    console.error(error);
                    $("#modalBookFormAlertMessageBox").show();
                    $("#modalBookFormStrongAlertText").text(error);
                    $("#modalBookFormAlertMessageBox").removeClass("alert-success").addClass("alert-danger");
                });

            });
        },
        do: function(action){
            if (action in this)
                this[action]();
            else
                console.log('No action:' + action);
        }
    };
    
})(jQuery);
