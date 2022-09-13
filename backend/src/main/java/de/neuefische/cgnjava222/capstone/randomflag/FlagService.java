package de.neuefische.cgnjava222.capstone.randomflag;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class FlagService {

    String url = "https://countryflagsapi.com/png/";

    List<String> europeCountries = Arrays.asList("Albania", "Andorra", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechia", "Denmark",
            "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia",
            "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway",
            "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom",
            "The Holy See");

    List<String> asianCountries = Arrays.asList("United Arab Emirates ", "Vietnam", "Tajikistan", "Israel", "Iran", "Bhutan", "Laos", "Thailand", "Lebanon", "Kyrgyzstan", "Turkmenistan"
            , "Singapore", "Myanmar", "Maldives", "Oman", "Kuwait", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan"
            , "Mongolia", "Malaysia", "Yemen", "Armenia", "Qatar", "Indonesia", "North Korea", "Pakistan", "Sri Lanka", "Kazakhstan", "Bahrain", "Cambodia"
            , "Bangladesh", "China", "Japan", "Cyprus", "Philippines", "Jordan", "India");

    List<String> africanCountries = Arrays.asList("Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde ", "Cameroon", "Chad",
            "Congo", "Democratic Republic of Congo", "Equatorial Guinea", "Guinea", "Eritrea", "Eswatini",
            "Ethiopia", "Gabon", "Gambia", "Ghana", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Mauritania",
            "Mauritius", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles",
            "Sierra Leone", "South Africa", "Sudan", "South Sudan", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe",
            "Morocco", "Egypt", "Tunisia");


    List<String> americanCountries = Arrays.asList("USA", "Mexico", "Canada", "Guatemala", "Cuba", "Haiti", "Dominican Republic", "Honduras"
            , "Nicaragua", "Costa Rica", "Panama", "Jamaica", "Trinidad and Tobago", "Belize", "Barbados", "Saint Lucia", "Grenada",
            "Antigua and Barbuda", "Dominica", "Greenland", "Saint Kitts and Nevis", "Guyana", "Paraguay", "Suriname", "Colombia",
            "Argentina", "Uruguay", "Peru", "French Guiana", "Venezuela", "Brazil", "Chile", "Ecuador", "Bolivia", "El Salvador");


    List<String> allCountries = Arrays.asList("USA", "Mexico", "Canada", "Guatemala", "Cuba", "Haiti", "Dominican Republic", "Honduras"
            , "Nicaragua", "Costa Rica", "Panama", "Jamaica", "Trinidad and Tobago", "Belize", "Barbados", "Saint Lucia", "Grenada",
            "Antigua and Barbuda", "Dominica", "Greenland", "Saint Kitts and Nevis", "Guyana", "Paraguay", "Suriname", "Colombia",
            "Argentina", "Uruguay", "Peru", "French Guiana", "Venezuela", "Brazil", "Chile", "Ecuador", "Bolivia", "El Salvador", "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde ", "Cameroon", "Chad",
            "Congo", "Democratic Republic of Congo", "Equatorial Guinea", "Guinea", "Eritrea", "Eswatini",
            "Ethiopia", "Gabon", "Gambia", "Ghana", "Kenya", "Lesotho", "Liberia", "Madagascar", "Malawi", "Mali", "Mauritania",
            "Mauritius", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles",
            "Sierra Leone", "South Africa", "Sudan", "South Sudan", "Tanzania", "Togo", "Uganda", "Zambia", "Zimbabwe",
            "Morocco", "Egypt", "Tunisia", "United Arab Emirates ", "Vietnam", "Tajikistan", "Israel", "Iran", "Bhutan", "Laos", "Thailand", "Lebanon", "Kyrgyzstan", "Turkmenistan"
            , "Singapore", "Myanmar", "Maldives", "Oman", "Kuwait", "Iraq", "Afghanistan", "Saudi Arabia", "Uzbekistan"
            , "Mongolia", "Malaysia", "Yemen", "Armenia", "Qatar", "Indonesia", "North Korea", "Pakistan", "Sri Lanka", "Kazakhstan", "Bahrain", "Cambodia"
            , "Bangladesh", "China", "Japan", "Cyprus", "Philippines", "Jordan", "India", "Albania", "Andorra", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Czechia", "Denmark",
            "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia",
            "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway",
            "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom",
            "The Holy See");

    private Flags getRandomFlags(List<String> countryList) {
        Collections.shuffle(countryList);

        String firstCountryUrl = url + countryList.get(0);
        String firstCountry = countryList.get(0);
        String secondCountry = countryList.get(10);
        String thirdCountry = countryList.get(20);
        String fourthCountry = countryList.get(30);

        return new Flags(firstCountryUrl, firstCountry, secondCountry, thirdCountry, fourthCountry);
    }

    public Flags getRandomEuropeCountries() {
        return getRandomFlags(europeCountries);
    }

    public Flags getRandomAsianCountries() {
        return getRandomFlags(asianCountries);
    }

    public Flags getRandomAfricanCountries() {
        return getRandomFlags(africanCountries);
    }

    public Flags getRandomAmericanCountries() {
        return getRandomFlags(americanCountries);
    }

    public Flags getRandomAllCountries() {
        return getRandomFlags(allCountries);
    }
}
