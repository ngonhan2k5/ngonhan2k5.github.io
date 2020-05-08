package edu.miu.cs.cs472.lesson13jspmvc.services;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import edu.miu.cs.cs472.lesson13jspmvc.model.ContactMessage;

public class ContactMessageService {
	private static ContactMessageService INSTANCE;
	public static ContactMessageService instance() {
		if (INSTANCE==null) {
			INSTANCE = new ContactMessageService();
		}
		
		return INSTANCE;
	}
	
	public List<ContactMessage> getContactMessageList(){
		return Arrays.asList(
            	new ContactMessage("John H. Smith", "Male", "Feedback", "This is a feedback"),
            	new ContactMessage("Anna Jones", "Female", "Inquiry", "This is an inquiry"),
            	new ContactMessage("Bob W. Adamson", "Male", "Complaint", "This is a compliant"),
            	new ContactMessage("Zacary Najib Ali", "Male", "Inquiry", "This is an inquiry"),
            	new ContactMessage("Carlos Hernandez", "Male", "Inquiry", "This is an inquiry"),
            	new ContactMessage("Tuyen Le Nguyen", "Female", "Feedback", "This is an feedback")
            );
	}
	
	public List<ContactMessage> getSortedContactMessageList(){
		// Sort data first
        return instance().getContactMessageList().stream()
        	.sorted(Comparator.comparing(ContactMessage::getCustomerName))
        	.collect(Collectors.toList());
	}
	
	public List<ContactMessage> getSearchContactMessageList(String keyword){
		List<ContactMessage> list = getSortedContactMessageList().stream()
        	.filter(
        			c-> c.getCustomerName().toLowerCase().indexOf(keyword.toLowerCase())>-1
        			|| c.getMessage().toLowerCase().indexOf(keyword.toLowerCase())>-1
        	)        	
        	.collect(Collectors.toList());
		
		return list;
	}
	
	
}
