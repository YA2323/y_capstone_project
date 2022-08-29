package de.neuefische.cgnjava222.capstone;


import de.neuefische.cgnjava222.capstone.answer.Answer;
import de.neuefische.cgnjava222.capstone.answer.AnswerRepo;
import de.neuefische.cgnjava222.capstone.answer.AnswerService;
import de.neuefische.cgnjava222.capstone.answer.NewAnswer;
import de.neuefische.cgnjava222.capstone.wronganswer.NewWrongAnswer;
import de.neuefische.cgnjava222.capstone.wronganswer.WrongAnswer;
import de.neuefische.cgnjava222.capstone.wronganswer.WrongAnswerRepo;
import de.neuefische.cgnjava222.capstone.wronganswer.WrongAnswerService;
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
                new Answer("1", "Germany"),
                new Answer("2", "Albania"),
                new Answer("3", "France")
        );

        AnswerRepo answerRepo = mock(AnswerRepo.class);
        when(answerRepo.findAll()).thenReturn(answers);

        AnswerService answerService = new AnswerService(answerRepo);

        List<Answer> actual = answerService.getAnswers();
        List<Answer> expected = List.of(
                new Answer("1", "Germany"),
                new Answer("2", "Albania"),
                new Answer("3", "France")
        );
        assertThat(actual).hasSameElementsAs(expected);
    }

    @Test
    void addAnswer() {

        Answer answer = new Answer("1", "Germany");

        AnswerRepo answerRepo = mock(AnswerRepo.class);
        when(answerRepo.save(any(Answer.class)))
                .thenReturn(answer);

        AnswerService answerService = new AnswerService(answerRepo);
        Answer actual = answerService.addAnswer(new NewAnswer("Germany"));

        assertThat(actual).isEqualTo(answer);
    }


    @Test
    void getWrongAnswers() {
        List<WrongAnswer> wrongAnswers = List.of(
                new WrongAnswer("1", "Germany"),
                new WrongAnswer("2", "Albania"),
                new WrongAnswer("3", "France")
        );

        WrongAnswerRepo wrongAnswerRepo = mock(WrongAnswerRepo.class);
        when(wrongAnswerRepo.findAll()).thenReturn(wrongAnswers);

        WrongAnswerService wrongAnswerService = new WrongAnswerService(wrongAnswerRepo);

        List<WrongAnswer> actual = wrongAnswerService.getWrongAnswers();
        List<WrongAnswer> expected = List.of(
                new WrongAnswer("1", "Germany"),
                new WrongAnswer("2", "Albania"),
                new WrongAnswer("3", "France")
        );
        assertThat(actual).hasSameElementsAs(expected);
    }

    @Test
    void addWrongAnswer() {

        WrongAnswer wrongAnswer = new WrongAnswer("1", "Germany");

        WrongAnswerRepo wrongAnswerRepo = mock(WrongAnswerRepo.class);
        when(wrongAnswerRepo.save(any(WrongAnswer.class)))
                .thenReturn(wrongAnswer);

        WrongAnswerService wrongAnswerService = new WrongAnswerService(wrongAnswerRepo);
        WrongAnswer actual = wrongAnswerService.addWrongAnswer(new NewWrongAnswer("Germany"));

        assertThat(actual).isEqualTo(wrongAnswer);
    }
}
