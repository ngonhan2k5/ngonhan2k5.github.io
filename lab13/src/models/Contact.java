package models;

import java.io.Serializable;

import models.enums.Categories;
import models.enums.Genders;

public class Contact implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 7401499471015620307L;
	private int id;
	private String name;
	private Genders gender;
	private Categories category;
	private String message;
	
	
	public Contact(){}
	
	public static Contact as(int i, String name, Genders gender, Categories cat, String message) {
		Contact con = new Contact();
		con.id = i;
		con.name = name;
		con.gender = gender;
		con.category = cat;
		con.message = message;
		return con;
	}
	
	public static Contact as(int i, String name, String gender, String cat, String message) {
		Genders gen = (gender==null||"".equals(gender))?Genders.Na:Genders.valueOf(gender);
		Categories cate = (cat==null||"".equals(cat))?Categories.Na:Categories.valueOf(cat);
		return as(i, name, gen, cate, message);
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Genders getGender() {
		return gender;
	}
	public void setGender(Genders gender) {
		this.gender = gender;
	}
	public Categories getCategory() {
		return category;
	}
	public void setCategory(Categories category) {
		this.category = category;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	
}
