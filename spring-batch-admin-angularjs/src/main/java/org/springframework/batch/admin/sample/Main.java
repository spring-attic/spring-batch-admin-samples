/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.springframework.batch.admin.sample;

import org.springframework.batch.admin.annotation.EnableBatchAdmin;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.hateoas.HypermediaAutoConfiguration;
import org.springframework.boot.autoconfigure.web.MultipartAutoConfiguration;

/**
 * <p>Spring Boot launching point for Spring Batch Admin.</p>
 *
 * @author Michael Minella
 */
@SpringBootApplication(exclude = {HypermediaAutoConfiguration.class, MultipartAutoConfiguration.class})
@EnableBatchAdmin
public class Main {

	public static void main(String [] args) {
		SpringApplication.run(Main.class, args);
	}
}
