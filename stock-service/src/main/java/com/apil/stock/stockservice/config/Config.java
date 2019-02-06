package com.apil.stock.stockservice.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class Config {

    @LoadBalanced //Spring will know it needs to do load balancing, client side load balancing when eureka service is used
    @Bean         //create bean only once
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }
}
