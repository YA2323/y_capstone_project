package de.neuefische.cgnjava222.capstone;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnswerRepo extends MongoRepository<Answer,String> {
}
