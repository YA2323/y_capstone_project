package de.neuefische.cgnjava222.capstone;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class AnswerService {

    private final AnswerRepo answerRepo;

    public AnswerService(AnswerRepo answerRepo) {
        this.answerRepo = answerRepo;
    }

    public List<Answer> getAnswers(){
        return answerRepo.findAll();
    }

    public Answer addAnswer(Answer answer){
        return answerRepo.save(new Answer(answer.answerContent()));
    }
}
