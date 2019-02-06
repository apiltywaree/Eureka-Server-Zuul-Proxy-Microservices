# Eureka-Server-Zuul-Proxy-Microservices
This is complete micro service application with Spring Boot, Eureka Server, Spring Cloud, Zuul Proxy, AngularJs

This project is a Stock Price Viewer build with Microservices Architecture using Spring Cloud, Spring Boot, Eureka, Zuul.

It has following components:

User
Web UI(angular)
API Gateway(Zuul Proxy/Spring Cloud + Boot)
Service Registry(Eureka/Spring Cloud + Boot)
Quote Maintenance Service(Spring Boot)
Stock Service(Spring Boot)
DB Service(Spring Boot, JPA)
Yahoo Finance API
MySQL

Use the following properties to connect to your DB: 
spring.application.name=db-service server.port=8300

spring.datasource.url=jdbc:mysql://localhost:3306/test 
spring.datasource.username=root spring.datasource.password=****** //Use your password 
spring.datasource.testwhileIdle=true 
spring.datasource.validationQuery=SELECT 1 
spring.jpa.show-sql=true spring.jpa.hibernate.ddl-auto=update 
spring.jpa.hibernate.naming-strategy=org.hibernate.cfg.ImprovedNamingStrategy 
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
