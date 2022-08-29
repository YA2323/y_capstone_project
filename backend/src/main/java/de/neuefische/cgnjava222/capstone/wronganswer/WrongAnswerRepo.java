package de.neuefische.cgnjava222.capstone.wronganswer;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WrongAnswerRepo extends MongoRepository<WrongAnswer, String> {
}
