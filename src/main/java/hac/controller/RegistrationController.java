package hac.controller;

import hac.repo.Registration;
import hac.repo.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/registrations")
public class RegistrationController {
    private final RegistrationRepository registrationRepository;

    @Autowired
    public RegistrationController(RegistrationRepository registrationRepository) {
        this.registrationRepository = registrationRepository;
    }

    @GetMapping
    public List<Registration> getAllRegistrations() {
        return registrationRepository.findAll();
    }

    @PostMapping
    public Registration createRegistration(@RequestBody Registration registration) {
        try {
            System.out.println("Received new registration: " + registration);

            // Save the registration object to the database
            Registration savedRegistration = registrationRepository.save(registration);

            System.out.println("Saved registration: " + savedRegistration);
            return savedRegistration;
        } catch (Exception e) {
            e.printStackTrace();
            // You can log the exception or return an error response here if needed
            return null;
        }
    }



    // Add more API endpoints as needed (e.g., update, delete)
}
