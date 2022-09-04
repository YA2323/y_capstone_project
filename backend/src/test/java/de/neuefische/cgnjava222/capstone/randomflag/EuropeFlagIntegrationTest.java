package de.neuefische.cgnjava222.capstone.randomflag;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class EuropeFlagIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @DirtiesContext
    @Test
    void getRandomEuropeCountries() throws Exception {

        mockMvc.perform(get("/flag/europe"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        {}
                        """));
    }

}
