package de.neuefische.cgnjava222.capstone.wronganswer;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class WrongAnswerService {

    private final WrongAnswerRepo wrongAnswerRepo;

    public WrongAnswerService(WrongAnswerRepo wrongAnswerRepo) {
        this.wrongAnswerRepo = wrongAnswerRepo;
    }

    public List<WrongAnswer> getWrongAnswers(){
        return wrongAnswerRepo.findAll();
    }

    public WrongAnswer addWrongAnswer(NewWrongAnswer newWrongAnswer){
        return wrongAnswerRepo.save(new WrongAnswer(
                UUID.randomUUID().toString(),
                newWrongAnswer.wrongAnswer()
        ));
    }
}
