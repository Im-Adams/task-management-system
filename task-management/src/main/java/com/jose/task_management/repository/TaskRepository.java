package com.jose.task_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jose.task_management.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}