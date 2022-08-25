package de.neuefische.cgnjava222.capstone;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answer")
public class AnswerController {

    private final AnswerService answerService;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

    @GetMapping
    public List<Answer> listAnswers(){
        return answerService.getAnswers();
    }

    @PostMapping
    public ResponseEntity<Answer> addAnswer(@RequestBody NewAnswer newAnswer){
        Answer saveAnswer = answerService.addAnswer(newAnswer);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(saveAnswer);
    }

}
