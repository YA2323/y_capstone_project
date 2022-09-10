package de.neuefische.cgnjava222.capstone.randomflag;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/flag")
public class FlagController {

    private final FlagService flagService;

    public FlagController(FlagService flagService) {
        this.flagService = flagService;
    }

    @GetMapping(path = "/europe")
    Flags getRandomEuropeFlags() {
        return flagService.getRandomEuropeCountries();
    }

    @GetMapping(path = "/asia")
    Flags getRandomAsianFlags() {
        return flagService.getRandomAsianCountries();
    }
}
