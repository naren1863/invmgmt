package com.naren.invmgmt.service;

import com.naren.invmgmt.entity.SubjectEntity;
import com.naren.invmgmt.repository.SubjectRepository;
import com.naren.invmgmt.request.Subject;
import com.naren.invmgmt.util.SubjectUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectService {

    @Autowired
    SubjectRepository subjectRepository;

    @Autowired
    SubjectUtil subjectUtil;

    public Subject saveSubject(Subject subject){
        SubjectEntity subjectEntity = subjectUtil.convertToEntity(subject);
        subjectEntity = subjectRepository.save(subjectEntity);

        subject = subjectUtil.convertToDataObject(subjectEntity);
        return subject;
    }

    public List<Subject> getSubjects(){
        //SubjectEntity subjectEntity = subjectUtil.convertToEntity(subject);
        List<SubjectEntity> subjectEntityList = subjectRepository.findAll();

        List<Subject> subjectList = new ArrayList<Subject>();
        subjectEntityList.forEach(subEntity -> {

            subjectList.add(subjectUtil.convertToDataObject(subEntity));
        });
        System.out.println("getSubjects: " + subjectList);
        return subjectList;
    }
}
