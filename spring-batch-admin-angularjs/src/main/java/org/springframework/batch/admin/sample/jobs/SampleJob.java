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
package org.springframework.batch.admin.sample.jobs;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepScope;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Sample Spring Batch Job.  This job takes a single, optional, job parameter: fail.  If
 * set to true, the job will throw an exception and fail.
 *
 * @author Michael Minella
 */
@Configuration
public class SampleJob {

	@Autowired
	public JobBuilderFactory jobBuilderFactory;

	@Autowired
	public StepBuilderFactory stepBuilderFactory;

	@Bean
	@StepScope
	public FailableTasklet tasklet(@Value("#{jobParameters[fail]}") Boolean failable) {
		if(failable != null) {
			return new FailableTasklet(failable);
		}
		else {
			return new FailableTasklet(false);
		}
	}

	@Bean
	public Step step() {
		return stepBuilderFactory.get("step")
				.tasklet(tasklet(null)).build();
	}

	@Bean
	public Job job() {
		return jobBuilderFactory.get("job")
				.start(step())
				.build();
	}

	public static class FailableTasklet implements Tasklet {

		private final boolean fail;

		public FailableTasklet(boolean fail) {
			this.fail = fail;
		}

		@Override
		public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {
			System.out.println("Tasklet was executed");

			if(fail) {
				throw new RuntimeException("This exception was expected");
			}
			else {
				return RepeatStatus.FINISHED;
			}
		}
	}
}
