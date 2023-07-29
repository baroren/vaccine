package hac.repo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email; // FIX!!!!
import jakarta.validation.constraints.NotEmpty; // FIX!!!!
import jakarta.validation.constraints.PositiveOrZero; // FIX!!!!
import java.io.Serializable;

@Entity
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
}
