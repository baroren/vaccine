package hac.repo;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email; // FIX!!!!
import jakarta.validation.constraints.NotEmpty; // FIX!!!!
import jakarta.validation.constraints.PositiveOrZero; // FIX!!!!
//import org.hibernate.annotations.Table;

import java.io.Serializable;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String dateOfBirth;
    private String address;
    private String city;
    private String zipCode;
    private String landline;
    private String cellPhone;
    private boolean infected;
    private String conditions;
    private String otherCondition;

    // Constructors, getters, setters, etc.

    // Getter and Setter for id
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getter and Setter for firstName
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    // Getter and Setter for lastName
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    // Getter and Setter for dateOfBirth
    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    // Getter and Setter for address
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    // Getter and Setter for city
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    // Getter and Setter for zipCode
    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    // Getter and Setter for landline
    public String getLandline() {
        return landline;
    }

    public void setLandline(String landline) {
        this.landline = landline;
    }

    // Getter and Setter for cellPhone
    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    // Getter and Setter for infected
    public boolean isInfected() {
        return infected;
    }

    public void setInfected(boolean infected) {
        this.infected = infected;
    }

    // Getter and Setter for conditions
    public String[] getConditions() {
        return conditions.split(",");
    }

    public void setConditions(String[] conditions) {
        this.conditions = String.join("," , conditions);
    }

    // Getter and Setter for otherCondition
    public String getOtherCondition() {
        return otherCondition ;
    }

    public void setOtherCondition(String otherCondition) {
        this.otherCondition = otherCondition ;
    }
}
