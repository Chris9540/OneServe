package com.oneserve.repository;

import com.oneserve.model.MathQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MathQuestionRepository extends JpaRepository<MathQuestion, Long> {
}
