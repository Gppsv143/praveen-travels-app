pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'your-docker-image'
        DOCKER_TAG = 'latest'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                    sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'npm test'  // Adjust based on your test framework
                }
            }
        }
        stage('SonarQube') {
            steps {
                script {
                    sh 'mvn sonar:sonar'  // If using Maven; adjust if necessary
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'kubectl apply -f k8s/deployment.yaml'
                }
            }
        }
    }
}
