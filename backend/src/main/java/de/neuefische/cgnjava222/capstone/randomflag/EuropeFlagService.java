package de.neuefische.cgnjava222.capstone.randomflag;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class EuropeFlagService {

    String url = "https://countryflagsapi.com/png/";

    List<String> europeCountries = Arrays.asList("Albania", "Andorra", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechia", "Denmark",
            "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia",
            "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway",
            "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom",
            "The Holy See");

    public Flags getRandomEuropeCountries() {

        Collections.shuffle(europeCountries);

        String firstCountrieUrl = url + europeCountries.get(0);
        String firstCountrie = europeCountries.get(0);
        String secondCountrie = europeCountries.get(10);
        String thirdCountrie = europeCountries.get(20);
        String fourthCountrie = europeCountries.get(30);

        return new Flags(firstCountrieUrl, firstCountrie, secondCountrie, thirdCountrie, fourthCountrie);
    }
}
