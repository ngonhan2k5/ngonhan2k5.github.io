package tags;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class CurrentDateTimeTag extends SimpleTagSupport {
	String color, size;
	
	@Override
	public void doTag() throws JspException, IOException {
		JspWriter out = getJspContext().getOut();
		
		
    	if (color!=null)
    		out.write(String.format("<span style=\"%s %s\">%s</span>", getColor(), getSize(), getDateTime()));
    	else
    		out.write(String.format("<span>%s</span>", getDateTime()));
    	
	}

	public String getColor() {
		return "color:" + color + ";";
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getSize() {
		return "size:" + size + ";";
	}

	public void setSize(String size) {
		this.size = size;
	}
	
	public String getDateTime() {
		LocalDateTime dtNow = LocalDateTime.now();
		return dtNow.atZone(ZoneOffset.systemDefault()).format(DateTimeFormatter.ofPattern("EEEE yyyy.MM.dd 'at' H:m:s a z"));
//		return dtNow.format(DateTimeFormatter.ofPattern("EEEE yyyy.MM.dd"));
	}
}
