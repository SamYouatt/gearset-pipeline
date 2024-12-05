public class DemoApexClass {
	private Integer minimumNameLength = 5;
    
    public boolean IsValidName(String name) {
        return name.length() >= 5;
    }
    
    public void AddNameToLead(String name) {
        if (IsValidName(name)) {
            // Do some salesforce stuff
        }
    }
}