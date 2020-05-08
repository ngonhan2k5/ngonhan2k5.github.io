package tags;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

// import javax.servlet.jsp.tagext.SimpleTagSupport;

public class LabelTag extends SimpleTagSupport {
	String foreColor;
	public void setForeColor(String foreColor) {
		this.foreColor = foreColor;
	}

	public void setText(String text) {
		this.text = text;
	}

	String text;
	
    @Override
    public void doTag() throws JspException, IOException {

    	JspWriter out = getJspContext().getOut();
    	
    	if (foreColor!=null)
    		out.write(String.format("<span style=\"color:%s\">%s</span>", foreColor, text));
    	else
    		out.write(String.format("<span>%s</span>", text));
    	
    }
    
    
}