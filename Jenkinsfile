pipeline{
	agent any
	stages{
			stage ('Compile Stage'){
			
				steps {
        				sh 'mvn --version'
        				sh 'mvn install'
					}
				}
				
			stage ('Test Stage'){
				steps {
					sh 'mvn test'
				}
			}
			stage  ('Cucumber Reports'){
				steps{
				cucumber buildStatus: "UNSTABLE",
				fileIncludePattern: "**/target/cucumber.json",
				jsonReportDirectory: 'target'
				}
			}
			
		}
}
