package de.neuefische.cgnjava222.capstone;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnswerRepo extends MongoRepository<Answer, String> {
}
