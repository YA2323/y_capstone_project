package de.neuefische.cgnjava222.capstone;

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
class AnswerIntegrationTest {

    @Autowired
    MockMvc mockMvc;


    @DirtiesContext
    @Test
    void listAnswers() throws Exception {

        mockMvc.perform(get("/answer"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        [] 
                        """));
    }

    @Test
    void addAnswer() throws Exception {

        mockMvc.perform(post("/answer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"answerContent" : "Germany"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                          {"answerContent" : "Germany"}     
                        """)
                );
    }


    @DirtiesContext
    @Test
    void listWrongAnswers() throws Exception {

        mockMvc.perform(get("/answer/wrong"))
                .andExpect(status().isOk())
                .andExpect(content().json(""" 
                        []    
                        """));
    }

    @Test
    void addWrongAnswer() throws Exception {

        mockMvc.perform(post("/answer/wrong")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"wrongAnswer" : "Germany"}
                                """)
                )
                .andExpect(status().is(201))
                .andExpect(content().json("""
                          {"wrongAnswer" : "Germany"}     
                        """)
                );
    }

}
