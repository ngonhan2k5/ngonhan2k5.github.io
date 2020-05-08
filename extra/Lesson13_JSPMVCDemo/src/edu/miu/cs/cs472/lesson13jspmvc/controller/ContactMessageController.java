package edu.miu.cs.cs472.lesson13jspmvc.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;
import edu.miu.cs.cs472.lesson13jspmvc.services.ContactMessageService;

/**
 * Servlet implementation class ContactMessageController
 */
@WebServlet(description = "ContactMessageController", urlPatterns = { "/contact-messages" })
public class ContactMessageController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ContactMessageController() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<ContactMessage> sortedContactMessages = ContactMessageService.instance().getSortedContactMessageList();
       
		request.setAttribute("contactMessages", sortedContactMessages);
		request.getRequestDispatcher("/WEB-INF/views/contact-messages.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<ContactMessage> contactMessages;
		
		String keyword = request.getParameter("keyword");
		if ( !StringUtils.isEmpty(request.getParameter("keyword")) ){
			contactMessages = ContactMessageService.instance().getSearchContactMessageList(keyword);
		}else {
			contactMessages = ContactMessageService.instance().getSortedContactMessageList();
		}
		
		request.setAttribute("keyword", keyword);
		 
		request.setAttribute("contactMessages", contactMessages);
		request.getRequestDispatcher("/WEB-INF/views/contact-messages.jsp").forward(request, response);
	}
	
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init();
    }

}
