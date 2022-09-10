package de.neuefische.cgnjava222.capstone;


import de.neuefische.cgnjava222.capstone.answer.Answer;
import de.neuefische.cgnjava222.capstone.answer.AnswerRepo;
import de.neuefische.cgnjava222.capstone.answer.AnswerService;
import de.neuefische.cgnjava222.capstone.answer.NewAnswer;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class AnswerServiceTest {

    @Test
    void getAnswers() {
        List<Answer> answers = List.of(
                new Answer("1", "Germany","0"),
                new Answer("2", "Albania","5"),
                new Answer("3", "France","0")
        );

        AnswerRepo answerRepo = mock(AnswerRepo.class);
        when(answerRepo.findAll()).thenReturn(answers);

        AnswerService answerService = new AnswerService(answerRepo);

        List<Answer> actual = answerService.getAnswers();
        List<Answer> expected = List.of(
                new Answer("1", "Germany", "0"),
                new Answer("2", "Albania", "5"),
                new Answer("3", "France", "0")
        );
        assertThat(actual).hasSameElementsAs(expected);
    }

    @Test
    void addAnswer() {

        Answer answer = new Answer("1", "Germany", "5");

        AnswerRepo answerRepo = mock(AnswerRepo.class);
        when(answerRepo.save(any(Answer.class)))
                .thenReturn(answer);

        AnswerService answerService = new AnswerService(answerRepo);
        Answer actual = answerService.addAnswer(new NewAnswer("Germany", "5"));

        assertThat(actual).isEqualTo(answer);
    }
}
