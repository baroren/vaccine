package hac.conroller;

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
        return registrationRepository.save(registration);
    }

    // Add more API endpoints as needed (e.g., update, delete)
}
