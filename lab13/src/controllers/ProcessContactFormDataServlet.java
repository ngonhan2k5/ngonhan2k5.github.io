package controllers;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import models.Contact;
import services.ContactService;

/**
 * Servlet implementation class ContactFormController
 */
@WebServlet("/index")
public class ProcessContactFormDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ProcessContactFormDataServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Contact contact = ContactService.getBean(request);
		List<String> errorMsgs = ContactService.validate(contact);
		
		if (errorMsgs.size()>0){
            System.out.println("Here");
            request.setAttribute("errorMsgs", errorMsgs);
            request.setAttribute("model", contact);
            request.getRequestDispatcher("/WEB-INF/views/contact-form.jsp").forward(request, response);
        }else{
            StringBuilder params = new StringBuilder();
            System.out.println("Here2");
            
            for(String param : Collections.list(request.getParameterNames())) {
                params.append(param).append("=").append(request.getParameter(param)).append("&");
            }
           

            response.sendRedirect(request.getContextPath() + "/thankyou.jsp?"+ params.toString());

        }
	}

}
