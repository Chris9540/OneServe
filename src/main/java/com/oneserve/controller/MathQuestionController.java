package com.oneserve.controller;

import com.oneserve.model.MathQuestion;
import com.oneserve.repository.MathQuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/question")
public class MathQuestionController {

    @Autowired
    private MathQuestionRepository mathQuestionRepository;

    @GetMapping("/list")
    public List<MathQuestion> getList() {
        return mathQuestionRepository.findAll(PageRequest.of(0, 50, Sort.by(Sort.Direction.DESC, "id"))).toList();
    }

    @PostMapping("/add")
    public MathQuestion addMathQuestion(@RequestBody MathQuestion mathQuestion) {
        return  mathQuestionRepository.save(mathQuestion);
    }
}
