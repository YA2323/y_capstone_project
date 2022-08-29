package de.neuefische.cgnjava222.capstone.wronganswer;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/answer/wrong")
public class WrongAnswerController {

    private final WrongAnswerService wrongAnswerService;

    public WrongAnswerController(WrongAnswerService wrongAnswerService) {
        this.wrongAnswerService = wrongAnswerService;
    }

    @GetMapping
    public List<WrongAnswer> listWrongAnswers(){
        return wrongAnswerService.getWrongAnswers();
    }

    @PostMapping
    public ResponseEntity<WrongAnswer> addWrongAnswer(@RequestBody NewWrongAnswer newWrongAnswer){
        WrongAnswer saveWrongAnswer = wrongAnswerService.addWrongAnswer(newWrongAnswer);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(saveWrongAnswer);
    }
}
