package services;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;

import dao.ContactRepos;
import models.Contact;
import models.enums.Categories;
import models.enums.Genders;

public class ContactService {
	
	public static List<Contact> getList() {
		return ContactRepos.getList();
	}
	
	public static List<String> validate(Contact contact) {
		List<String> errorMsg = new ArrayList<String>();
		
        if (StringUtils.isEmpty(contact.getName()))
            errorMsg.add("Missing Name input");
        if (contact.getGender() == Genders.Na)
        	errorMsg.add("Missing Gender input");
        if (contact.getCategory() == Categories.Na)
        	errorMsg.add("Missing Category input");
        if (StringUtils.isEmpty(contact.getMessage()))
        	errorMsg.add("Missing Message input");
        
        return errorMsg;
	}
	
	public static Contact getBean(HttpServletRequest req) {
		int id = getList().size() + 1;
		System.out.println("111:"+ "".equals(req.getParameter("gender")));
		
		return Contact.as(
					id, 
					req.getParameter("name"), 
					req.getParameter("gender"),
					req.getParameter("cat"),
					req.getParameter("msg")
				);
	}
}
