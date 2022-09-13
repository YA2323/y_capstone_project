package de.neuefische.cgnjava222.capstone.randomflag;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class FlagIntegrationTest {

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

    @DirtiesContext
    @Test
    void getRandomAsianCountries() throws Exception {

        mockMvc.perform(get("/flag/asia"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        {}
                        """));
    }

    @DirtiesContext
    @Test
    void getRandomAfricanCountries() throws Exception {

        mockMvc.perform(get("/flag/africa"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        {}
                        """));
    }

    @DirtiesContext
    @Test
    void getRandomAmericanCountries() throws Exception {

        mockMvc.perform(get("/flag/america"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        {}
                        """));
    }

    @DirtiesContext
    @Test
    void getRandomAllCountries() throws Exception {

        mockMvc.perform(get("/flag/random"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        {}
                        """));
    }

}
