package de.neuefische.cgnjava222.capstone.randomflag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/flag")
public class FlagController {

    private final EuropeFlagService europeFlagService;

    public FlagController(EuropeFlagService europeFlagService) {
        this.europeFlagService = europeFlagService;
    }

    @GetMapping(path = "/europe")
    Flags getRandomFlags() {
        return europeFlagService.getRandomEuropeCountries();
    }
}
