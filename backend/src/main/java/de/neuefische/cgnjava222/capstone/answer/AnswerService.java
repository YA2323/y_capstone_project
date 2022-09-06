package de.neuefische.cgnjava222.capstone.answer;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class AnswerService {

    private final AnswerRepo answerRepo;

    public AnswerService(AnswerRepo answerRepo) {
        this.answerRepo = answerRepo;
    }

    public List<Answer> getAnswers() {
        return answerRepo.findAll();
    }

    public Answer addAnswer(NewAnswer newAnswer) {

        return answerRepo.save(new Answer(
                UUID.randomUUID().toString(),
                newAnswer.answerTrueOrFalse()
        ));
    }

    public boolean deleteAllAnswers(String id){
        if(answerRepo.existsById(id)) {
            answerRepo.deleteById(id);
            return true;
        }
        else return false;
    }

}
