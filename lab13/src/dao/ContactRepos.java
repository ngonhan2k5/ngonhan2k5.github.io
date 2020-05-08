package dao;

import java.util.Arrays;
import java.util.List;

import models.Contact;
import models.enums.Categories;
import models.enums.Genders;

public class ContactRepos {
	static private List<Contact> list;
	
	public static List<Contact> getList() {
		if (list==null) {
			list = Arrays.asList(
				Contact.as(1, "name1", Genders.Male, Categories.Feedback, "message 1"),
				Contact.as(2, "name2", Genders.Female, Categories.Inquiry, "message 2"),
				Contact.as(3, "name3", Genders.Male, Categories.Complaint, "message 3"),
				Contact.as(4, "name4", Genders.Female, Categories.Feedback, "message 4"),
				Contact.as(5, "name5", Genders.Male, Categories.Inquiry, "message 5")
			);
		}
		return list;
	}
}
